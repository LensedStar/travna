// Russian UI dictionary — same key set as ./en.ts, enforced by the UIDict type below, so a
// missing or renamed key is a build error. Translated from translations/en.source.json.
//
// Do NOT hardcode visible strings in components — always read them through the helpers in './index.ts'.
// Section comments mirror en.ts line for line so the two dictionaries diff cleanly.

import type { UIDict } from './types';

export const ru: UIDict = {
  // --- Global / brand ---
  'site.name': 'Planinski dom na Travni gori', // brand — not localized
  'site.tagline': 'Слоган уютного горного дома',

  // --- Accessibility / chrome ---
  'a11y.skipToContent': 'Перейти к содержимому',
  'a11y.openMenu': 'Открыть меню',
  'a11y.closeMenu': 'Закрыть меню',
  'a11y.mapTitle': 'Карта проезда к Planinski dom na Travni gori',
  'a11y.primaryNav': 'Основная навигация',
  'a11y.footerNav': 'Навигация в подвале сайта',

  // --- Header / navigation ---
  'nav.home': 'Главная',
  'nav.accommodation': 'Апартаменты',
  'nav.activities': 'Чем заняться',
  'nav.menu': 'Меню',
  'nav.contact': 'Контакты',
  'nav.book': 'Забронировать',

  // --- Language switcher (live: EN + SL + RU) ---
  'lang.en': 'EN',
  'lang.label': 'Выберите язык',
  'lang.sl': 'SI',
  'lang.ru': 'RU',

  // --- Generic buttons / CTAs ---
  'cta.checkAvailability': 'Проверить наличие мест',
  'cta.exploreArea': 'Исследовать окрестности',
  'cta.bookNow': 'Забронировать',
  'cta.viewAccommodation': 'Смотреть апартаменты',
  'cta.viewActivities': 'Узнать, чем заняться',
  'cta.viewMenu': 'Смотреть меню',
  'cta.contactUs': 'Связаться с нами',

  // --- Home: hero ---
  'home.hero.title': 'Planinski dom na Travni gori',
  'home.hero.subtitle': 'Где время течёт медленнее',
  // TODO: replace with client-approved copy — atmospheric draft, makes no factual claims.
  'home.hero.intro': 'Тёплое дерево, тихие утра и лесной воздух — горный дом для неспешных дней, долгих вечеров у огня и почти пустого расписания.',
  'home.hero.ratingsLabel': 'Оценки гостей',
  'home.hero.bookingLabel': 'Booking.com',
  'home.hero.bookingScale': 'из 10',
  'home.hero.airbnbLabel': 'Airbnb',
  'home.hero.airbnbScale': 'из 5',

  // --- Home: value props section ---
  'home.valueProps.title': 'Почему стоит остановиться у нас',

  // --- Home: accommodation preview ---
  'home.accommodation.title': 'Ваш уютный горный приют',
  'home.accommodation.text': 'Один короткий абзац, анонсирующий размещение.',

  // --- Home: activities preview ---
  'home.activities.title': 'Исследуйте окрестности',
  'home.activities.text': 'Короткое вступление о занятиях поблизости.',

  // --- Home: welcome / the house (first section after the hero) ---
  'home.welcome.title': 'Уютные апартаменты в самом сердце леса',
  'home.welcome.lead': 'Оставьте городскую суету позади и обретите покой в Planinskem domu na Travni Gori. Здесь лес начинается прямо у апартаментов, между деревьями открываются просторные луга, а воздух остаётся свежим и наполненным ароматом леса. Приезжайте, чтобы замедлиться, отвлечься от повседневной спешки и отдохнуть не только телом, но и душой.',
  'home.welcome.imageAlt': 'Planinski dom na Travni gori — дом в окружении леса', // MOCK — real photo alt
  'home.welcome.pill.apartments': 'Уютные апартаменты', // MOCK
  'home.welcome.pill.kitchen': 'Домашняя кухня', // MOCK
  'home.welcome.pill.forest': 'Лес у порога', // MOCK
  'home.welcome.pill.pets': 'Можно с питомцами', // MOCK

  // --- Home: heritage timeline (one-family historic house) ---
  // TODO: replace with real dates & history copy from client
  'home.heritage.eyebrow': 'Наша история', // MOCK
  'home.heritage.title': 'Один дом — много поколений', // MOCK
  'home.heritage.intro': 'Проведите отпуск в доме, который почти 100 лет принимает путешественников и исследователей, — разумеется, с современными удобствами в номерах.',
  'home.heritage.m1.era': '1927',
  'home.heritage.m1.title': 'Приют на горе', // TODO: confirm the opening year with the client (a local source dates the dom to 1958)
  'home.heritage.m1.body': 'В 1927 году дом открылся как planinski dom — горный приют, где туристы и путешественники останавливались, чтобы отдохнуть, поесть и согреться после дня на тропах.',
  'home.heritage.m1.alt': 'Архивная фотография дома в первые годы, перед ним — лошадь с телегой',
  'home.heritage.m2.era': '19—', // TODO: confirm real year
  'home.heritage.m2.title': 'Длинные столы, полный дом', // MOCK
  'home.heritage.m2.body': 'Lorem ipsum dolor sit amet — место встреч, где соседи и странники задерживались за длинными столами под открытым небом.',
  'home.heritage.m2.alt': 'Архивная фотография: люди собрались за столами под открытым небом у дома',
  'home.heritage.m3.era': '1969',
  'home.heritage.m3.title': 'Лыжные годы',
  'home.heritage.m3.body': 'К концу 1960-х склоны под домом превратились в небольшой горнолыжный центр с подъёмником и деревянными бунгало — зимой сюда на целый день поднимались целыми семьями.',
  'home.heritage.m3.alt': 'Старая открытка с видом Travna gora: лыжники на склоне под домом и деревянное бунгало',
  'home.heritage.m4.era': '2026',
  'home.heritage.m4.title': 'Дом сегодня',
  'home.heritage.m4.body': 'Почти век спустя тот же дом по-прежнему стоит на своём месте — бережно отреставрированный, с современными удобствами и готовый принять вас на отдых, который вы не забудете.',
  'home.heritage.m4.alt': 'Современная цветная фотография дома в его нынешнем виде',

  // --- Home: apartments showcase (icon-tabbed photo slider) ---
  // TODO: replace with real apartment copy, bullets & photos from client
  'home.apartments.eyebrow': 'Апартаменты', // MOCK
  'home.apartments.title': 'Уютные пространства для неспешных дней', // MOCK
  'home.apartments.intro': 'Уютные комнаты с характером в самом сердце Словении — вокруг тишина леса, а на столе домашняя еда.',
  'home.apartments.hint': 'Выберите значок, чтобы узнать подробнее', // MOCK — shown as an on-image hint, not in the subheader
  'home.apartments.rooms.title': 'Номера для любого отдыха',
  'home.apartments.rooms.text': 'Свежие, уютные номера для компаний любого размера — тёплый приём ждёт и большие семьи, и пары, и тех, кто путешествует в одиночку.',
  'home.apartments.rooms.tab': 'Номера', // MOCK — short label for the icon tab
  'home.apartments.rooms.b1': 'Снимите весь дом только для себя — отдельный вход, своя кухня, от 1 до 6 гостей.',
  'home.apartments.rooms.b2': 'Или просто номер — уютные варианты для 1–4 гостей.',
  'home.apartments.rooms.b3': 'Расслабьтесь в сауне на дровах — отдельно с семьёй и друзьями или вместе с другими гостями.',
  'home.apartments.rooms.alt': 'Тепло освещённый интерьер апартаментов с деревянной мебелью', // MOCK — replace with real photo
  'home.apartments.slovenia.title': 'Сердце Словении',
  'home.apartments.slovenia.text': 'Отличное расположение рядом с самыми известными достопримечательностями Словении — среди них Ljubljana и карстовые пещеры, а до озёр, лесов и замков примерно час езды.',
  'home.apartments.slovenia.tab': 'Словения', // MOCK — short label for the icon tab
  'home.apartments.slovenia.b1': 'Около часа езды до большинства главных достопримечательностей',
  'home.apartments.slovenia.b2': 'Рядом с Ljubljana и знаменитыми карстовыми пещерами — Postojnska jama и Križna jama',
  // TODO(Webline): confirm before launch — the nearby Krokar & Rajhenavski Rog beech primeval
  // forests are UNESCO-listed; naming them explicitly is an option once the client approves.
  'home.apartments.slovenia.b3': 'На краю одних из самых древних и охраняемых лесов Европы',
  'home.apartments.slovenia.alt': 'Макет: вид на дом снаружи в окружении словенской сельской местности', // MOCK — replace with real photo
  'home.apartments.nature.title': 'Для любителей природы',
  'home.apartments.nature.text': 'Просыпайтесь рядом с одним из красивейших лесов Европы, засыпайте под пение птиц, а если повезёт — к вам заглянут поздороваться олени.',
  'home.apartments.nature.tab': 'Природа', // MOCK — short label for the icon tab
  'home.apartments.nature.b1': 'Дышите чистым воздухом и наконец отдохните от повседневной рутины',
  'home.apartments.nature.b2': 'Узнайте, почему Словению называют зелёной жемчужиной Европы',
  'home.apartments.nature.b3': 'Понаблюдайте за дикими медведями в естественной среде на экскурсии с гидом',
  'home.apartments.nature.alt': 'Лес и луг вокруг горного дома', // MOCK — replace with real photo
  'home.apartments.food.title': 'Домашняя кухня',
  'home.apartments.food.text': 'Наслаждайтесь классическими домашними блюдами по традиционным словенским рецептам — сытной, уютной едой, приготовленной с любовью.',
  'home.apartments.food.tab': 'Еда', // MOCK — short label for the icon tab
  'home.apartments.food.b1': 'Традиционные рецепты, приготовленные с любовью',
  'home.apartments.food.b2': 'Сытные блюда из местных сезонных продуктов',
  'home.apartments.food.b3': 'Завтрак по запросу',
  'home.apartments.food.alt': 'Деревенский стол с домашней едой', // MOCK — replace with real photo

  // --- Home: editorial gallery block ---
  'home.gallery.eyebrow': 'Поближе', // MOCK
  'home.gallery.title': 'Уют внутри и снаружи',
  'home.gallery.intro': 'Посмотрите на галерею, которая лучше всего передаёт уют, который вы получите, если остановитесь у нас.',
  'home.gallery.card.1': 'Тёплый приём',
  'home.gallery.card.2': 'Радуга над домом',
  'home.gallery.card.3': 'Вид с террасы',
  'home.gallery.card.4': 'Лесная тишина',
  'home.gallery.card.5': 'Зимние горные дороги',
  'home.gallery.card.6': 'Вечера у огня',
  'home.gallery.card.7': 'Простор горного воздуха', // MOCK
  'home.gallery.card.8': 'Ужин за длинным столом', // MOCK
  'home.gallery.open': 'Открыть изображение', // MOCK
  'home.gallery.close': 'Закрыть изображение', // MOCK
  'home.gallery.outro.title': 'Получите больше, чем просто апартаменты',
  'home.gallery.outro.text': 'Подарите себе настоящий отдых на природе — среди леса, тишины и свежего горного воздуха. Здесь можно забыть о городской суете, никуда не спешить и просто наслаждаться спокойствием.',
  'home.gallery.outro.cta': 'Забронировать отдых', // MOCK

  // --- Home: finding us (editorial map + scenic-route story) ---
  'home.findUs.eyebrow': 'Как нас найти', // MOCK
  'home.findUs.title': 'Где мы находимся и как к нам добраться', // MOCK
  'home.findUs.intro': 'Planinski dom na Travni Gori находится в словенском регионе Notranjska — достаточно близко, чтобы сюда было легко добраться, и достаточно далеко от городской суеты, чтобы по-настоящему сменить обстановку.',
  'home.findUs.mapTitle': 'Карта с расположением Planinski dom na Travni gori', // a11y — iframe title
  // Floating map label
  'home.findUs.pin.name': 'Planinski dom na Travni gori',
  'home.findUs.pin.address': 'Travna Gora 42, 1317 Sodražica, Словения',
  'home.findUs.pin.link': 'Открыть в Google Картах',
  // Compact travel facts (beside the map)
  'home.findUs.fact.time': '17 мин от Sodražica',
  'home.findUs.fact.road': 'Лесная дорога',
  'home.findUs.fact.parking': 'Бесплатная парковка на месте',
  'home.findUs.fact.winter': 'В снег рекомендуется зимняя резина',
  // Directions action
  'home.findUs.cta': 'Проложить маршрут',
  // Road-tip (centered icon + title + subtitle, with the route map beneath)
  'home.findUs.tip.title': 'Более простой путь в гору', // MOCK
  'home.findUs.tip.text': 'Для комфортной поездки рекомендуем маршрут через Sodražica. Дорога здесь широкая, ухоженная и удобная на всём подъёме. Южный маршрут более узкий и проходит рядом с крутым склоном, поэтому для гостей он менее удобен.',
  'home.findUs.tip.alt': 'Карта маршрута: более простая и ухоженная дорога к Planinski dom na Travni gori', // MOCK — replace with final route map
  'home.findUs.tip.zoom': 'Увеличить карту маршрута',
  'home.findUs.tip.close': 'Закрыть увеличенную карту маршрута',

  // --- Home: book-direct value strip ---
  'home.bookDirect.title': 'Бронируйте напрямую',
  'home.bookDirect.intro': 'Бронируя напрямую у нас, вы получаете лучший сервис по лучшей цене — и личное внимание на каждом этапе.',
  'home.bookDirect.benefit1Title': 'Мгновенное подтверждение',
  'home.bookDirect.benefit1Desc': 'Ваше бронирование подтверждается сразу — быстро и без лишних хлопот.',
  'home.bookDirect.benefit2Title': 'Лучшая цена',
  'home.bookDirect.benefit2Desc': 'Мы гарантируем лучшую цену при бронировании напрямую у нас.', // MOCK — best-price claim, confirm with client
  'home.bookDirect.benefit3Title': 'Прямое общение',
  'home.bookDirect.benefit3Desc': 'Общайтесь с живыми людьми, которым не всё равно и которые всегда готовы помочь.',

  // --- Accommodation page ---
  'accommodation.title': 'Апартаменты',
  'accommodation.description': 'Тёплое, атмосферное описание дома.',
  'accommodation.amenities.title': 'Что вас ждёт',
  'accommodation.amenities.wifi': 'Wi-Fi',
  'accommodation.amenities.parking': 'Парковка',
  'accommodation.amenities.kitchen': 'Кухня',
  'accommodation.amenities.fireplace': 'Камин',
  'accommodation.amenities.heating': 'Отопление',
  'accommodation.amenities.terrace': 'Терраса',
  'accommodation.cta': 'Проверить наличие мест',
  'accommodation.slider.label': 'Фотогалерея',
  'accommodation.slider.prev': 'Предыдущее фото',
  'accommodation.slider.next': 'Следующее фото',

  // --- Accommodation page: hero / intro ---
  'accommodation.hero.eyebrow': 'Дом', // MOCK
  'accommodation.hero.title': 'Уютные апартаменты с видом на словенскую природу',
  'accommodation.hero.lead': 'На плато Travna gora, прямо у леса, расположены уютные апартаменты для спокойного отдыха вдали от городской суеты. Здесь свежий горный воздух, тишина и настоящая словенская природа вокруг.',
  // Two paragraphs — AccommodationHero splits the body on the blank line.
  'accommodation.hero.body': 'Уютные интерьеры и спокойная атмосфера создают всё необходимое для комфортного отдыха. Это место для тех, кто хочет сменить привычный ритм, больше времени проводить на природе и просто никуда не спешить.\n\nДорога к дому проходит через лес и поднимается на плато. Бесплатная парковка находится рядом. С террасы открывается вид на лес и долину — отличное место для утреннего кофе или спокойного вечера на свежем воздухе.',
  'accommodation.hero.imageAlt': 'Горный дом на Travna gora в окружении леса', // MOCK — replace with real photo
  'accommodation.hero.badge.title': 'Природа', // MOCK
  'accommodation.hero.badge.sub': 'со всех сторон', // MOCK
  'accommodation.hero.fact.location': 'Travna gora, Notranjska', // MOCK
  'accommodation.hero.fact.locationLabel': 'Где мы',
  'accommodation.hero.fact.altitude': '≈ 900 м над уровнем моря', // MOCK — confirm real altitude
  'accommodation.hero.fact.altitudeLabel': 'Высота',
  'accommodation.hero.fact.access': 'Бесплатная парковка у двери', // MOCK
  'accommodation.hero.fact.accessLabel': 'Как добраться',
  // Quick amenity pills under the intro copy.
  'accommodation.hero.pill.pets': 'Можно с питомцами', // MOCK
  'accommodation.hero.pill.breakfast': 'Завтрак', // MOCK
  'accommodation.hero.pill.parking': 'Бесплатная парковка', // MOCK
  'accommodation.hero.pill.wifi': 'Бесплатный Wi-Fi', // MOCK

  // --- Accommodation page: bonuses / why book (MOCK) ---
  'accommodation.bonuses.eyebrow': 'Полезно знать', // MOCK
  'accommodation.bonuses.title': 'Мелочи, из которых складывается отдых', // MOCK
  'accommodation.bonuses.intro': 'Lorem ipsum dolor sit amet — короткая строка о приятных дополнениях к каждому проживанию.',
  'accommodation.bonuses.b1.title': 'Можно с питомцами', // MOCK
  'accommodation.bonuses.b1.text': 'Lorem ipsum — ваши четвероногие друзья здесь желанные гости.', // MOCK
  'accommodation.bonuses.b2.title': 'Бесплатная парковка', // MOCK
  'accommodation.bonuses.b2.text': 'Lorem ipsum — паркуйтесь прямо у двери, бесплатно.', // MOCK
  'accommodation.bonuses.b3.title': 'Быстрый Wi-Fi', // MOCK
  'accommodation.bonuses.b3.text': 'Lorem ipsum — оставайтесь на связи, когда захотите.', // MOCK
  'accommodation.bonuses.b4.title': 'Сауна на дровах', // MOCK
  'accommodation.bonuses.b4.text': '', // intentionally unused in the compact card layout
  'accommodation.bonuses.b5.title': 'Лес у порога', // MOCK
  'accommodation.bonuses.b5.text': 'Lorem ipsum — тропы начинаются в нескольких шагах от террасы.', // MOCK
  'accommodation.bonuses.b6.title': 'Домашний завтрак', // MOCK
  'accommodation.bonuses.b6.text': 'Lorem ipsum — сытное начало дня, по запросу.', // MOCK
  'accommodation.bonuses.score.value': '8.8',
  'accommodation.bonuses.score.scale': 'из 10',
  'accommodation.bonuses.score.label': 'Оценка на Booking.com', // MOCK — confirm live score
  'accommodation.bonuses.score.logoAlt': 'Booking.com',

  // --- Accommodation page: units — houses + rooms (MOCK) ---
  'accommodation.units.eyebrow': 'Где вы будете жить', // MOCK
  'accommodation.units.title': 'Дома и номера', // MOCK
  'accommodation.units.intro': 'Lorem ipsum dolor sit amet — выберите целый дом только для себя или уютный номер в главном здании.',
  // Houses group. Names, capacities and the room list are the client's own description (2026-10-08,
  // given in Russian): two mobile houses — no. 1 for 6 guests (three rooms, kitchen, two WCs,
  // shower, terrace) and no. 3, "домик три", for 5 guests; there is no number 2 — plus the sauna,
  // which in summer is let as a mobile house for 2. The client said nothing more about house 3, so
  // the rest of its copy describes only what the client's photos show — TODO(Webline): confirm.
  'accommodation.units.houses.title': 'Мобильные домики',
  'accommodation.units.houses.text': 'Два мобильных домика, каждый — только для вас: мобильный домик 1 вмещает до шести гостей, мобильный домик 3 — до пяти. Летом сауна тоже сдаётся как мобильный домик на двоих.',
  'accommodation.units.house1.name': 'Мобильный домик 1',
  'accommodation.units.house1.text': 'Больший из двух домиков: три комнаты, кухня, два туалета, душ и терраса — места хватит для шести гостей.',
  'accommodation.units.house1.capacity': 'До 6 человек',
  'accommodation.units.house1.size': '3 комнаты · кухня · терраса',
  'accommodation.units.house1.tag.sleeps': 'До 6 человек',
  'accommodation.units.house1.tag.rooms': '3 комнаты',
  'accommodation.units.house1.tag.kitchen': 'Кухня',
  'accommodation.units.house1.tag.bathroom': '2 туалета · душ',
  'accommodation.units.house1.tag.terrace': 'Терраса',
  'accommodation.units.house1.alt1': 'Мобильный домик 1, вид с луга: обшит деревом, стоит на опушке леса',
  'accommodation.units.house1.alt2': 'Крытая деревянная терраса мобильного домика 1 со столом и стульями, с видом на луг и лес',
  'accommodation.units.house1.alt3': 'Гостиная мобильного домика 1: обеденный стол, телевизор и стеклянные двери на террасу',
  'accommodation.units.house1.alt4': 'Кухня мобильного домика 1 с варочной панелью, духовкой, микроволновой печью и холодильником',
  'accommodation.units.house1.alt5': 'Кухня мобильного домика 1 в светлом дереве, вид из гостиной',
  'accommodation.units.house3.name': 'Мобильный домик 3',
  'accommodation.units.house3.text': 'Светлый мобильный домик для компании до пяти человек: кухня, уголок с диваном, две антресоли под крышей, ванная комната с душем и терраса.', // capacity: client; the rest: from the photos
  'accommodation.units.house3.capacity': 'До 5 человек',
  'accommodation.units.house3.size': 'Кухня · ванная · терраса', // from the photos
  'accommodation.units.house3.tag.sleeps': 'До 5 человек',
  'accommodation.units.house3.tag.kitchen': 'Кухня', // from the photos
  'accommodation.units.house3.tag.bathroom': 'Ванная с душем', // from the photos
  'accommodation.units.house3.tag.terrace': 'Терраса', // from the photos
  'accommodation.units.house3.alt1': 'Интерьер мобильного домика 3: кухня вдоль стены, обеденный стол, диван и антресоль в дальнем конце',
  'accommodation.units.house3.alt2': 'Уголок с диваном в мобильном домике 3 под антресолью, на которую ведёт деревянная лестница',
  'accommodation.units.house3.alt3': 'Обеденный стол, кухня и ступени на вторую антресоль в мобильном домике 3',
  'accommodation.units.house3.alt4': 'Обеденный стол у дверей на террасу в мобильном домике 3, на переднем плане — лестница на антресоль',
  'accommodation.units.house3.alt5': 'Кухня мобильного домика 3, ступени на антресоль и дверь в ванную комнату',
  'accommodation.units.house3.alt6': 'Ванная комната мобильного домика 3 с раковиной, круглым зеркалом и унитазом',
  'accommodation.units.house3.alt7': 'Стеклянная душевая кабина и раковина в ванной комнате мобильного домика 3',
  'accommodation.units.house3.alt8': 'Деревянная терраса мобильного домика 3 со столом и стульями в горном тумане',
  'accommodation.units.house3.alt9': 'Деревянная терраса мобильного домика 3, вид через занавеску стеклянной двери',
  // Rooms group — one showcase entry per room, picked with the room selector. Room numbers and guest
  // counts are the client's list (2026-10-08, given in Russian): 1 (also called 101) – 2, 2 – 5,
  // 3 – 4, 4 – 5, 5 – 3, 7 – 4, 9 – 6, 10 – 6, 11 – 3; the list itself lives in
  // AccommodationUnits.astro. The client gave no description per room, so the feature pills name
  // only what that room's photos show — TODO(Webline): confirm with the client.
  'accommodation.units.rooms.title': 'Номера в главном доме', // MOCK
  'accommodation.units.rooms.text': 'Тёплые, обшитые деревом номера под крышей главного дома — классический горный стиль, свежесть и чистота; в каждом — собственная ванная комната и вид на лес или долину.',
  'accommodation.units.rooms.choose': 'Выберите номер', // label above the room selector
  'accommodation.units.rooms.name': 'Номер {n}', // {n} = the room number
  'accommodation.units.rooms.capacity': 'До {n} человек', // {n} = number of guests
  'accommodation.units.rooms.tag.bathroom': 'Собственная ванная', // from the photos
  'accommodation.units.rooms.tag.kitchen': 'Кухня', // from the photos
  'accommodation.units.rooms.tag.kitchenette': 'Мини-кухня', // from the photos
  'accommodation.units.rooms.tag.balcony': 'Балкон', // from the photos
  // Photo alt texts are built as "<room name> — <what the photo shows>".
  'accommodation.units.rooms.shot.room': 'общий вид номера',
  'accommodation.units.rooms.shot.beds': 'кровати',
  'accommodation.units.rooms.shot.kitchen': 'кухонный уголок',
  'accommodation.units.rooms.shot.bathroom': 'ванная комната с душем',
  'accommodation.units.rooms.shot.balcony': 'балкон',
  'accommodation.units.rooms.shot.view': 'вид из окна',
  'accommodation.units.rooms.alt': 'Обшитый деревом двухместный номер под крышей с видом на лес', // landing's rooms slider (older mixed set in public/images/rooms/)
  'accommodation.units.capacityLabel': 'Вместимость',

  // --- Accommodation page: breakfast & kitchen ---
  'accommodation.kitchen.eyebrow': 'За столом',
  'accommodation.kitchen.title': 'Завтрак и домашняя кухня',
  'accommodation.kitchen.lead': 'Нет ничего лучше запаха свежего хлеба и кофе, который по утрам разносится по дому. Завтрак здесь домашний, неторопливый и готовится так, как было всегда, — из местных сезонных продуктов, а не из пакетов.',
  // Two paragraphs — AccommodationKitchen splits the body on the blank line.
  'accommodation.kitchen.body': 'Начните утро с завтрака на террасе и свежего горного воздуха или просто подольше посидите за столом — здесь не нужно никуда спешить.\n\nЕсли захочется приготовить что-то самостоятельно, в вашем распоряжении полностью оборудованная кухня со всем необходимым.',
  'accommodation.kitchen.imageAlt': 'Деревенский стол, накрытый домашним завтраком', // MOCK — replace with real photo
  'accommodation.kitchen.point1': 'Домашний завтрак, который готовится каждое утро из свежих продуктов.',
  'accommodation.kitchen.point2': 'По возможности мы используем местные и сезонные продукты из региона.',
  'accommodation.kitchen.point4': 'Особенности питания и аллергии можно заранее указать при бронировании — мы постараемся всё учесть.',
  'accommodation.kitchen.cta': 'Посмотреть меню',

  // --- Sauna (shared block: apartments page + activities page) ---
  // TODO(Webline): confirm copy with the client. The sauna is wood-fired and shared by all guests
  // — it is NOT private to a house. In summer it is let as a mobile house for two (client,
  // 2026-10-08) — said in accommodation.units.houses.text, not in this block.
  'sauna.title': 'Сауна на дровах',
  'sauna.shortTitle': 'Сауна', // heading used where the block stands on its own (activities page)
  // Two paragraphs — Sauna and LandingFeature split the body on the blank line.
  'sauna.body': 'После прогулок и активного дня на природе особенно приятно согреться и расслабиться в сауне. Она топится дровами и создаёт особую атмосферу тепла и уюта.\n\nДайте сауне хорошо прогреться, отдохните в тишине, а после выйдите на свежий прохладный воздух Travna gora. Отличный способ восстановить силы и завершить день в полном спокойствии.',
  'sauna.point1': 'Современная сауна со всем необходимым для комфортного отдыха.',
  'sauna.point2': 'Идеальное место, чтобы расслабиться после насыщенного дня.',
  'sauna.point3': 'Тепло, тишина и отдых для тела и души.',
  // Alt texts of the sauna photos, one per photo — the order is set in components/sections/saunaPhotos.ts.
  'sauna.photo.room': 'Сауна на дровах изнутри: деревянные полки в тёплом свете рядом с печью',
  'sauna.photo.benches': 'Печь сауны с корзиной камней рядом с двухъярусными деревянными полками',
  'sauna.photo.stove': 'Печь сауны с камнями за деревянным ограждением',
  'sauna.photo.door': 'Обшитая деревом сауна со стеклянной дверью и ведром',
  'sauna.photo.shower': 'Душ рядом с сауной и деревянное ведро для обливания',
  'sauna.photo.lounge': 'Комната отдыха в домике сауны: диван, круглый стол и плетёные кресла',
  'sauna.photo.table': 'Круглый стол и плетёные кресла у углового дивана в комнате отдыха',
  'sauna.photo.terrace': 'Крытая деревянная терраса домика сауны со столом, стульями и входной дверью',
  'sauna.photo.tub': 'Круглая купель, встроенная в пол террасы',
  'sauna.photo.chairs': 'Два плетёных кресла на террасе с видом через луг на лес',
  'sauna.photo.view': 'Вид со стола на террасе поверх крыш на лес в тумане',
  'sauna.photo.exterior': 'Домик сауны — деревянный домик с крытой террасой на опушке леса',
  'sauna.photo.evening': 'Крытая терраса домика сауны вечером: над столом и стульями горят лампы',

  // --- Testimonials (real guest reviews, translated from Booking.com) ---
  'testimonials.score.value': '8.8',
  'testimonials.score.label': 'Превосходно',
  'testimonials.score.meta': 'На основе 400 отзывов на Booking.com',
  'testimonials.eyebrow': 'Голоса гостей', // MOCK
  'testimonials.title': 'Что гости увозят с собой', // MOCK
  'testimonials.intro': 'Не верьте нам на слово — вот что говорят гости после отдыха у нас.',
  'testimonials.t1.quote': 'Мы приехали очень поздно, но нас всё равно встретили и заселили — чудесное место. Отдельное спасибо за вкусный завтрак! Красивые виды.',
  'testimonials.t1.author': 'Ayura7',
  'testimonials.t1.meta': 'Путешествие в одиночку, проживание в июне',
  'testimonials.t2.quote': 'Прекрасный свежий воздух и идеальное место для отдыха — мы жили в новом номере, и всё было отлично. Обязательно попробуйте вареники и грибной суп!',
  'testimonials.t2.author': 'Евгения',
  'testimonials.t2.meta': 'Отдых с семьёй, в августе',
  'testimonials.t3.quote': 'Нам всё понравилось, и мы здесь уже не в первый раз. Большое спасибо хозяевам за радушный приём и тёплое гостеприимство.',
  'testimonials.t3.author': 'Алексей',
  'testimonials.t3.meta': 'Постоянный гость с семьёй, проживание в январе',
  'testimonials.t4.quote': 'Чудесное, богатое и спокойное место вдали от цивилизации.',
  'testimonials.t4.author': 'Евгений',
  'testimonials.t4.meta': 'Отдых с семьёй, в сентябре',
  'testimonials.t5.quote': 'Прекрасное место для отдыха в тихом, спокойном уголке. Красивый лес, комфортные условия в домике и очень гостеприимные хозяева. Еда была вкусной — особенно вареники, пельмени, грибной суп и оладьи. И мы, и дети были в полном восторге.',
  'testimonials.t5.author': 'Игорь',
  'testimonials.t5.meta': 'Отдых с семьёй, в сентябре',
  'testimonials.t6.quote': 'Чудесное место в лесу — жаль, что забронировали только на одну ночь.',
  'testimonials.t6.author': 'Ольга',
  'testimonials.t6.meta': 'Отдых с семьёй, в июле',
  'testimonials.ratingLabel': 'Оценка 5 из 5', // a11y label for the star row
  'testimonials.slider.label': 'Отзывы гостей',
  'testimonials.slider.prev': 'Предыдущий отзыв',
  'testimonials.slider.next': 'Следующий отзыв',

  // --- Activities page — "Discover Slovenia from Travna Gora" ---
  // Real orientational content (nearby sights + approximate drive times supplied by the client).
  // Drive times are approximate — confirm before launch.
  'activities.eyebrow': 'Вокруг Travna gora',
  'activities.title': 'Открывайте Словению с Travna gora',
  // Two paragraphs — the activities hero splits the intro on the blank line.
  'activities.intro': 'Travna gora — спокойное место для отдыха на природе и удобная отправная точка для путешествий по Словении. Отсюда легко добраться до многих известных достопримечательностей страны — пещер, замков, озёр и Ljubljana.\n\nУтро можно начать в тишине среди леса, а затем отправиться исследовать Словению. До большинства популярных мест — около часа на автомобиле.',
  'activities.hero.imageAlt': 'Лесной пейзаж вокруг Travna gora', // MOCK photo — TODO(Webline): swap alt with real photo
  // Badge figure restates the approximate drive time already in the intro copy — confirm before launch.
  'activities.hero.badge.title': '≈ 1 час',
  'activities.hero.badge.sub': 'до большинства достопримечательностей',
  // Highlight pills — the sight types named in the intro copy.
  'activities.hero.pill.caves': 'Карстовые пещеры',
  'activities.hero.pill.castles': 'Замки',
  'activities.hero.pill.lakes': 'Озёра и леса',
  'activities.hero.pill.capital': 'Ljubljana',

  // Doorstep activities — image cards rendered from the `activities` content collection.
  'activities.doorstep.eyebrow': 'Прямо у порога',
  'activities.doorstep.title': 'Сразу за дверью',
  'activities.doorstep.intro': 'Чтобы оказаться на природе, никуда ехать не нужно. Прогулочные тропы, лесные дороги и красивые смотровые точки начинаются прямо на Travna gora и продолжаются вокруг соседней горной хижины Koča na Kamnem Griču.',

  // Day-trip destinations — cards rendered from the `destinations` content collection.
  'activities.trips.eyebrow': 'Лёгкие поездки на день',
  'activities.trips.title': 'Словения рядом',
  'activities.trips.intro': 'Travna gora лежит между Ljubljana и знаменитыми карстовыми пещерами Словении, поэтому это идеальная база для путешествий: до большинства этих мест заметно меньше часа езды.',
  'activities.trips.driveLabel': 'В пути примерно', // label prefix on each distance badge
  'activities.trips.directions': 'Проложить маршрут', // link out to Google Maps, opens in a new tab

  // Day-trip sub-section headings (grouping the `destinations` collection by `section`).
  'activities.trips.section.forests': 'Прогулки по лесу',
  'activities.trips.section.caves': 'Пещеры',
  'activities.trips.section.wildlife': 'Дикая природа',
  'activities.trips.section.history': 'История и замки',

  // Why guests love it — benefits list (icon + text).
  'activities.why.eyebrow': 'За что гости любят это место',
  'activities.why.title': 'Тишина природы и удобное расположение',
  'activities.why.b1': 'Тишина вдали от города.',
  'activities.why.b2': 'Большие лесные массивы рядом.',
  'activities.why.b3': 'Бурые медведи в дикой природе.',
  'activities.why.b4': 'Между Ljubljana и карстовым регионом.',

  // --- Menu page ---
  'menu.title': 'Меню',
  'menu.intro': 'Домашние блюда из местных продуктов, которые подаются в столовой дома.', // MOCK
  'menu.hero.eyebrow': 'С нашей кухни', // MOCK
  'menu.hero.lead': 'Мы готовим из свежих местных и сезонных продуктов, используя проверенные домашние рецепты. Утром подаём домашний завтрак, а в течение дня — горячие супы, сытные блюда и домашние десерты.',
  'menu.hero.imageAlt': 'Столовая дома, накрытая к трапезе', // MOCK — real photo, alt TODO(Webline)
  'menu.hero.badge.title': 'Домашнее', // MOCK
  'menu.hero.badge.sub': 'семейные рецепты', // MOCK
  'menu.hero.pill.breakfast': 'Завтрак',
  'menu.hero.pill.mains': 'Сытные основные блюда',
  'menu.hero.pill.soups': 'Супы и салаты',
  'menu.hero.pill.desserts': 'Домашние десерты',
  'menu.pdf.title': 'Полное меню (PDF)',
  'menu.pdf.download': 'Скачать меню (PDF)',
  'menu.pdf.fallback': 'Открыть меню в новой вкладке',
  'menu.price': 'Цена',
  'menu.legend.title': 'Аллергены',
  'menu.legend.note': 'Пожалуйста, сообщите официанту о любых аллергиях или ограничениях в питании.',

  // --- Contact page + form ---
  'contact.title': 'Контакты',
  'contact.intro': 'Свяжитесь с нами.',
  'contact.details.title': 'Контактные данные',
  'contact.form.name': 'Имя',
  'contact.form.email': 'Эл. почта',
  'contact.form.phone': 'Телефон',
  'contact.form.checkin': 'Заезд',
  'contact.form.checkout': 'Выезд',
  'contact.form.message': 'Сообщение',
  'contact.form.consent': 'Я принимаю политику конфиденциальности.',
  'contact.form.submit': 'Отправить сообщение',
  'contact.form.required': 'Это поле обязательно для заполнения.',
  'contact.form.invalidEmail': 'Пожалуйста, введите корректный адрес эл. почты.',
  'contact.form.consentRequired': 'Пожалуйста, примите политику конфиденциальности.',
  'contact.form.honeypot': 'Не заполняйте это поле, если вы человек', // honeypot label (CSS-hidden anti-spam)

  // --- Thank-you page ---
  'thankYou.title': 'Спасибо',
  'thankYou.text': 'Мы получили ваше сообщение и скоро ответим.',
  'thankYou.backHome': 'Вернуться на главную',

  // --- Booking page (Bentral) ---
  'booking.title': 'Забронируйте отдых',
  'booking.intro': 'Короткое вступление над виджетом бронирования.',
  'booking.widgetTitle': 'Система бронирования', // iframe title — a11y
  'booking.placeholder': 'Здесь появится виджет бронирования.', // shown until Bentral embed is pasted

  // --- Hidden advertising landing (/social) ---
  // The page social profiles and ads link to: hero → the place → rooms → atmosphere → sauna →
  // activities → restaurant → reviews → reservation widget. It is built from the blocks of the other
  // pages but carries its own copy: every text worded for the landing lives here, so rewriting it
  // never changes another page. Only short labels that read the same everywhere are still shared
  // (home.welcome.pill.apartments / .kitchen, accommodation.units.eyebrow, accommodation.hero.pill.*,
  // sauna.title, menu.hero.pill.breakfast / .soups, cta.viewActivities, testimonials.score.* and the
  // reviews themselves, home.bookDirect.benefit*Title).
  // Final copy, supplied on 2026-10-07. On this page the place names are written in Cyrillic
  // ("Травна-Гора", "Любляна"), unlike the rest of the Russian site — that is the supplied text,
  // not an oversight. The image alts are still the earlier drafts.
  'lp.meta.description': 'Горный дом в лесу примерно в часе езды от Любляны: уютные апартаменты, сауна на дровах и домашняя кухня. Проверьте наличие мест и бронируйте напрямую.', // also the link-preview text when the page is shared
  'lp.cta': 'Выбрать даты', // every booking CTA on the landing — kept short so it fits a phone button on one line
  'lp.hero.title': 'Отдых на природе на Травна-Горе',
  'lp.hero.subtitle': 'Место, где можно по-настоящему отдохнуть',
  'lp.hero.intro': 'Уютные апартаменты, домашняя кухня и сауна на дровах среди лесов Травна-Горы — примерно в часе езды от Любляны.',
  // The place — the home welcome block under the landing's own copy.
  'lp.place.title': 'Уютные апартаменты среди леса',
  'lp.place.text': 'Оставьте городскую суету позади и отдохните в Planinskem domu na Travni Gori. Здесь лес начинается прямо у дома, вокруг открываются зелёные луга, а воздух остаётся свежим и лесным. Это место, куда приезжают за природой, тишиной и возможностью просто сменить привычный ритм.',
  'lp.place.pill.nature': 'Природа вокруг',
  // Rooms row.
  'lp.stay.title': 'Отдых для двоих, семьи или компании',
  'lp.stay.text': 'Можно выбрать отдельный номер или снять целый дом. Здесь будет комфортно и паре, и семье с детьми, и компании друзей.',
  'lp.stay.point1': 'Целый дом с отдельным входом и собственной кухней рассчитан на размещение до 6 гостей.',
  'lp.stay.point2': 'Также доступны отдельные уютные номера для 1–4 гостей.',
  'lp.stay.alt.balcony': 'Деревянный балкон главного дома с видом на лес',
  'lp.stay.alt.attic': 'Мансардный номер с двуспальной кроватью и окном в крыше',
  'lp.stay.alt.bathroom': 'Собственная ванная комната с душем',
  'lp.atmosphere.title': 'Тёплая домашняя атмосфера',
  'lp.atmosphere.text': 'Здесь легко почувствовать себя как дома. Хозяева всегда рядом, гостей встречают лично, а за общим столом нередко проводят больше времени, чем планировали — за ужином и хорошим разговором.',
  'lp.atmosphere.alt.1': 'Радуга над домом и лугом перед ним', // MOCK — stand-in photo
  'lp.atmosphere.alt.2': 'Столики и стулья на террасе с видом на луг и лес', // MOCK — stand-in photo
  'lp.atmosphere.alt.3': 'Люди на залитом солнцем лугу под домами', // MOCK — stand-in photo
  'lp.atmosphere.alt.4': 'Стол для пикника на лугу, под лесом стелется туман', // MOCK — stand-in photo
  'lp.atmosphere.alt.5': 'Большое тенистое дерево, столы для пикника и деревянная приветственная вывеска на лугу у дома', // MOCK — stand-in photo
  'lp.atmosphere.alt.6': 'Огонь в каменном камине дома', // MOCK — stand-in photo
  // Sauna row. A blank line in the text starts a new paragraph.
  'lp.sauna.text': 'После прогулки по лесу или насыщенного дня приятно согреться и восстановить силы в сауне на дровах. Натуральное дерево, мягкое тепло и тишина помогают полностью расслабиться.\n\nПосле сауны можно выйти на свежий воздух Травна-Горы и немного отдохнуть на природе.',
  'lp.sauna.point1': 'Современная сауна со всем необходимым.',
  'lp.sauna.point2': 'Отличный способ расслабиться после активного дня.',
  'lp.sauna.point3': 'Тепло и отдых в спокойной атмосфере.',
  // Activities teaser (LandingActivities.astro): heading, a short intro and four tiles — a name and
  // one line each. The photos come from the activities / destinations collections.
  'lp.activities.eyebrow': 'Вокруг Травна-Горы',
  'lp.activities.title': 'Чем заняться рядом',
  'lp.activities.intro': 'Природа начинается буквально у порога. Отсюда можно отправиться на прогулку по лесу, проехать по окрестностям на велосипеде или выбраться к природным достопримечательностям региона.',
  'lp.activities.hiking.title': 'Походы и смотровые площадки',
  'lp.activities.hiking.text': 'Пешеходные маршруты и лесные тропы начинаются прямо рядом с домом.',
  'lp.activities.cycling.title': 'Велопрогулки по лесным тропам',
  'lp.activities.cycling.text': 'Спокойные лесные дороги отлично подходят для велосипедных прогулок вдали от оживлённого движения.',
  'lp.activities.bears.title': 'Наблюдение за бурыми медведями в Кочевье',
  'lp.activities.bears.text': 'Примерно 20–30 минут на автомобиле.',
  'lp.activities.cave.title': 'Крижна яма',
  'lp.activities.cave.text': 'Одна из известных карстовых пещер Словении — примерно в 40 минутах езды.',
  // Restaurant row.
  'lp.restaurant.eyebrow': 'Домашняя кухня',
  'lp.restaurant.title': 'Вкусная еда без лишнего',
  'lp.restaurant.text': 'Мы готовим простую домашнюю еду из свежих продуктов. Утром можно заказать завтрак, а в течение дня — горячие супы, сытные основные блюда, салаты и домашние десерты.',
  'lp.restaurant.pill.mains': 'Основные блюда',
  'lp.restaurant.favorites': 'Популярные блюда', // heads the dishes flagged `featured` in the menu collection
  'lp.restaurant.imageAlt': 'Тарелка домашней еды с нашей кухни',
  // Guest reviews — the shared Testimonials block under the landing's own heading.
  'lp.reviews.title': 'Что говорят наши гости',
  'lp.reviews.intro': 'Лучше всего об атмосфере этого места рассказывают люди, которые уже здесь побывали.',
  // Reservation (LandingReservation.astro).
  'lp.reservation.title': 'Выберите даты для отдыха',
  'lp.reservation.intro': 'Проведите несколько дней среди лесов Травна-Горы. Выберите подходящие даты и забронируйте проживание напрямую.',
  'lp.reservation.help': 'Остались вопросы перед бронированием? Позвоните или напишите нам.',

  // --- Footer ---
  'footer.contact.title': 'Контакты',
  'footer.contact.phone': '+386 0 000 000',
  'footer.contact.email': 'info@example.com',
  'footer.social.title': 'Мы в соцсетях',
  'footer.social.instagram': 'Instagram', // brand name (link label / aria-label)
  'footer.social.facebook': 'Facebook', // brand name (link label / aria-label)
  // Footer navigation (mirrors the header nav; privacy policy is footer-only)
  'footer.nav.accommodation': 'Апартаменты',
  'footer.nav.activities': 'Чем заняться',
  'footer.nav.contact': 'Контакты и бронирование',
  'footer.nav.book': 'Забронировать',
  'footer.nav.privacy': 'Политика конфиденциальности',
  'footer.legal.title': 'Правовая информация',
  'footer.legal.entity': 'Planinski dom na Travni gori d.o.o.', // MOCK — replace with real legal entity
  'footer.legal.address': 'Улица 1, 0000 Город', // MOCK — replace with real address
  'footer.legal.country': 'Словения', // MOCK
  'footer.legal.taxId': 'Номер плательщика НДС: SI00000000', // MOCK — replace with real VAT/DDV number
  'footer.directions': 'Короткая заметка о том, как до нас добраться.',
  'footer.rights': 'Все права защищены',
  'footer.credit.text': 'Дизайн и разработка:',
  'footer.credit.company': 'Webline', // agency name — not localized

  // --- Cookie consent (GA4 gate) ---
  'consent.message': 'Мы используем файлы cookie для аналитики.',
  'consent.accept': 'Принять',
  'consent.decline': 'Отклонить',
} as const;

export default ru;
