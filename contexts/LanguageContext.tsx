'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.name': 'Muhammadamin',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'I create beautiful, responsive web applications using modern technologies like React, Next.js, and Node.js. Passionate about clean code and exceptional user experiences.',
    'hero.hire': 'Hire Me',
    'hero.download': 'Download CV',
    'hero.scrollDown': 'Scroll Down',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'Passionate developer with expertise in building scalable web applications and creating innovative solutions that make a difference.',
    'about.additional': 'When I\'m not coding, you can find me writing technical articles, contributing to open-source projects, or learning new technologies. I believe in continuous learning and sharing knowledge with the developer community.',
    'about.passion': 'My passion for web development started when I was young, and I\'ve been constantly learning and improving my skills. I love solving complex problems and turning ideas into reality through code.',
    'about.approach': 'I approach every project with attention to detail, clean code practices, and user-centered design. My goal is to create applications that not only look great but also provide exceptional user experiences.',
    'about.future': 'Looking forward, I\'m excited about emerging technologies like AI integration, Web3, and advanced frontend frameworks. I\'m always ready to take on new challenges and grow as a developer.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    'about.timeline': 'Experience Timeline',
    'about.personalInfo': 'Personal Information',
    'about.interests': 'Interests & Hobbies',
    'about.values': 'Core Values',
    
    // Personal Info
    'about.age': 'Age',
    'about.location': 'Location',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'about.ageValue': '14 years old',
    'about.locationValue': 'Tashkent, Uzbekistan',
    'about.educationValue': '8th Grade Student',
    'about.languagesValue': 'Uzbek, Russian, English',
    
    // Interests
    'about.interest1': '🎮 Gaming & Technology',
    'about.interest2': '📚 Reading Tech Blogs',
    'about.interest3': '🎵 Music & Creative Arts',
    'about.interest4': '⚽ Sports & Fitness',
    'about.interest5': '🌍 Learning New Cultures',
    'about.interest6': '🎨 UI/UX Design',
    
    // Values
    'about.value1': '💡 Innovation',
    'about.value1Desc': 'Always seeking creative solutions',
    'about.value2': '🤝 Collaboration',
    'about.value2Desc': 'Working together for better results',
    'about.value3': '📈 Growth',
    'about.value3Desc': 'Continuous learning and improvement',
    'about.value4': '🎯 Quality',
    'about.value4Desc': 'Delivering excellence in every project',
    
    // Experience Timeline
    'about.webDev': 'Web Developer',
    'about.company1': 'Freelance & Personal Projects',
    'about.desc1': 'Developed modern web applications using cutting-edge technologies and frameworks.',
    'about.student': '7th Grade Student',
    'about.company2': 'School',
    'about.desc2': 'I am an excellent student at school and consistently achieve top grades. 😁',
    'about.itHouse': 'IT Student',
    'about.company3': 'IT House - The Future Is Here',
    'about.desc3': 'Relevant Coursework: CyberSecurity, Web Development, SMM, Design, Foundation...',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.education': '🏫 Education',
    'skills.workExperience': '💼 Work Experience',
    
    // Projects Section
    'projects.title': 'My Projects',
    'projects.description': 'Here are some of my recent projects that showcase my skills and passion for web development.',
    'projects.viewDemo': 'View Project',
    'projects.viewCode': 'View Code',
    'projects.github': 'Visit My GitHub',
    'projects.allProjects': 'View All Projects',
    
    // Real Projects
    'projects.portfolio20': 'Portfolio 2.0',
    'projects.portfolio20Desc': 'My first portfolio project built with HTML, CSS, and JavaScript. A clean and responsive design showcasing my early development skills. 😎',
    'projects.figmaGroup': 'Figma Group Project',
    'projects.figmaGroupDesc': 'My first collaborative project built with React. Working with a team to create a modern web application. 😎',
    'projects.bookHome': 'Book Home',
    'projects.bookHomeDesc': 'An educational platform project developed with my teacher. Features book management and reading tools. 😁',
    'projects.portfolioTeacher': 'Portfolio Teacher',
    'projects.portfolioTeacherDesc': 'A professional portfolio website created for my teacher. Clean design with modern features. 👍',
    'projects.chatApp': 'Real-time Chat Application',
    'projects.chatAppDesc': 'A modern chat application with real-time messaging, user authentication, and responsive design.',
    'projects.elearning': 'E-Learning Platform',
    'projects.elearningDesc': 'Comprehensive educational platform with course management, progress tracking, and interactive learning tools.',
    
    // Services Section
    'services.title': 'Services',
    'services.description': 'I offer comprehensive web development services to help bring your ideas to life with modern technologies and best practices.',
    'services.webDev': 'Web Development',
    'services.webDevDesc': 'Creating responsive and modern web applications using the latest technologies and frameworks.',
    'services.responsive': 'Responsive Design',
    'services.responsiveDesc': 'Ensuring your website looks perfect and functions flawlessly on all devices and screen sizes.',
    'services.seo': 'SEO Optimization',
    'services.seoDesc': 'Optimizing your website for better search engine rankings, visibility, and organic traffic growth.',
    'services.api': 'API Integration',
    'services.apiDesc': 'Integrating third-party APIs and services to enhance functionality and user experience.',
    'services.uiux': 'UI/UX Design',
    'services.uiuxDesc': 'Creating beautiful and intuitive user interfaces with modern design principles and user-centered approach.',
    'services.backend': 'Backend Development',
    'services.backendDesc': 'Building robust backend systems and APIs using Node.js, databases, and modern server technologies.',
    'services.cloud': 'Cloud Deployment',
    'services.cloudDesc': 'Deploying applications to cloud platforms with CI/CD pipelines, monitoring, and scalability.',
    'services.security': 'Security & Testing',
    'services.securityDesc': 'Ensuring application security and reliability through comprehensive testing and security best practices.',
    'services.cta': 'Ready to Start Your Project?',
    'services.ctaDesc': 'Let\'s discuss how I can help you build something amazing. Get in touch for a free consultation and let\'s bring your ideas to life.',
    'services.ctaButton': 'Let\'s Work Together',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'Ready to start your next project? Let\'s work together to create something amazing!',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.success': 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!',
    'contact.error': 'Sorry, there was an error sending your message. Please try again or contact me directly.',
    'contact.connect': 'Let\'s Connect',
    'contact.follow': 'Follow Me On Social Media',
    'contact.sendMessage': 'Send Me a Message',
    'contact.namePlaceholder': 'Enter your full name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': 'Tell me about your project, ideas, or how I can help you...',
    'contact.sending': 'Sending Message...',
    'contact.info': 'Contact Information',
    'contact.availability': 'I\'m available for freelance work and exciting projects. Let\'s create something great together!',
    
    // Footer
    'footer.rights': 'All rights reserved. Made with ❤️',
    'footer.built': 'Built with Next.js, Tailwind CSS, Framer Motion, and lots of coffee ☕',
    'footer.quickLinks': 'Quick Links',
    'footer.social': 'Social Media',
    'footer.backToTop': 'Back to Top',
  },
  uz: {
    // Navigation
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Men haqimda',
    'nav.projects': 'Loyihalar',
    'nav.services': 'Xizmatlar',
    'nav.contact': 'Aloqa',
    'nav.language': 'Til',
    
    // Hero Section
    'hero.greeting': 'Salom, men',
    'hero.name': 'Muhammadamin',
    'hero.title': 'To\'liq Stek Dasturchi',
    'hero.description': 'Men React, Next.js va Node.js kabi zamonaviy texnologiyalar yordamida chiroyli va javobgar veb-ilovalar yarataman. Toza kod va ajoyib foydalanuvchi tajribasiga ishtiyoqliman.',
    'hero.hire': 'Ishga oling',
    'hero.download': 'CV yuklab olish',
    'hero.scrollDown': 'Pastga aylantiring',
    
    // About Section
    'about.title': 'Men haqimda',
    'about.description': 'Kengaytiriladigan veb-ilovalar yaratish va farq qiladigan innovatsion yechimlar yaratishda tajribaga ega bo\'lgan ishtiyoqli dasturchi.',
    'about.additional': 'Men kodlash bilan shug\'ullanmasam, texnik maqolalar yozayotganimni, ochiq manbali loyihalarga hissa qo\'shayotganimni yoki yangi texnologiyalarni o\'rganayotganimni topishingiz mumkin. Men uzluksiz o\'rganish va ishlab chiquvchilar hamjamiyatiga bilim almashishga ishonaman.',
    'about.passion': 'Veb-dasturlashga bo\'lgan ishtiyoqim yoshligimdan boshlangan va men doimiy ravishda o\'rganib, ko\'nikmalarimni oshirib boraman. Men murakkab muammolarni hal qilishni va g\'oyalarni kod orqali haqiqatga aylantirishni yaxshi ko\'raman.',
    'about.approach': 'Men har bir loyihaga tafsilotlarga e\'tibor, toza kod amaliyotlari va foydalanuvchi markazli dizayn bilan yondashaman. Mening maqsadim nafaqat chiroyli ko\'rinadigan, balki ajoyib foydalanuvchi tajribasini taqdim etadigan ilovalar yaratishdir.',
    'about.future': 'Kelajakka qarab, men AI integratsiyasi, Web3 va ilg\'or frontend freymvorklari kabi yangi texnologiyalar haqida hayajonlanaman. Men har doim yangi qiyinchiliklarni qabul qilishga va dasturchi sifatida o\'sishga tayyorman.',
    'about.experience': 'Yillik tajriba',
    'about.projects': 'Tugallangan loyihalar',
    'about.clients': 'Mamnun mijozlar',
    'about.timeline': 'Tajriba vaqt jadvali',
    'about.personalInfo': 'Shaxsiy ma\'lumotlar',
    'about.interests': 'Qiziqishlar va sevimli mashg\'ulotlar',
    'about.values': 'Asosiy qadriyatlar',
    
    // Personal Info
    'about.age': 'Yosh',
    'about.location': 'Joylashuv',
    'about.education': 'Ta\'lim',
    'about.languages': 'Tillar',
    'about.ageValue': '14 yoshda',
    'about.locationValue': 'Toshkent, O\'zbekiston',
    'about.educationValue': '8-sinf o\'quvchisi',
    'about.languagesValue': 'O\'zbek, Rus, Ingliz',
    
    // Interests
    'about.interest1': '🎮 O\'yin va texnologiya',
    'about.interest2': '📚 Texnik bloglar o\'qish',
    'about.interest3': '🎵 Musiqa va ijodiy san\'at',
    'about.interest4': '⚽ Sport va fitness',
    'about.interest5': '🌍 Yangi madaniyatlarni o\'rganish',
    'about.interest6': '🎨 UI/UX dizayn',
    
    // Values
    'about.value1': '💡 Innovatsiya',
    'about.value1Desc': 'Har doim ijodiy yechimlar izlash',
    'about.value2': '🤝 Hamkorlik',
    'about.value2Desc': 'Yaxshi natijalar uchun birga ishlash',
    'about.value3': '📈 O\'sish',
    'about.value3Desc': 'Uzluksiz o\'rganish va takomillashtirish',
    'about.value4': '🎯 Sifat',
    'about.value4Desc': 'Har bir loyihada mukammallikni taqdim etish',
    
    // Experience Timeline
    'about.webDev': 'Veb Dasturchi',
    'about.company1': 'Freelance va Shaxsiy Loyihalar',
    'about.desc1': 'Eng so\'nggi texnologiyalar va freymvorklar yordamida zamonaviy veb-ilovalar ishlab chiqish.',
    'about.student': '7-sinf O\'quvchisi',
    'about.company2': 'Maktab',
    'about.desc2': 'Men maktabda a\'lo o\'quvchiman va doimo yuqori baholar olaman. 😁',
    'about.itHouse': 'IT Talabasi',
    'about.company3': 'IT House - Kelajak Shu Yerda',
    'about.desc3': 'Tegishli kurslar: Kiberxavfsizlik, Veb-dasturlash, SMM, Dizayn, Asos...',
    
    // Skills
    'skills.title': 'Mening ko\'nikmalarim',
    'skills.frontend': 'Frontend Dasturlash',
    'skills.backend': 'Backend Dasturlash',
    'skills.education': '🏫 Ta\'lim',
    'skills.workExperience': '💼 Ish Tajribasi',
    
    // Projects Section
    'projects.title': 'Mening loyihalarim',
    'projects.description': 'Bu yerda mening veb-dasturlashga bo\'lgan ko\'nikmalarim va ishtiyoqimni ko\'rsatadigan so\'nggi loyihalarim.',
    'projects.viewDemo': 'Loyihani ko\'rish',
    'projects.viewCode': 'Kodni ko\'rish',
    'projects.github': 'GitHub sahifamga tashrif buyuring',
    'projects.allProjects': 'Barcha loyihalarni ko\'rish',
    
    // Real Projects
    'projects.portfolio20': 'Portfolio 2.0',
    'projects.portfolio20Desc': 'HTML, CSS va JavaScript bilan qurilgan birinchi portfolio loyiham. Dastlabki dasturlash ko\'nikmalarimni ko\'rsatadigan toza va javobgar dizayn. 😎',
    'projects.figmaGroup': 'Figma Guruh Loyihasi',
    'projects.figmaGroupDesc': 'React bilan qurilgan birinchi hamkorlik loyiham. Zamonaviy veb-ilova yaratish uchun jamoa bilan ishlash. 😎',
    'projects.bookHome': 'Book Home',
    'projects.bookHomeDesc': 'Ustozim bilan birga ishlab chiqilgan ta\'lim platformasi loyihasi. Kitob boshqaruvi va o\'qish vositalarini o\'z ichiga oladi. 😁',
    'projects.portfolioTeacher': 'Portfolio Teacher',
    'projects.portfolioTeacherDesc': 'Ustozim uchun yaratilgan professional portfolio veb-sayti. Zamonaviy xususiyatlar bilan toza dizayn. 👍',
    'projects.chatApp': 'Real vaqt Chat Ilovasi',
    'projects.chatAppDesc': 'Real vaqt xabar almashish, foydalanuvchi autentifikatsiyasi va javobgar dizayn bilan zamonaviy chat ilovasi.',
    'projects.elearning': 'Elektron Ta\'lim Platformasi',
    'projects.elearningDesc': 'Kurs boshqaruvi, taraqqiyot kuzatuvi va interaktiv o\'rganish vositalari bilan keng qamrovli ta\'lim platformasi.',
    
    // Services Section
    'services.title': 'Xizmatlar',
    'services.description': 'Men sizning g\'oyalaringizni zamonaviy texnologiyalar va eng yaxshi amaliyotlar bilan hayotga tatbiq etishga yordam berish uchun keng qamrovli veb-dasturlash xizmatlarini taklif qilaman.',
    'services.webDev': 'Veb dasturlash',
    'services.webDevDesc': 'Eng so\'nggi texnologiyalar va freymvorklar yordamida javobgar va zamonaviy veb-ilovalar yaratish.',
    'services.responsive': 'Javobgar dizayn',
    'services.responsiveDesc': 'Veb-saytingiz barcha qurilmalar va ekran o\'lchamlarida mukammal ko\'rinishi va benuqson ishlashini ta\'minlash.',
    'services.seo': 'SEO optimallashtirish',
    'services.seoDesc': 'Qidiruv tizimlarida yaxshi reyting, ko\'rinish va organik trafik o\'sishi uchun veb-saytni optimallashtirish.',
    'services.api': 'API integratsiyasi',
    'services.apiDesc': 'Funksionallik va foydalanuvchi tajribasini yaxshilash uchun uchinchi tomon API va xizmatlarini birlashtirish.',
    'services.uiux': 'UI/UX Dizayn',
    'services.uiuxDesc': 'Zamonaviy dizayn tamoyillari va foydalanuvchi markazli yondashuv bilan chiroyli va intuitiv foydalanuvchi interfeyslarini yaratish.',
    'services.backend': 'Backend Dasturlash',
    'services.backendDesc': 'Node.js, ma\'lumotlar bazalari va zamonaviy server texnologiyalari yordamida mustahkam backend tizimlari va API larni yaratish.',
    'services.cloud': 'Bulut Joylashtirish',
    'services.cloudDesc': 'CI/CD quvurlari, monitoring va kengaytirish imkoniyatlari bilan bulut platformalariga ilovalarni joylashtirish.',
    'services.security': 'Xavfsizlik va Sinov',
    'services.securityDesc': 'Keng qamrovli sinov va xavfsizlik eng yaxshi amaliyotlari orqali ilova xavfsizligi va ishonchliligini ta\'minlash.',
    'services.cta': 'Loyihangizni boshlashga tayyormisiz?',
    'services.ctaDesc': 'Ajoyib narsa qurishda sizga qanday yordam bera olishimni muhokama qilaylik. Bepul maslahat uchun bog\'laning va g\'oyalaringizni hayotga tatbiq etaylik.',
    'services.ctaButton': 'Keling, birga ishlaymiz',
    
    // Contact Section
    'contact.title': 'Bog\'lanish',
    'contact.description': 'Keyingi loyihangizni boshlashga tayyormisiz? Ajoyib narsa yaratish uchun birga ishlaymiz!',
    'contact.name': 'To\'liq ism',
    'contact.email': 'Email manzil',
    'contact.message': 'Sizning xabaringiz',
    'contact.send': 'Xabar yuborish',
    'contact.success': 'Rahmat! Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada javob beraman!',
    'contact.error': 'Kechirasiz, xabaringizni yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri bog\'laning.',
    'contact.connect': 'Keling bog\'lanaylik',
    'contact.follow': 'Ijtimoiy tarmoqlarda kuzatib boring',
    'contact.sendMessage': 'Menga xabar yuboring',
    'contact.namePlaceholder': 'To\'liq ismingizni kiriting',
    'contact.emailPlaceholder': 'sizning.email@example.com',
    'contact.messagePlaceholder': 'Loyihangiz, g\'oyalaringiz yoki sizga qanday yordam bera olishim haqida gapirib bering...',
    'contact.sending': 'Xabar yuborilmoqda...',
    'contact.info': 'Aloqa ma\'lumotlari',
    'contact.availability': 'Men freelance ish va qiziqarli loyihalar uchun mavjudman. Keling, birga ajoyib narsa yarataylik!',
    
    // Footer
    'footer.rights': 'Barcha huquqlar himoyalangan. ❤️ bilan yaratilgan',
    'footer.built': 'Next.js, Tailwind CSS, Framer Motion va ko\'p qahva bilan qurilgan ☕',
    'footer.quickLinks': 'Tezkor havolalar',
    'footer.social': 'Ijtimoiy tarmoqlar',
    'footer.backToTop': 'Yuqoriga qaytish',
  },
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.services': 'Услуги',
    'nav.contact': 'Контакты',
    'nav.language': 'Язык',
    
    // Hero Section
    'hero.greeting': 'Привет, я',
    'hero.name': 'Мухаммадамин',
    'hero.title': 'Fullstack Разработчик',
    'hero.description': 'Я создаю красивые, адаптивные веб-приложения, используя современные технологии, такие как React, Next.js и Node.js. Увлечен чистым кодом и исключительным пользовательским опытом.',
    'hero.hire': 'Нанять меня',
    'hero.download': 'Скачать CV',
    'hero.scrollDown': 'Прокрутить вниз',
    
    // About Section
    'about.title': 'Обо мне',
    'about.description': 'Увлеченный разработчик с опытом создания масштабируемых веб-приложений и создания инновационных решений, которые имеют значение.',
    'about.additional': 'Когда я не программирую, вы можете найти меня пишущим технические статьи, вносящим вклад в проекты с открытым исходным кодом или изучающим новые технологии. Я верю в непрерывное обучение и обмен знаниями с сообществом разработчиков.',
    'about.passion': 'Моя страсть к веб-разработке началась в молодости, и я постоянно учусь и совершенствую свои навыки. Я люблю решать сложные проблемы и воплощать идеи в реальность через код.',
    'about.approach': 'Я подхожу к каждому проекту с вниманием к деталям, практиками чистого кода и пользовательским дизайном. Моя цель - создавать приложения, которые не только отлично выглядят, но и обеспечивают исключительный пользовательский опыт.',
    'about.future': 'Глядя в будущее, я взволнован новыми технологиями, такими как интеграция ИИ, Web3 и продвинутые фронтенд-фреймворки. Я всегда готов принять новые вызовы и расти как разработчик.',
    'about.experience': 'Лет опыта',
    'about.projects': 'Завершенных проектов',
    'about.clients': 'Довольных клиентов',
    'about.timeline': 'Временная шкала опыта',
    'about.personalInfo': 'Личная информация',
    'about.interests': 'Интересы и хобби',
    'about.values': 'Основные ценности',
    
    // Personal Info
    'about.age': 'Возраст',
    'about.location': 'Местоположение',
    'about.education': 'Образование',
    'about.languages': 'Языки',
    'about.ageValue': '14 лет',
    'about.locationValue': 'Ташкент, Узбекистан',
    'about.educationValue': 'Ученик 8 класса',
    'about.languagesValue': 'Узбекский, Русский, Английский',
    
    // Interests
    'about.interest1': '🎮 Игры и технологии',
    'about.interest2': '📚 Чтение технических блогов',
    'about.interest3': '🎵 Музыка и творческие искусства',
    'about.interest4': '⚽ Спорт и фитнес',
    'about.interest5': '🌍 Изучение новых культур',
    'about.interest6': '🎨 UI/UX дизайн',
    
    // Values
    'about.value1': '💡 Инновации',
    'about.value1Desc': 'Всегда ищу креативные решения',
    'about.value2': '🤝 Сотрудничество',
    'about.value2Desc': 'Работаем вместе для лучших результатов',
    'about.value3': '📈 Рост',
    'about.value3Desc': 'Непрерывное обучение и улучшение',
    'about.value4': '🎯 Качество',
    'about.value4Desc': 'Доставка превосходства в каждом проекте',
    
    // Experience Timeline
    'about.webDev': 'Веб-разработчик',
    'about.company1': 'Фриланс и Личные Проекты',
    'about.desc1': 'Разработка современных веб-приложений с использованием передовых технологий и фреймворков.',
    'about.student': 'Ученик 7 класса',
    'about.company2': 'Школа',
    'about.desc2': 'Я отличный ученик в школе и постоянно получаю высокие оценки. 😁',
    'about.itHouse': 'IT Студент',
    'about.company3': 'IT House - Будущее Здесь',
    'about.desc3': 'Соответствующие курсы: Кибербезопасность, Веб-разработка, SMM, Дизайн, Основы...',
    
    // Skills
    'skills.title': 'Мои навыки',
    'skills.frontend': 'Frontend Разработка',
    'skills.backend': 'Backend Разработка',
    'skills.education': '🏫 Образование',
    'skills.workExperience': '💼 Опыт работы',
    
    // Projects Section
    'projects.title': 'Мои проекты',
    'projects.description': 'Здесь представлены некоторые из моих последних проектов, которые демонстрируют мои навыки и страсть к веб-разработке.',
    'projects.viewDemo': 'Посмотреть проект',
    'projects.viewCode': 'Посмотреть код',
    'projects.github': 'Посетить мой GitHub',
    'projects.allProjects': 'Посмотреть все проекты',
    
    // Real Projects
    'projects.portfolio20': 'Портфолио 2.0',
    'projects.portfolio20Desc': 'Мой первый проект портфолио, созданный с HTML, CSS и JavaScript. Чистый и адаптивный дизайн, демонстрирующий мои ранние навыки разработки. 😎',
    'projects.figmaGroup': 'Групповой Проект Figma',
    'projects.figmaGroupDesc': 'Мой первый совместный проект, созданный с React. Работа в команде для создания современного веб-приложения. 😎',
    'projects.bookHome': 'Book Home',
    'projects.bookHomeDesc': 'Проект образовательной платформы, разработанный с моим учителем. Включает управление книгами и инструменты для чтения. 😁',
    'projects.portfolioTeacher': 'Портфолио Учителя',
    'projects.portfolioTeacherDesc': 'Профессиональный портфолио веб-сайт, созданный для моего учителя. Чистый дизайн с современными функциями. 👍',
    'projects.chatApp': 'Приложение Чата в Реальном Времени',
    'projects.chatAppDesc': 'Современное приложение чата с обменом сообщениями в реальном времени, аутентификацией пользователей и адаптивным дизайном.',
    'projects.elearning': 'Платформа Электронного Обучения',
    'projects.elearningDesc': 'Комплексная образовательная платформа с управлением курсами, отслеживанием прогресса и интерактивными инструментами обучения.',
    
    // Services Section
    'services.title': 'Услуги',
    'services.description': 'Я предлагаю комплексные услуги веб-разработки, чтобы помочь воплотить ваши идеи в жизнь с помощью современных технологий и лучших практик.',
    'services.webDev': 'Веб-разработка',
    'services.webDevDesc': 'Создание адаптивных и современных веб-приложений с использованием новейших технологий и фреймворков.',
    'services.responsive': 'Адаптивный дизайн',
    'services.responsiveDesc': 'Обеспечение идеального отображения и безупречной работы вашего сайта на всех устройствах и размерах экранов.',
    'services.seo': 'SEO оптимизация',
    'services.seoDesc': 'Оптимизация вашего сайта для лучшего рейтинга в поисковых системах, видимости и роста органического трафика.',
    'services.api': 'API интеграция',
    'services.apiDesc': 'Интеграция сторонних API и сервисов для улучшения функциональности и пользовательского опыта.',
    'services.uiux': 'UI/UX Дизайн',
    'services.uiuxDesc': 'Создание красивых и интуитивных пользовательских интерфейсов с современными принципами дизайна и пользовательским подходом.',
    'services.backend': 'Backend Разработка',
    'services.backendDesc': 'Создание надежных backend систем и API с использованием Node.js, баз данных и современных серверных технологий.',
    'services.cloud': 'Облачное Развертывание',
    'services.cloudDesc': 'Развертывание приложений на облачных платформах с CI/CD конвейерами, мониторингом и масштабируемостью.',
    'services.security': 'Безопасность и Тестирование',
    'services.securityDesc': 'Обеспечение безопасности и надежности приложений через комплексное тестирование и лучшие практики безопасности.',
    'services.cta': 'Готовы начать свой проект?',
    'services.ctaDesc': 'Давайте обсудим, как я могу помочь вам создать что-то потрясающее. Свяжитесь для бесплатной консультации и давайте воплотим ваши идеи в жизнь.',
    'services.ctaButton': 'Давайте работать вместе',
    
    // Contact Section
    'contact.title': 'Связаться со мной',
    'contact.description': 'Готовы начать свой следующий проект? Давайте работать вместе, чтобы создать что-то потрясающее!',
    'contact.name': 'Полное имя',
    'contact.email': 'Email адрес',
    'contact.message': 'Ваше сообщение',
    'contact.send': 'Отправить сообщение',
    'contact.success': 'Спасибо! Ваше сообщение было успешно отправлено. Я свяжусь с вами в ближайшее время!',
    'contact.error': 'Извините, произошла ошибка при отправке вашего сообщения. Пожалуйста, попробуйте еще раз или свяжитесь со мной напрямую.',
    'contact.connect': 'Давайте свяжемся',
    'contact.follow': 'Подписывайтесь в социальных сетях',
    'contact.sendMessage': 'Отправьте мне сообщение',
    'contact.namePlaceholder': 'Введите ваше полное имя',
    'contact.emailPlaceholder': 'ваш.email@example.com',
    'contact.messagePlaceholder': 'Расскажите мне о вашем проекте, идеях или как я могу вам помочь...',
    'contact.sending': 'Отправка сообщения...',
    'contact.info': 'Контактная информация',
    'contact.availability': 'Я доступен для фриланс работы и интересных проектов. Давайте создадим что-то великолепное вместе!',
    
    // Footer
    'footer.rights': 'Все права защищены. Сделано с ❤️',
    'footer.built': 'Создано с Next.js, Tailwind CSS, Framer Motion и большим количеством кофе ☕',
    'footer.quickLinks': 'Быстрые ссылки',
    'footer.social': 'Социальные сети',
    'footer.backToTop': 'Наверх',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
  const currentTranslations = translations[language];
  return currentTranslations[key as keyof typeof translations['en']] || key;
};

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};