import {useEffect, useMemo, useRef, useState} from 'react'

const WORD_BANKS = {
  1: [
    'кот',
    'дом',
    'вода',
    'стол',
    'мяч',
    'хлеб',
    'сон',
    'нос',
    'чай',
    'лес',
    'рыба',
    'дождь',
    'шар',
    'окно',
    'дверь',
    'стул',
    'снег',
    'ключ',
    'яблоко',
    'сумка',
    'пицца',
    'море',
    'книга',
    'лампа',
    'трава',
    'огонь',
    'ручка',
    'часы',
    'диван',
    'облако',
    'мышь',
    'сыр',
    'сок',
    'носок',
    'ложка',
    'вилка',
    'тарелка',
    'молоко',
    'банан',
    'шапка',
    'зонт',
    'песок',
    'камень',
    'звезда',
    'луна',
    'кровать',
    'день',
    'ночь',
    'шарф',
    'суп',
    'торт',
    'кран',
    'мыло',
    'пол',
    'стена',
    'крыша',
    'сад',
    'куст',
    'лист',
    'цветок',
    'Шрек',
    'Барби',
    'Марио',
    'Пикачу',
    'Лего',
    'ТикТок',
    'Ютуб',
    'Губка Боб',
    'Миньон',
    'Симба',
    'Олаф',
    'Эльза',
    'Соник',
    'Майнкрафт',
    'Роблокс',
    'Бэтмен',
    'Супермен',
    'Том и Джерри',
    'Чебурашка',
    'Винни-Пух'
  ],
  2: [
    'собака',
    'машина',
    'телефон',
    'школа',
    'улица',
    'река',
    'кофе',
    'ботинки',
    'магазин',
    'поезд',
    'куртка',
    'зеркало',
    'кровать',
    'сахар',
    'птица',
    'подарок',
    'камера',
    'рюкзак',
    'велосипед',
    'парк',
    'кухня',
    'музыка',
    'голос',
    'семья',
    'друг',
    'монета',
    'банк',
    'лифт',
    'город',
    'карта',
    'автобус',
    'аптека',
    'пляж',
    'гитара',
    'очки',
    'чемодан',
    'билет',
    'такси',
    'мост',
    'пальто',
    'свеча',
    'письмо',
    'пульт',
    'зарядка',
    'наушники',
    'фото',
    'стакан',
    'бутылка',
    'печенье',
    'мороженое',
    'планшет',
    'клавиатура',
    'экран',
    'сосед',
    'двор',
    'урок',
    'каникулы',
    'погода',
    'завтрак',
    'ужин',
    'Гарри Поттер',
    'Человек-паук',
    'Титаник',
    'Аватар',
    'Один дома',
    'Рататуй',
    'Король Лев',
    'Аладдин',
    'Русалочка',
    'Форсаж',
    'Симпсоны',
    'Друзья',
    'ГТА',
    'Among Us',
    'Покемоны',
    'Наруто',
    'Нетфликс',
    'Плейстейшен',
    'Нинтендо',
    'Золушка'
  ],
  3: [
    'ресторан',
    'праздник',
    'компьютер',
    'интернет',
    'самолёт',
    'путешествие',
    'вечеринка',
    'спорт',
    'работа',
    'фильм',
    'сериал',
    'видео',
    'интервью',
    'блогер',
    'игра',
    'команда',
    'турнир',
    'рецепт',
    'музей',
    'художник',
    'концерт',
    'покупка',
    'деньги',
    'карьера',
    'свадьба',
    'ребёнок',
    'наука',
    'энергия',
    'сцена',
    'театр',
    'аэропорт',
    'гостиница',
    'экзамен',
    'новости',
    'полиция',
    'больница',
    'тренировка',
    'план',
    'ремонт',
    'переезд',
    'заявка',
    'заказ',
    'доставка',
    'скидка',
    'пароль',
    'профиль',
    'подписка',
    'реклама',
    'сообщение',
    'песня',
    'капитан',
    'детектив',
    'злодей',
    'герой',
    'робот',
    'космос',
    'пираты',
    'динозавр',
    'волшебник',
    'принцесса',
    'Дарт Вейдер',
    'Джек Воробей',
    'Гермиона',
    'Халк',
    'Джокер',
    'Грут',
    'Йода',
    'Валли',
    'Мулан',
    'Хагрид',
    'Кунг-фу Панда',
    'Ледниковый период',
    'Мадагаскар',
    'История игрушек',
    'Скуби-Ду',
    'Смешарики',
    'Фиксики',
    'Ну, погоди',
    'Крокодил Гена',
    'Простоквашино'
  ],
  4: [
    'мотивация',
    'решение',
    'идея',
    'успех',
    'талант',
    'победа',
    'реальность',
    'отношения',
    'настроение',
    'чувство',
    'эмоция',
    'харизма',
    'креативность',
    'вдохновение',
    'интуиция',
    'ответственность',
    'общение',
    'соревнование',
    'воображение',
    'память',
    'логика',
    'внимание',
    'привычка',
    'секрет',
    'выбор',
    'мечта',
    'страх',
    'юмор',
    'удача',
    'ошибка',
    'доверие',
    'сомнение',
    'обида',
    'радость',
    'злость',
    'интерес',
    'вкус',
    'стиль',
    'мода',
    'слава',
    'репутация',
    'традиция',
    'правило',
    'риск',
    'награда',
    'побег',
    'тайна',
    'ловушка',
    'миссия',
    'легенда',
    'Матрица',
    'Интерстеллар',
    'Начало',
    'Назад в будущее',
    'Игра престолов',
    'Ведьмак',
    'Очень странные дела',
    'Доктор Кто',
    'Шерлок Холмс',
    'Мандалорец',
    'Марвел',
    'ДиСи',
    'Звёздные войны',
    'Властелин колец',
    'Пираты Карибского моря',
    'Голодные игры',
    'Сумерки',
    'Дэдпул',
    'Железный человек',
    'Капитан Америка',
    'Фортнайт',
    'Симс',
    'Call of Duty',
    'Киберпанк',
    'Одни из нас',
    'Ведьмак 3',
    'Скайрим',
    'Портал',
    'Тетрис',
    'Мортал Комбат'
  ],
  5: [
    'ностальгия',
    'эмпатия',
    'осознанность',
    'стратегия',
    'перспектива',
    'адаптация',
    'дискуссия',
    'импровизация',
    'символизм',
    'конкуренция',
    'компромисс',
    'иллюзия',
    'контраст',
    'провокация',
    'ирония',
    'привязанность',
    'самооценка',
    'подозрение',
    'рассуждение',
    'предубеждение',
    'наблюдение',
    'ассоциация',
    'ожидание',
    'влияние',
    'публичность',
    'конфликт',
    'сравнение',
    'аргумент',
    'версия',
    'подход',
    'образ',
    'атмосфера',
    'сюжет',
    'жанр',
    'саундтрек',
    'режиссёр',
    'сценарий',
    'премьера',
    'фанат',
    'спойлер',
    'мем',
    'стрим',
    'косплей',
    'комикс',
    'фандом',
    'ремейк',
    'сиквел',
    'трейлер',
    'пасхалка',
    'камео',
    'Чёрное зеркало',
    'Ход королевы',
    'Бумажный дом',
    'Во все тяжкие',
    'Острые козырьки',
    'Локи',
    'ВандаВижен',
    'Академия Амбрелла',
    'Мир Дикого Запада',
    'Офис',
    'Волк с Уолл-стрит',
    'Достать ножи',
    'Ла-Ла Ленд',
    'Дюна',
    'Гравити Фолз',
    'Рик и Морти',
    'Атака титанов',
    'Тетрадь смерти',
    'Человек-бензопила',
    'Аркейн',
    'Зельда',
    'Хогвартс',
    'Элли',
    'Джоэл',
    'Лара Крофт',
    'Кратос',
    'Мастер Чиф',
    'Гордон Фримен',
    'Си-Джей',
    'Солид Снейк'
  ],
  6: [
    'парадокс',
    'абстракция',
    'метафора',
    'концепция',
    'феномен',
    'идентичность',
    'манипуляция',
    'синергия',
    'интерпретация',
    'двусмысленность',
    'самореализация',
    'противоречие',
    'стереотип',
    'рефлексия',
    'аллегория',
    'катарсис',
    'дилемма',
    'амбиция',
    'авторитет',
    'рациональность',
    'хаос',
    'утопия',
    'драматургия',
    'кульминация',
    'субъективность',
    'эволюция',
    'поколение',
    'мифология',
    'деконструкция',
    'архетип',
    'контекст',
    'подтекст',
    'сатира',
    'пародия',
    'клише',
    'канон',
    'реткон',
    'антигерой',
    'мораль',
    'мотив',
    'реплика',
    'монтаж',
    'кадр',
    'эпизод',
    'критик',
    'рейтинг',
    'номинация',
    'экранизация',
    'адаптация',
    'оригинал',
    'Оскар',
    'Канны',
    'Бродвей',
    'Дисней',
    'Пиксар',
    'Студия Гибли',
    'Хаяо Миядзаки',
    'Кристофер Нолан',
    'Квентин Тарантино',
    'Стэн Ли',
    'Саурон',
    'Гэндальф',
    'Тирион Ланнистер',
    'Дейенерис',
    'Нео',
    'Морфеус',
    'Терминатор',
    'Рокки',
    'Индиана Джонс',
    'Хан Соло',
    'Сайлент Хилл',
    'Резидент Ивел',
    'Метал Гир',
    'Финальная фантазия',
    'Стардью Вэлли',
    'Хейдис',
    'Дарк Соулс',
    'Элден Ринг',
    'Дум',
    'Half-Life'
  ],
  7: [
    'экзистенциализм',
    'рационализация',
    'самоидентификация',
    'детерминизм',
    'конформизм',
    'нигилизм',
    'амбивалентность',
    'диссонанс',
    'проекция',
    'интроспекция',
    'девальвация',
    'идеализация',
    'поляризация',
    'манипулятивность',
    'легитимность',
    'аутентичность',
    'репрезентация',
    'инфантильность',
    'трансформация',
    'эскапизм',
    'контркультура',
    'постирония',
    'метамодерн',
    'гипербола',
    'гротеск',
    'реминисценция',
    'оммаж',
    'интертекст',
    'нарратив',
    'экспозиция',
    'пролог',
    'эпилог',
    'катарсис',
    'флешбэк',
    'клиффхэнгер',
    'спин-офф',
    'приквел',
    'мультивселенная',
    'антиутопия',
    'нуар',
    'Вечное сияние чистого разума',
    'Бойцовский клуб',
    'Остров проклятых',
    'Престиж',
    'Паразиты',
    'Старикам тут не место',
    'Большой Лебовски',
    'Американский психопат',
    'Твин Пикс',
    'Клан Сопрано',
    'Евангелион',
    'Берсерк',
    'Призрак в доспехах',
    'Унесённые призраками',
    'Мой сосед Тоторо',
    'Ходячий замок',
    'Ванпанчмен',
    'Ковбой Бибоп',
    'Монстр',
    'Акира',
    'Геральт',
    'Цири',
    'Арья Старк',
    'Уолтер Уайт',
    'Сол Гудман',
    'Декстер',
    'Доктор Хаус',
    'Тони Старк',
    'Танос',
    'Локи',
    'Биошок',
    'Диско Элизиум',
    'Дез Стрэндинг',
    'Нир Автомата',
    'Персона 5',
    'Балдурс Гейт',
    'Масс Эффект',
    'Бладборн',
    'Секиро',
    'Фоллаут'
  ],
  8: [
    'деконструкция',
    'субъективность',
    'объективация',
    'эпистемология',
    'онтология',
    'симулякр',
    'постмодернизм',
    'метанарратив',
    'интерсубъективность',
    'дискурсивность',
    'экзистенциальный кризис',
    'когнитивное искажение',
    'моральная дилемма',
    'коллективное бессознательное',
    'эффект наблюдателя',
    'парадокс выбора',
    'окно Овертона',
    'спираль молчания',
    'ошибка выжившего',
    'эффект Даннинга — Крюгера',
    'нарративная структура',
    'ненадёжный рассказчик',
    'четвёртая стена',
    'путь героя',
    'ружьё Чехова',
    'макгаффин',
    'бутылочный эпизод',
    'эффект зловещей долины',
    'культурный код',
    'авторская оптика',
    'Заводной апельсин',
    '2001 год: Космическая одиссея',
    'Сталкер',
    'Солярис',
    'Бегущий по лезвию',
    'Малхолланд Драйв',
    'Догвилль',
    'Реквием по мечте',
    'Фонтан',
    'Маяк',
    'Синекдоха, Нью-Йорк',
    'Всё везде и сразу',
    'Тёмный рыцарь',
    'Апокалипсис сегодня',
    'Таксист',
    'Гражданин Кейн',
    'Семь самураев',
    'Крёстный отец',
    'Олдбой',
    'Молчание ягнят',
    'Тёмные начала',
    'Песнь льда и пламени',
    'Дюна',
    'Фонд',
    'Нейромант',
    'Автостопом по галактике',
    '1984',
    'О дивный новый мир',
    'Мастер и Маргарита',
    'Преступление и наказание',
    'Сизиф',
    'Атлант',
    'Прометей',
    'Левиафан',
    'Минотавр',
    'Одиссей',
    'Гамлет',
    'Фауст',
    'Дон Кихот',
    'Франкенштейн',
    'Катамари',
    'Кентукки Роут Зеро',
    'Планскейп: Тормент',
    'Outer Wilds',
    'Inside',
    'Limbo',
    'The Stanley Parable',
    'Return of the Obra Dinn',
    'Papers, Please',
    'Shadow of the Colossus'
  ]
}

const LEVEL_PATTERN = [1, 2, 3, 4, 5, 6, 7, 8]
const DEFAULT_TIMER_SECONDS = 60
const MIN_PLAYERS = 2

function shuffle(array) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function normalizeTimer(value) {
  const number = Number(value)
  if (!Number.isFinite(number)) return DEFAULT_TIMER_SECONDS
  return Math.max(10, Math.min(300, Math.round(number)))
}

function pickUniqueWords(usedWords = new Set()) {
  const picked = []
  const localUsed = new Set(usedWords)

  LEVEL_PATTERN.forEach((level) => {
    const bank = WORD_BANKS[level] || []
    const candidates = shuffle(bank).filter((word) => !localUsed.has(word))
    const fallback = shuffle(bank)
    const word = candidates[0] || fallback[0] || `слово уровня ${level}`
    picked.push({word, level, guessed: false})
    localUsed.add(word)
  })

  return picked
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Number(seconds) || 0)
  const m = Math.floor(safeSeconds / 60)
    .toString()
    .padStart(2, '0')
  const s = (safeSeconds % 60).toString().padStart(2, '0')
  return `${m}:${s}`
}

function runSelfTests() {
  const firstHand = pickUniqueWords(new Set())
  console.assert(firstHand.length === 8, 'Тест: ход должен состоять из 8 слов')
  console.assert(
    firstHand.every((card, index) => card.level === LEVEL_PATTERN[index]),
    'Тест: слова должны идти по уровням 1-8'
  )
  console.assert(
    new Set(firstHand.map((card) => card.word)).size === firstHand.length,
    'Тест: в одном ходе слова не должны повторяться'
  )
  console.assert(
    formatTime(65) === '01:05',
    'Тест: таймер должен форматироваться как мм:сс'
  )
  console.assert(
    normalizeTimer(5) === 10,
    'Тест: таймер не должен быть меньше 10 секунд'
  )
  console.assert(
    normalizeTimer(500) === 300,
    'Тест: таймер не должен быть больше 300 секунд'
  )
}

if (typeof window !== 'undefined' && !window.__ALIAS_LOCAL_GAME_TESTED__) {
  window.__ALIAS_LOCAL_GAME_TESTED__ = true
  runSelfTests()
}

function Icon({children}) {
  return (
    <span
      className="inline-flex h-5 w-5 items-center justify-center"
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

function PrimaryButton({children, className = '', disabled = false, ...props}) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-45 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function SecondaryButton({children, className = '', ...props}) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-2xl bg-white/12 px-5 py-3 font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/20 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

function TextInput(props) {
  return (
    <input
      className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-emerald-300"
      {...props}
    />
  )
}

function Panel({children, className = ''}) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur ${className}`}
    >
      {children}
    </section>
  )
}

export default function AliasLocalGame() {
  const [stage, setStage] = useState('setup')
  const [nameInput, setNameInput] = useState('')
  const [timerInput, setTimerInput] = useState(DEFAULT_TIMER_SECONDS)
  const [players, setPlayers] = useState([])
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0)
  const [currentCards, setCurrentCards] = useState([])
  const [usedWords, setUsedWords] = useState(new Set())
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_TIMER_SECONDS)
  const [roundNumber, setRoundNumber] = useState(1)
  const intervalRef = useRef(null)

  const sortedPlayers = useMemo(
    () => [...players].sort((a, b) => b.score - a.score || a.turns - b.turns),
    [players]
  )
  const currentPlayer = players[currentPlayerIndex]
  const guessedCount = currentCards.filter((card) => card.guessed).length

  const prepareTurn = () => {
    const cards = pickUniqueWords(usedWords)
    setCurrentCards(cards)
    setUsedWords((prev) => {
      const next = new Set(prev)
      cards.forEach((card) => next.add(card.word))
      return next
    })
    setSecondsLeft(normalizeTimer(timerInput))
  }

  useEffect(() => {
    if (stage !== 'playing') return undefined

    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalRef.current)
          setStage('review')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(intervalRef.current)
  }, [stage])

  useEffect(() => {
    if (
      stage === 'ready' &&
      players.length >= MIN_PLAYERS &&
      currentCards.length === 0
    ) {
      prepareTurn()
    }
    // Intentionally not depending on prepareTurn because it changes with usedWords.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, players.length, currentCards.length])

  const addPlayer = () => {
    const trimmed = nameInput.trim()
    if (!trimmed) return
    if (players.some((p) => p.name.toLowerCase() === trimmed.toLowerCase()))
      return
    setPlayers([...players, {name: trimmed, score: 0, turns: 0}])
    setNameInput('')
  }

  const removePlayer = (name) => {
    setPlayers(players.filter((p) => p.name !== name))
  }

  const startGame = () => {
    if (players.length < MIN_PLAYERS) return
    setSecondsLeft(normalizeTimer(timerInput))
    setCurrentPlayerIndex(0)
    setRoundNumber(1)
    setUsedWords(new Set())
    setCurrentCards([])
    setStage('ready')
  }

  const beginTurn = () => {
    if (currentCards.length === 0) {
      prepareTurn()
    }
    setSecondsLeft(normalizeTimer(timerInput))
    setStage('playing')
  }

  const toggleGuessed = (word) => {
    if (stage !== 'review') return
    setCurrentCards((cards) =>
      cards.map((card) =>
        card.word === word ? {...card, guessed: !card.guessed} : card
      )
    )
  }

  const finishReview = () => {
    setPlayers((prev) =>
      prev.map((player, index) =>
        index === currentPlayerIndex
          ? {
              ...player,
              score: player.score + guessedCount,
              turns: player.turns + 1
            }
          : player
      )
    )
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length)
    setRoundNumber((prev) => prev + 1)
    setCurrentCards([])
    setStage('ready')
  }

  const resetGame = () => {
    window.clearInterval(intervalRef.current)
    setStage('setup')
    setPlayers([])
    setCurrentPlayerIndex(0)
    setCurrentCards([])
    setUsedWords(new Set())
    setSecondsLeft(DEFAULT_TIMER_SECONDS)
    setRoundNumber(1)
    setNameInput('')
    setTimerInput(DEFAULT_TIMER_SECONDS)
  }

  const stopEarly = () => {
    window.clearInterval(intervalRef.current)
    setStage('review')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-4 text-white md:p-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-emerald-300">
              <Icon>✦</Icon>
              <span className="text-sm uppercase tracking-widest">
                Shvyamba Adyuha
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Скажи иначе
            </h1>
            <p className="mt-2 text-slate-300">
              8 слов на ход: от лёгких до сложных, с поп-культурой внутри.
            </p>
          </div>
          {stage !== 'setup' && (
            <SecondaryButton onClick={resetGame}>
              <span className="mr-2">↻</span> Новая игра
            </SecondaryButton>
          )}
        </header>

        {stage === 'setup' && (
          <Panel>
            <div className="space-y-6 p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon>👥</Icon>
                    <h2 className="text-2xl font-semibold">Участники</h2>
                  </div>
                  <div className="flex gap-2">
                    <TextInput
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                      placeholder="Имя игрока"
                    />
                    <PrimaryButton onClick={addPlayer} className="px-4">
                      +
                    </PrimaryButton>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {players.map((player) => (
                      <span
                        key={player.name}
                        className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2"
                      >
                        {player.name}
                        <button
                          type="button"
                          onClick={() => removePlayer(player.name)}
                          className="text-slate-300 transition hover:text-white"
                          aria-label={`Удалить ${player.name}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon>⏱</Icon>
                    <h2 className="text-2xl font-semibold">Время хода</h2>
                  </div>
                  <label className="block space-y-2 text-slate-200">
                    <span>Секунд на объяснение</span>
                    <TextInput
                      type="number"
                      min="10"
                      max="300"
                      value={timerInput}
                      onChange={(e) => setTimerInput(e.target.value)}
                    />
                  </label>
                  <PrimaryButton
                    onClick={startGame}
                    disabled={players.length < MIN_PLAYERS}
                    className="w-full py-4 text-lg"
                  >
                    <span className="mr-2">▶</span> Начать игру
                  </PrimaryButton>
                  {players.length < MIN_PLAYERS && (
                    <p className="text-sm text-slate-400">
                      Нужно минимум 2 участника.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Panel>
        )}

        {stage !== 'setup' && (
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <Panel className="overflow-hidden">
              <div className="space-y-6 p-6 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-slate-300">Ход #{roundNumber}</p>
                    <h2 className="text-3xl font-bold">
                      Объясняет: {currentPlayer?.name}
                    </h2>
                  </div>
                  <div className="font-mono text-5xl font-bold tabular-nums text-emerald-300">
                    {formatTime(secondsLeft)}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {currentCards.map((card) => (
                    <button
                      key={`${card.level}-${card.word}`}
                      type="button"
                      onClick={() => toggleGuessed(card.word)}
                      className={`rounded-2xl border p-4 text-left transition ${
                        card.guessed
                          ? 'border-emerald-300 bg-emerald-500/25'
                          : 'border-white/10 bg-white/10'
                      } ${stage === 'review' ? 'cursor-pointer hover:bg-white/20' : 'cursor-default'}`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-2xl font-semibold">
                          {card.word}
                        </span>
                        <span className="rounded-full bg-black/25 px-2 py-1 text-xs text-slate-300">
                          ур. {card.level}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {stage === 'ready' && (
                  <div className="space-y-3">
                    <p className="text-slate-300">
                      Слова уже сгенерированы. Нажмите старт, когда игрок готов
                      объяснять.
                    </p>
                    <PrimaryButton
                      onClick={beginTurn}
                      className="w-full py-4 text-lg"
                    >
                      <span className="mr-2">▶</span> Старт хода
                    </PrimaryButton>
                  </div>
                )}

                {stage === 'playing' && (
                  <SecondaryButton
                    onClick={stopEarly}
                    className="w-full py-4 text-lg"
                  >
                    Закончить ход досрочно
                  </SecondaryButton>
                )}

                {stage === 'review' && (
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-emerald-300/30 bg-emerald-500/15 p-4">
                      <p className="font-semibold">Время вышло!</p>
                      <p className="text-slate-300">
                        Отметьте слова, которые команда правильно отгадала.
                      </p>
                    </div>
                    <PrimaryButton
                      onClick={finishReview}
                      className="w-full py-4 text-lg"
                    >
                      <span className="mr-2">✓</span> Начислить {guessedCount}{' '}
                      очков
                    </PrimaryButton>
                  </div>
                )}
              </div>
            </Panel>

            <Panel className="h-fit">
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-2">
                  <Icon>🏆</Icon>
                  <h2 className="text-2xl font-semibold">Лидеры</h2>
                </div>
                <div className="space-y-2">
                  {sortedPlayers.map((player, index) => (
                    <div
                      key={player.name}
                      className="flex items-center justify-between rounded-2xl bg-white/10 p-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/25 font-bold">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-semibold">{player.name}</p>
                          <p className="text-xs text-slate-400">
                            ходов: {player.turns}
                          </p>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-emerald-300">
                        {player.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
          </div>
        )}
      </div>
    </div>
  )
}
