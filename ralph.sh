#!/bin/bash
# Ralph workflow loop — Dom na Travni gori (mountain house / nature stay website)
# Drives an AI coding agent through tasks.json, one task per iteration.
# Usage: ./ralph.sh <iterations>
#   Example: ./ralph.sh 5

CLAUDE="claude"
OUTPUT_DIR="/tmp/ralph"
mkdir -p "$OUTPUT_DIR"

# --- Project files (must sit next to this script) ---
TASKS_FILE="tasks.json"
PROGRESS_FILE="progress.md"
GUIDE_FILE="CLAUDE.md"
PRD_FILE="PRD-DomNaTravniGori.md"

if [ -z "$1" ]; then
  echo "Usage: ./ralph.sh <iterations>"
  echo "Example: ./ralph.sh 5"
  exit 1
fi

ITERATIONS="$1"
TIMESTAMP=$(date '+%Y%m%d_%H%M%S')
LOG_FILE="${OUTPUT_DIR}/ralph_${TIMESTAMP}.log"

log() {
  local msg="[$(date '+%H:%M:%S')] $1"
  echo "$msg"
  echo "$msg" >> "$LOG_FILE"
}

# Ensure required files exist; create an empty progress.md on first run.
for f in "$TASKS_FILE" "$GUIDE_FILE" "$PRD_FILE"; do
  if [ ! -f "$f" ]; then
    echo "Error: missing file $f"
    exit 1
  fi
done

if [ ! -f "$PROGRESS_FILE" ]; then
  echo "# Progress — Dom na Travni gori" > "$PROGRESS_FILE"
  echo "" >> "$PROGRESS_FILE"
  log "Created empty $PROGRESS_FILE"
fi

echo "Starting Ralph workflow for $ITERATIONS iterations..."
echo "Project: Dom na Travni gori"
echo "Log file: $LOG_FILE"
echo ""

for ((i=1; i<=ITERATIONS; i++)); do
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "Iteration $i of $ITERATIONS"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo ""

  ITER_OUTPUT="${OUTPUT_DIR}/iteration_${i}.txt"

  TASKS_CONTENT=$(cat "$TASKS_FILE")
  PROGRESS_CONTENT=$(cat "$PROGRESS_FILE")
  GUIDE_CONTENT=$(cat "$GUIDE_FILE")
  PRD_CONTENT=$(cat "$PRD_FILE")

  INSTRUCTIONS='You are working through the Dom na Travni gori project requirements and task list.

IMPORTANT:
- Read PRD-DomNaTravniGori.md thoroughly for project requirements and intent.
- Read CLAUDE.md thoroughly before starting (stack, styling, design, scope rules).
- Read progress.md to see what has already been done.
- Read tasks.json and select exactly one pending task to work on.
- Verify that all dependencies for that task are marked as done before starting.
- Work only on one task in this iteration.

PROJECT GUARDRAILS (from CLAUDE.md — do not violate):
- Stack: Astro 4.x + React islands + SCSS (classic) + MDX + Netlify. NO Tailwind anywhere.
- Styles live in dedicated SCSS files under src/styles/, NOT inside components. No utility classes, no inline <style> with hardcoded values.
- No raw hex / magic numbers in blocks — use design tokens (var(--token)) only.
- All visible text is [MOCK] placeholder pulled from src/i18n/en.ts — never write real marketing copy and never invent facts (distances, prices, amenities, awards).
- English only in Phase 1; language switcher is a non-functional stub; keep i18n-ready.
- In scope (do NOT remove as "unnecessary"): Google Maps in footer, GA4 + consent, Bentral reservation iframe, hidden /lp landing (noindex).

IMPLEMENTATION:
1. Review tasks.json and find the highest-priority pending task whose dependencies are done.
2. Review progress.md for context.
3. Follow workflow and formatting rules from CLAUDE.md.
4. Use PRD-DomNaTravniGori.md as the source of truth for implementation requirements.
5. Complete the selected task.
6. Complete every item in the task acceptance_criteria.
7. Run or verify every item in the task test_steps.
8. Update that task status in tasks.json from "pending" to "done" only if the task is truly complete.
9. Append a clear summary to progress.md.
10. Commit the completed work with git, using a message that references the task ID, e.g. "TASK-014: hero parallax island". Commit only the files related to this task.

LOOP LIMITS (from CLAUDE.md §18):
- Maximum 3 attempts on any single action (build/test/fix). After 3 failures, stop, log the blocker in progress.md, and end the iteration.
- Never retry the same command unchanged; diagnose first.
- Never sleep-poll, never brute-force a passing test, never bypass safety hooks (--no-verify/--force).

DOCUMENTATION:
Your progress.md update must include:
- Task ID
- What was changed
- What was verified (which test_steps passed)
- Any blockers or important notes

OUTPUT:
- If all tasks are complete, output exactly: <done>ALL_COMPLETE</done>
- If one task was completed and tasks still remain, output exactly: <done>TASK_COMPLETE</done>
- If you could not complete the chosen task, explain why clearly.

RULES:
- DO NOT work on more than one task in a single run.
- DO NOT delete tasks or edit task content in tasks.json (only change status).
- DO NOT rewrite unrelated tasks or touch unrelated code.
- DO NOT add features not listed in the task acceptance_criteria.'

  PROMPT="Here is the PRD:
---
${PRD_CONTENT}
---

Here is tasks.json:
---
${TASKS_CONTENT}
---

Here is progress.md:
---
${PROGRESS_CONTENT}
---

Here is CLAUDE.md:
---
${GUIDE_CONTENT}
---

${INSTRUCTIONS}"

  PROMPT_LEN=${#PROMPT}
  log "Prompt built (${PROMPT_LEN} chars)"
  log "Calling: claude -p"
  log "Saving raw output to: $ITER_OUTPUT"
  echo "Running Claude..."
  echo ""

  set +e
  echo "$PROMPT" | "$CLAUDE" -p \
    --verbose \
    --output-format stream-json \
    --allowedTools "Edit" "Write" "Bash" \
    > "$ITER_OUTPUT" 2>&1
  EXIT_CODE=$?
  set -e

  echo ""
  LINES=$(wc -l < "$ITER_OUTPUT" | tr -d ' ')
  BYTES=$(wc -c < "$ITER_OUTPUT" | tr -d ' ')
  log "Claude exited with code: $EXIT_CODE"
  log "Output: $LINES lines, $BYTES bytes"

  if [ "$BYTES" -lt 50 ]; then
    log "Output suspiciously short — possible error. Contents:"
    cat "$ITER_OUTPUT"
    echo ""
  fi

  FINAL_RESULT=$(grep -o '<done>[^<]*</done>' "$ITER_OUTPUT" | tail -n 1)

  if [ -n "$FINAL_RESULT" ]; then
    echo "Result: $FINAL_RESULT"
  else
    echo "Result: no completion tag found"
    echo "Last 20 lines of Claude output:"
    tail -n 20 "$ITER_OUTPUT"
  fi

  if grep -q "<done>ALL_COMPLETE</done>" "$ITER_OUTPUT"; then
    echo ""
    log "All tasks completed after $i iterations"
    exit 0
  fi

  log "Checking for file changes..."
  if [ -d ".git" ]; then
    CHANGED=$(git diff --stat HEAD 2>/dev/null || true)
    UNTRACKED=$(git ls-files --others --exclude-standard 2>/dev/null | head -20 || true)

    if [ -n "$CHANGED" ]; then
      echo "Modified files:"
      echo "$CHANGED" | sed 's/^/  /'
    fi

    if [ -n "$UNTRACKED" ]; then
      echo "New files:"
      echo "$UNTRACKED" | sed 's/^/  /'
    fi

    if [ -z "$CHANGED" ] && [ -z "$UNTRACKED" ]; then
      log "No file changes detected this iteration"
    fi
  fi

  echo ""
  log "Iteration $i complete"
  echo ""
done

echo ""
log "Completed $ITERATIONS iterations"
echo "Check progress.md for summary"
echo "Full logs: $LOG_FILE"
echo "Iteration outputs: ${OUTPUT_DIR}/iteration_*.txt"
echo "Run './ralph.sh <more-iterations>' to continue"
