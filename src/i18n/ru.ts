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

  // --- Language switcher (live: EN + RU) ---
  'lang.en': 'EN',
  'lang.label': 'Выберите язык',
  'lang.si': 'SI', // reserved: unused until a Slovenian dictionary + content exist
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
  'home.welcome.lead': 'Оставьте город позади и обретите тишину на Травна-Горе — высоком лесистом горном плато над долиной Рибницы. Между деревьями раскинулись открытые луга, лес подступает прямо к вашим апартаментам, а воздух по-прежнему пахнет лесом, а не выхлопными газами. Приезжайте, чтобы замедлиться, глубоко вдохнуть и открыть для себя тихий уголок Словении, до которого добираются немногие путешественники.',
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
  'home.heritage.m3.alt': 'Старая открытка с видом Травна-Горы: лыжники на склоне под домом и деревянное бунгало',
  'home.heritage.m4.era': '2026',
  'home.heritage.m4.title': 'Дом сегодня',
  'home.heritage.m4.body': 'Почти век спустя тот же дом по-прежнему стоит на своём месте — бережно отреставрированный, с современными удобствами и готовый принять вас на отдых, который вы не забудете.',
  'home.heritage.m4.alt': 'Современная цветная фотография дома в его нынешнем виде',

  // --- Home: apartments showcase (icon-tabbed photo slider) ---
  // TODO: replace with real apartment copy, bullets & photos from client
  'home.apartments.eyebrow': 'Апартаменты', // MOCK
  'home.apartments.title': 'Уютные пространства для неспешных дней', // MOCK
  'home.apartments.intro': 'Тёплые комнаты с характером в глубине словенской сельской местности — вокруг лес, а на столе домашняя еда.',
  'home.apartments.hint': 'Выберите значок, чтобы узнать подробнее', // MOCK — shown as an on-image hint, not in the subheader
  'home.apartments.rooms.title': 'Номера для любого отдыха',
  'home.apartments.rooms.text': 'Свежие, уютные номера для компаний любого размера — тёплый приём ждёт и большие семьи, и пары, и тех, кто путешествует в одиночку.',
  'home.apartments.rooms.tab': 'Номера', // MOCK — short label for the icon tab
  'home.apartments.rooms.b1': 'Снимите весь дом только для себя — отдельный вход, своя кухня, от 1 до 6 гостей.',
  'home.apartments.rooms.b2': 'Или просто номер — уютные варианты для 1–4 гостей.',
  'home.apartments.rooms.b3': 'Расслабьтесь в сауне на дровах — отдельно с семьёй и друзьями или вместе с другими гостями.',
  'home.apartments.rooms.alt': 'Тепло освещённый интерьер апартаментов с деревянной мебелью', // MOCK — replace with real photo
  'home.apartments.slovenia.title': 'Сердце Словении',
  'home.apartments.slovenia.text': 'Отличное расположение рядом с самыми известными достопримечательностями Словении — среди них Любляна и карстовые пещеры, а до озёр, лесов и замков примерно час езды.',
  'home.apartments.slovenia.tab': 'Словения', // MOCK — short label for the icon tab
  'home.apartments.slovenia.b1': 'Около часа езды до большинства главных достопримечательностей',
  'home.apartments.slovenia.b2': 'Рядом с Любляной и знаменитыми карстовыми пещерами — Постойнской и Крижной ямой',
  // TODO(Webline): confirm before launch — the nearby Krokar & Rajhenavski Rog beech primeval
  // forests are UNESCO-listed; naming them explicitly is an option once the client approves.
  'home.apartments.slovenia.b3': 'На краю одних из самых древних и лучше всего охраняемых лесов Европы',
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
  'home.gallery.title': 'Атмосфера дома — внутри и снаружи', // MOCK
  'home.gallery.intro': 'Небольшая галерея тихих деталей: тёплые уголки, вечерний свет, лесные опушки и неспешные завтраки на свежем воздухе.',
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
  'home.gallery.outro.title': 'Бронируйте больше, чем апартаменты', // MOCK
  'home.gallery.outro.text': 'Приезжайте ради тихих комнат, оставайтесь ради неспешных утр, ужинов за длинным столом и ощущения, что есть место, где можно выдохнуть.', // MOCK
  'home.gallery.outro.cta': 'Забронировать отдых', // MOCK

  // --- Home: finding us (editorial map + scenic-route story) ---
  'home.findUs.eyebrow': 'Как нас найти', // MOCK
  'home.findUs.title': 'Где мы находимся и как к нам добраться', // MOCK
  'home.findUs.intro': 'Мы спрятались на Травна-Горе, в словенском регионе Нотраньска, — достаточно близко, чтобы легко добраться, и достаточно далеко, чтобы почувствовать себя в другом мире.',
  'home.findUs.mapTitle': 'Карта с расположением Planinski dom na Travni gori', // a11y — iframe title
  // Floating map label
  'home.findUs.pin.name': 'Planinski dom na Travni gori',
  'home.findUs.pin.address': 'Travna Gora 42, 1317 Sodražica, Словения',
  'home.findUs.pin.link': 'Открыть в Google Картах',
  // Compact travel facts (beside the map)
  'home.findUs.fact.time': '17 мин от Содражицы',
  'home.findUs.fact.road': 'Лесная дорога',
  'home.findUs.fact.parking': 'Бесплатная парковка на месте',
  'home.findUs.fact.winter': 'В снег рекомендуется зимняя резина',
  // Directions action
  'home.findUs.cta': 'Проложить маршрут',
  // Road-tip (centered icon + title + subtitle, with the route map beneath)
  'home.findUs.tip.title': 'Более простой путь в гору', // MOCK
  'home.findUs.tip.text': 'Дело не в экономии минут, а в спокойной поездке. Езжайте по обозначенному маршруту через Содражицу: дорога широкая и ухоженная на всём пути наверх. Дорога южнее уже и проходит вдоль края крутого обрыва, поэтому её лучше оставить местным.',
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
  'accommodation.hero.title': 'Уютные апартаменты с видом на настоящую словенскую природу', // MOCK
  'accommodation.hero.lead': 'Высоко на плато Травна-Гора наш дом стоит прямо на опушке леса, где воздух прохладен, а по утрам над деревьями медленно оседает туман. Два уютных апартамента, согретые деревом и тишиной, созданы для гостей, которые приезжают, чтобы замедлиться.',
  'accommodation.hero.body': 'Дорога наверх петляет через лес и выходит на плато; бесплатная парковка — прямо у двери. С террасы открывается вид поверх крон деревьев на долину внизу — отличное место для чашки кофе на рассвете или бокала вина, когда наползает туман.',
  'accommodation.hero.imageAlt': 'Горный дом на Травна-Горе в окружении леса', // MOCK — replace with real photo
  'accommodation.hero.badge.title': 'Природа', // MOCK
  'accommodation.hero.badge.sub': 'со всех сторон', // MOCK
  'accommodation.hero.fact.location': 'Травна-Гора, Нотраньска', // MOCK
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
  // Houses group
  'accommodation.units.houses.title': 'Отдельные дома', // MOCK
  'accommodation.units.houses.text': 'Отдыхайте всей семьёй или вдвоём в собственном отдельном доме — со своей сауной и своей кухней.',
  'accommodation.units.house1.name': 'Семейный дом', // MOCK
  'accommodation.units.house1.text': 'Целый дом только для вас — отдельный вход, своя кухня и оборудование для барбекю, от 1 до 6 гостей.', // MOCK
  'accommodation.units.house1.capacity': '1–6 гостей', // MOCK
  'accommodation.units.house1.size': 'Кухня · терраса', // MOCK
  'accommodation.units.house1.tag.sleeps': '1–6 гостей', // MOCK
  'accommodation.units.house1.tag.size': '44 м²', // MOCK
  'accommodation.units.house1.tag.sauna': 'Сауна на дровах', // MOCK
  'accommodation.units.house1.tag.bbq': 'Своя кухня и барбекю', // MOCK
  'accommodation.units.house1.alt': 'Терраса дома с видом на лес', // MOCK — replace with real photo
  'accommodation.units.house2.name': 'Мобильный дом', // MOCK
  'accommodation.units.house2.text': 'Уютный мобильный дом с отдельным входом, сауной, террасой и оборудованием для барбекю — до 3 человек.', // MOCK
  'accommodation.units.house2.capacity': 'До 3 человек', // MOCK — TODO(Webline): confirm the real capacity
  'accommodation.units.house2.size': '1 спальня · кухня · сад', // MOCK
  'accommodation.units.house2.tag.sleeps': 'До 3 человек', // MOCK
  'accommodation.units.house2.tag.bedrooms': '1 спальня', // MOCK
  'accommodation.units.house2.tag.size': '35 м²', // MOCK
  'accommodation.units.house2.tag.sauna': 'Сауна на дровах', // MOCK
  'accommodation.units.house2.tag.bbq': 'Оборудование для барбекю', // MOCK
  'accommodation.units.house2.alt': 'Интерьер мобильного дома для отдыха с кухней и лестницей на мансарду', // MOCK — replace with real photo
  // Rooms group
  'accommodation.units.rooms.title': 'Номера в главном доме', // MOCK
  'accommodation.units.rooms.text': 'Уютные номера с красивыми видами и всеми мелочами, нужными для комфорта.',
  // Single showcase entry for the main house (no per-room breakdown) — richer copy + gallery.
  'accommodation.units.rooms.name': 'Уютные номера наверху', // MOCK
  'accommodation.units.rooms.detail': 'Тёплые, обшитые деревом номера под крышей главного дома — классический горный стиль, свежесть и чистота; в каждом — собственная ванная комната и вид на лес или долину.',
  'accommodation.units.rooms.tag.sleeps': 'До 4 человек', // MOCK
  'accommodation.units.rooms.tag.rooms': '4 уютных номера', // MOCK
  'accommodation.units.rooms.tag.size': 'Двухместные и семейные', // MOCK
  'accommodation.units.rooms.tag.sauna': 'Общая сауна', // MOCK
  'accommodation.units.rooms.tag.wifi': 'Бесплатный Wi-Fi', // MOCK
  'accommodation.units.rooms.alt': 'Обшитый деревом двухместный номер под крышей с видом на лес', // MOCK — replace with real photo
  'accommodation.units.capacityLabel': 'Вместимость',

  // --- Accommodation page: breakfast & kitchen ---
  'accommodation.kitchen.eyebrow': 'За столом',
  'accommodation.kitchen.title': 'Завтрак и домашняя кухня',
  'accommodation.kitchen.lead': 'Нет ничего лучше запаха свежего хлеба и кофе, который по утрам разносится по дому. Завтрак здесь домашний, неторопливый и готовится так, как было всегда, — из местных сезонных продуктов, а не из пакетов.',
  'accommodation.kitchen.body': 'Выйдите с ним на террасу, пока горный воздух ещё прохладен, или задержитесь за столом сколько захотите — утро на Травна-Горе создано для того, чтобы никуда не спешить. А если захочется приготовить что-то самим, наша полностью оборудованная гостевая кухня в вашем распоряжении — всё готово, когда бы ни проснулся аппетит.',
  'accommodation.kitchen.imageAlt': 'Деревенский стол, накрытый домашним завтраком', // MOCK — replace with real photo
  'accommodation.kitchen.point1': 'Домашний завтрак, свежеприготовленный каждое утро',
  'accommodation.kitchen.point2': 'Местные сезонные продукты из региона',
  'accommodation.kitchen.point4': 'С радостью учтём особенности питания и аллергии по запросу',
  'accommodation.kitchen.cta': 'Посмотреть меню',

  // --- Sauna (shared block: apartments page + activities page) ---
  // TODO(Webline): confirm copy with the client. The sauna is wood-fired and shared by all guests
  // — it is NOT private to a house (see the unit strings above, which still say otherwise).
  'sauna.eyebrow': 'На территории',
  'sauna.title': 'Сауна на дровах',
  'sauna.shortTitle': 'Сауна', // heading used where the block stands on its own (activities page)
  'sauna.body': 'После дня в лесу нет ничего лучше тепла, дерева и тишины. Сауна топится дровами, как здесь было всегда, — дайте ей как следует прогреться, а потом выйдите на прохладный горный воздух.',
  'sauna.point1': 'Современная сауна со всем необходимым',
  'sauna.point2': 'Расслабьтесь после долгого дня',
  'sauna.point3': 'Польза для тела и души',
  'sauna.imageAlt1': 'Обшитая деревом сауна со стеклянной дверью и ведром',
  'sauna.imageAlt2': 'Душ рядом с сауной и деревянное ведро для обливания',

  // --- Testimonials (real guest reviews, translated from Booking.com) ---
  'testimonials.score.value': '8.8',
  'testimonials.score.label': 'Превосходно',
  'testimonials.score.meta': 'На основе 400 отзывов на Booking.com',
  'testimonials.eyebrow': 'Голоса гостей', // MOCK
  'testimonials.title': 'Что гости увозят с собой', // MOCK
  'testimonials.intro': 'Не верьте нам на слово — вот что говорят гости после отдыха на Травна-Горе.',
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
  'activities.eyebrow': 'Вокруг Травна-Горы',
  'activities.title': 'Открывайте Словению с Травна-Горы',
  'activities.intro': 'Травна-Гора — тихое место, где можно замедлиться, но из этого лесного уголка Словении до многих самых любимых достопримечательностей страны легко добраться за день. Просыпайтесь под пение птиц и дышите лесным воздухом, а затем отправляйтесь к пещерам, замкам, озёрам и в столицу — до большинства из них около часа езды.',
  'activities.hero.imageAlt': 'Лесной пейзаж вокруг Травна-Горы', // MOCK photo — TODO(Webline): swap alt with real photo
  // Badge figure restates the approximate drive time already in the intro copy — confirm before launch.
  'activities.hero.badge.title': '≈ 1 час',
  'activities.hero.badge.sub': 'до большинства достопримечательностей',
  // Highlight pills — the sight types named in the intro copy.
  'activities.hero.pill.caves': 'Карстовые пещеры',
  'activities.hero.pill.castles': 'Замки',
  'activities.hero.pill.lakes': 'Озёра и леса',
  'activities.hero.pill.capital': 'Любляна',

  // Doorstep activities — image cards rendered from the `activities` content collection.
  'activities.doorstep.eyebrow': 'Прямо у порога',
  'activities.doorstep.title': 'Сразу за дверью',
  'activities.doorstep.intro': 'Далеко ехать не нужно. Тропы, лесные дороги и смотровые площадки начинаются прямо на Травна-Горе и вокруг соседней горной хижины Koča na Kamnem Griču.',

  // Day-trip destinations — cards rendered from the `destinations` content collection.
  'activities.trips.eyebrow': 'Лёгкие поездки на день',
  'activities.trips.title': 'Словения в часе езды',
  'activities.trips.intro': 'Травна-Гора лежит между Любляной и знаменитыми карстовыми пещерами Словении, поэтому это идеальная база для путешествий: до большинства этих мест заметно меньше часа езды.',
  'activities.trips.driveLabel': 'В пути примерно', // label prefix on each distance badge
  'activities.trips.directions': 'Проложить маршрут', // link out to Google Maps, opens in a new tab

  // Day-trip sub-section headings (grouping the `destinations` collection by `section`).
  'activities.trips.section.forests': 'Прогулки по лесу',
  'activities.trips.section.caves': 'Пещеры',
  'activities.trips.section.wildlife': 'Дикая природа',
  'activities.trips.section.history': 'История и замки',

  // Why guests love it — benefits list (icon + text).
  'activities.why.eyebrow': 'За что гости любят это место',
  'activities.why.title': 'Тихий уголок рядом со всем',
  'activities.why.b1': 'Полный покой — никакого городского шума',
  'activities.why.b2': 'На краю одних из крупнейших лесов Европы',
  'activities.why.b3': 'Возможность увидеть бурых медведей в дикой природе',
  'activities.why.b4': 'Между Любляной и регионом карстовых пещер',

  // --- Menu page ---
  'menu.title': 'Меню',
  'menu.intro': 'Домашние блюда из местных продуктов, которые подаются в столовой дома.', // MOCK
  'menu.hero.eyebrow': 'С нашей кухни', // MOCK
  'menu.hero.lead': 'Всё здесь готовится в доме, как было всегда: семейные рецепты, местные сезонные продукты и никаких полуфабрикатов. Утро начинается с домашнего завтрака, позже кухня переходит к согревающим супам и сытным горным блюдам, а на десерт — что-нибудь сладкое.',
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

  // --- Hidden advertising landing (/lp) ---
  'lp.hero.title': 'Заголовок специального предложения',
  'lp.hero.subtitle': 'Короткая поясняющая строка.',
  'lp.reason1': 'Причина забронировать №1',
  'lp.reason2': 'Причина забронировать №2',
  'lp.reason3': 'Причина забронировать №3',
  'lp.socialProof': 'Социальное доказательство / отзыв.',
  'lp.cta': 'Забронировать отдых',

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
