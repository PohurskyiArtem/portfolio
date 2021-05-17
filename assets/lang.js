const langArr = {
    "greeting-top": {
        "ru": "Привет, меня зовут Артём и я",
        "en": "Hello, my name is Artem and I am",
        "ua": "Привіт, мене звати Артем і я"
    },
    "main-title": {
        "ru": "Full Stack веб-разработчик",
        "en": "Full Stack Web Developer",
        "ua": "Full Stack веб-розробник"
    },
    "greeting-bottom": {
        "ru": "я создаю современные, адаптивные и оптимизированные веб-приложения",
        "en": "creating modern and responsive Web Application, Web Pages",
        "ua": "я створюю сучасні, адаптивні та оптимізовані веб-додатки"
    },
    "nav-home": {
        "ru": "Главная",
        "en": "Home",
        "ua": "Головна"
    },
    "nav-services": {
        "ru": "Услуги",
        "en": "Services",
        "ua": "Послуги"
    },
    "nav-works": {
        "ru": "Портфолио",
        "en": "Works",
        "ua": "Портфоліо"
    },
    "nav-skills": {
        "ru": "Навыки",
        "en": "Skills",
        "ua": "Навички"
    },
    "nav-testimonials": {
        "ru": "Отзывы",
        "en": "Testimonials",
        "ua": "Відгуки"
    },
    "nav-contact": {
        "ru": "Контакты",
        "en": "Contact",
        "ua": "Контакти"
    },
    "specialty": {
        "ru": "Чем я занимаюсь",
        "en": "This is what I do",
        "ua": "Чим я займаюсь"
    },
    "quote1": {
        "ru": "Большинство хороших программистов делают свою работу не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования",
        "en": "Most good programmers do their job not because they expect payment or recognition, but because they enjoy programming",
        "ua": "Більшість хороших програмістів роблять свою роботу не тому, що очікують оплати або визнання, а тому що отримують задоволення від програмування"
    },
    "quote2": {
        "ru": "Сделать то, что нужно, так, как нужно, тогда, когда нужно и сделать это за один раз – вот что такое «профессионализм",
        "en": "To do what is needed, the way it is necessary, when it is necessary, and to do it in one go - this is what “professionalism” is.",
        "ua": "Зробити те, що потрібно, як потрібно, тоді, коли потрібно і зробити це за один раз - ось що таке \"професіоналізм\""
    },
    "spec-title1": {
        "ru": "Вёрстка",
        "en": "Layout",
        "ua": "Верстка"
    },
    "spec-title2": {
        "ru": "Одностраничные приложения",
        "en": "Single Page Application",
        "ua": "Односторінкові додатки"
    },
    "spec-title3": {
        "ru": "Wordpress",
        "en": "Wordpress",
        "ua": "Wordpress"
    },
    "spec-title4": {
        "ru": "Правки",
        "en": "Edits",
        "ua": "Правки"
    },
    "spec-descr1": {
        "ru": "Валидная, кроссбраузерная, адаптивная и оптимизированная вёрстка лендингов, многостраничных сайтов и интернет-магазинов",
        "en": "Valid, cross-browser, adaptive and optimized layout of landing pages, multi-page sites and online stores",
        "ua": "Валідна, кросбраузерна, адаптивна та оптимізована верстка лендингів, багатосторінкових сайтів і інтернет-магазинів"
    },
    "spec-descr2": {
        "ru": "Разработка одностаничных приложений и панелей администратора на React.js",
        "en": "Development of single page applications and admin panels on React.js ",
        "ua": "Розробка односторінкових додатків та панелей адміністратора на React.js"
    },
    "spec-descr3": {
        "ru": "Создание или интеграция готовых веб-сайтов в CMS Wordpress",
        "en": "Creation or integration into CMS Wordpress",
        "ua": "Створення та інтегрування готових веб-сайтів в CMS Wordpress"
    },
    "spec-descr4": {
        "ru": "Внесение правок в Ваши веб-сайты",
        "en": "Making edits to your sites",
        "ua": "Внесення правок в Ваші веб-сайти"
    },
    "portfolio": {
        "ru": "Мои работы",
        "en": "My Works",
        "ua": "Мої роботи"
    },
    "work-1--span": {
        "ru": "Мир детства",
        "en": "Childhood",
        "ua": "Childhood"
    },
    "work-1--descr": {
        "ru": "Магазин детских игрушек на CMS Wordpress",
        "en": "Children's toys store on CMS Wordpress",
        "ua": "Магазин дитячих іграшок на CMS Wordpress"
    },
    "work-2--descr": {
        "ru": "Страница агенства по созданию веб-сайтов",
        "en": "Website business card of the agency for creating web sites",
        "ua": "Сторінка агенства по створенню веб-сайтів"
    },
    "work-3--descr": {
        "ru": "Интернет-магазин одежды",
        "en": "Online clothing store",
        "ua": "Інтернет-магазин одягу"
    },
    "work-4--descr": {
        "ru": "Веб-сайт туристического агенства",
        "en": "Travel agency website",
        "ua":"Веб-сайт туристичного агенства"
    },
    "work-5--descr": {
        "ru": "Креативное агентство для успешных брендов",
        "en": "A creative agency for redemptive brands",
        "ua": "Креативне агенство для успішних брендів"
    },
    "work-6--descr": {
        "ru": "Веб-сайт облачного 1С с реализацей панели администратора на React.js",
        "en": "Cloud 1C website with an admin panel on React.js",
        "ua": "Веб-сайт хмарного 1С с реалізацією панелі адміністратора на React.js"
    },
    "quote3": {
        "ru": "Лень — естественное состояние программиста, после которого он рождает хороший алгоритм =)))",
        "en": "Laziness is a natural state of the programmer, after which he gives birth to a good algorithm =)))",
        "ua": "Лінь - природний стан програміста, після якого він створює хороший алгоритм  =)))"
    },
    "skills": {
        "ru": "Мои навыки",
        "en": "My Skills",
        "ua": "Мої навички"
    },
    "ready": {
        "ru": "ГОТОВЫ НАЧАТЬ?",
        "en": "ARE YOU READY TO START?",
        "ua": "ГОТОВІ ПОЧАТИ?"
    },
    "propose": {
        "ru": "Я свободен для новых проектов.",
        "en": "I'm available for freelance projects.",
        "ua": "Я вільний для нових проєктів"
    },
    "hire": {
        "ru": "Написать мне",
        "en": "Hire me",
        "ua": "Написати мені"
    },
    "review-title": {
        "ru": "Мои отзывы",
        "en": "What my clients say",
        "ua": "Мої відгуки"
    },
    "quote4": {
        "ru": "Качество — это делать что-либо правильно, даже когда никто не смотрит.",
        "en": "Quality is doing something right, even when no one is looking.",
        "ua": "Якість - це робити що-небудь правильно, навіть коли ніхто не дивиться."
    },
    "review1": {
        "ru": "Работать с Артёмом было одно удовольствие. Он точно понял, чего я хочу, и создал отличный сайт для моей компании.",
        "en": "Work with Artem was a pleasure. He understood exactly what I wanted and created an awesome site for my company.",
        "ua": "Працювати з Артемом було одне задоволення. Він точно зрозумів, чого я хочу, і створив відмінний сайт для моєї компанії."
    },
    "review2": {
        "ru": "Я очень довольна результатами. Получить 100% удовлетворения сложно, но я получила его без проблем.",
        "en": "I'm really happy with the results. Get 100% satisfaction is difficult but I got it without problems.",
        "ua": "Я дуже задоволена результатами. Отримати 100% задоволення складно, але я отримала його без проблем."
    },
    "drop": {
        "ru": "НАПИШИТЕ МНЕ",
        "en": "DROP ME A LINE",
        "ua": "НАПИШІТЬ МЕНІ"
    },
    "quote5": {
        "ru": "Сайт не является центром вашей вселенной. Ваша страница в Facebook не является центром вашей вселенной. Мобильное приложение - не центр вашей вселенной. Клиент - это центр вашей вселенной!",
        "en": "The site is not the center of your universe. Your Facebook page is not the center of your universe. The mobile app is not the center of your universe. The client is the center of your universe!",
        "ua": "Сайт не є центром вашої всесвіту. Ваша сторінка в Facebook не є центром вашої всесвіту. Мобільний додаток - не центр вашого всесвіту. Клієнт - це центр вашого всесвіту!"
    },
    "send": {
        "ru": "Отправить сообщение",
        "en": "Send Message",
        "ua": "Відправити повідомлення"
    },
    "images": {
        "ru": "Изображения",
        "en": "Images",
        "ua": "Зображення"
    }
}