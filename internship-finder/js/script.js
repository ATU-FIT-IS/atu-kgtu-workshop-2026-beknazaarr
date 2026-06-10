/* ============================================================
   InternHub — script.js
   Структура:
   1. Данные (вакансии, компании, навыки)
   2. Навигация между страницами
   3. Главная: анимация чисел, рендер карточек
   4. Каталог вакансий: фильтрация
   5. Компании
   6. Умный подбор
   7. Карта навыков
   8. Конструктор резюме
   9. Форма заявки
   10. Модальное окно
   11. Утилиты (тост, бургер)
   ============================================================ */

/* ============================================================
   1. ДАННЫЕ
   ============================================================ */

/** Массив вакансий */
const vacancies = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "Google",
      companyId: 1,
      city: "Алматы (Удалённо)",
      direction: "Frontend",
      type: "Оплачиваемая",
      format: "Удалённая",
      salary: "от 150 000 ₸",
      logo: "🔵",
      logoColor: "#4285F4",
      duration: "3 месяца",
      tags: ["React", "TypeScript", "Git"],
      description: "Google приглашает студентов пройти стажировку в команде разработки пользовательских интерфейсов. Вы будете работать над реальными продуктами, которыми пользуются миллионы людей.",
      requirements: ["Знание HTML, CSS, JavaScript", "Базовое понимание React", "Git и работа с командой", "Английский язык B1+"],
      posted: "2 дня назад",
    },
    {
      id: 2,
      title: "Backend Engineer Intern",
      company: "Microsoft",
      companyId: 2,
      city: "Нур-Султан",
      direction: "Backend",
      type: "Оплачиваемая",
      format: "Гибридная",
      salary: "от 200 000 ₸",
      logo: "🪟",
      logoColor: "#0078D4",
      duration: "6 месяцев",
      tags: ["Python", "Azure", "SQL"],
      description: "Стажировка в команде Azure — разработка облачных решений для корпоративных клиентов. Реальная работа над продуктовым кодом.",
      requirements: ["Python или C#", "Базы данных (SQL/NoSQL)", "REST API", "ООП"],
      posted: "3 дня назад",
    },
    {
      id: 3,
      title: "Data Science Intern",
      company: "Amazon",
      companyId: 3,
      city: "Удалённо",
      direction: "Data Science",
      type: "Оплачиваемая",
      format: "Удалённая",
      salary: "от 250 000 ₸",
      logo: "🟠",
      logoColor: "#FF9900",
      duration: "4 месяца",
      tags: ["Python", "ML", "Pandas"],
      description: "Анализируй данные о поведении пользователей Amazon и помогай строить рекомендательные алгоритмы мирового класса.",
      requirements: ["Python (Pandas, NumPy)", "Основы ML", "SQL", "Статистика"],
      posted: "1 день назад",
    },
    {
      id: 4,
      title: "UI/UX Designer Intern",
      company: "Spotify",
      companyId: 5,
      city: "Удалённо",
      direction: "UI/UX Design",
      type: "Оплачиваемая",
      format: "Удалённая",
      salary: "от 130 000 ₸",
      logo: "🟢",
      logoColor: "#1DB954",
      duration: "3 месяца",
      tags: ["Figma", "User Research", "Prototyping"],
      description: "Создавай дизайн интерфейсов для музыкальной платформы с аудиторией 600 млн пользователей.",
      requirements: ["Figma", "Основы UX", "Прототипирование", "Портфолио"],
      posted: "5 дней назад",
    },
    {
      id: 5,
      title: "Cybersecurity Analyst Intern",
      company: "Meta",
      companyId: 4,
      city: "Алматы",
      direction: "Cybersecurity",
      type: "Оплачиваемая",
      format: "Гибридная",
      salary: "от 180 000 ₸",
      logo: "🔷",
      logoColor: "#1877F2",
      duration: "4 месяца",
      tags: ["Linux", "Python", "SIEM"],
      description: "Присоединись к команде безопасности Meta и помогай защищать данные 3 миллиардов пользователей.",
      requirements: ["Основы сетевой безопасности", "Linux", "Python", "Анализ логов"],
      posted: "1 неделя назад",
    },
    {
      id: 6,
      title: "React Developer Intern",
      company: "Netflix",
      companyId: 6,
      city: "Удалённо",
      direction: "Frontend",
      type: "Оплачиваемая",
      format: "Удалённая",
      salary: "от 170 000 ₸",
      logo: "🔴",
      logoColor: "#E50914",
      duration: "3 месяца",
      tags: ["React", "CSS", "Performance"],
      description: "Разрабатывай высоконагруженные UI-компоненты для стримингового сервиса с 200+ млн подписчиков.",
      requirements: ["React", "JavaScript (ES6+)", "CSS Modules", "Производительность веба"],
      posted: "4 дня назад",
    },
    {
      id: 7,
      title: "ML Engineer Intern",
      company: "Google",
      companyId: 1,
      city: "Алматы (Удалённо)",
      direction: "Data Science",
      type: "Оплачиваемая",
      format: "Удалённая",
      salary: "от 300 000 ₸",
      logo: "🔵",
      logoColor: "#4285F4",
      duration: "6 месяцев",
      tags: ["TensorFlow", "Python", "ML"],
      description: "Работай над моделями машинного обучения в Google DeepMind. Стажировка для тех, кто хочет попасть в передовую AI-исследовательскую группу.",
      requirements: ["Python + TensorFlow/PyTorch", "Линейная алгебра", "Основы нейросетей", "Английский B2+"],
      posted: "2 недели назад",
    },
    {
      id: 8,
      title: "Full Stack Developer Intern",
      company: "Microsoft",
      companyId: 2,
      city: "Нур-Султан",
      direction: "Backend",
      type: "Оплачиваемая",
      format: "Гибридная",
      salary: "от 220 000 ₸",
      logo: "🪟",
      logoColor: "#0078D4",
      duration: "4 месяца",
      tags: ["Node.js", "React", "Azure"],
      description: "Full Stack разработка для продуктов Microsoft 365. Участие в code review, работа в Agile-команде.",
      requirements: ["JavaScript (Node.js / React)", "REST API", "Git", "Английский B1+"],
      posted: "3 дня назад",
    },
    {
      id: 9,
      title: "Penetration Tester Intern",
      company: "Amazon",
      companyId: 3,
      city: "Удалённо",
      direction: "Cybersecurity",
      type: "Удалённая",
      format: "Удалённая",
      salary: "от 160 000 ₸",
      logo: "🟠",
      logoColor: "#FF9900",
      duration: "3 месяца",
      tags: ["Kali Linux", "OWASP", "Burp Suite"],
      description: "Участвуй в пентестах инфраструктуры AWS. Найди уязвимости раньше, чем их найдут злоумышленники.",
      requirements: ["Kali Linux", "OWASP Top 10", "Основы сетевых протоколов", "CTF участие (плюс)"],
      posted: "5 дней назад",
    },
    {
      id: 10,
      title: "Mobile UI Designer Intern",
      company: "Meta",
      companyId: 4,
      city: "Удалённо",
      direction: "UI/UX Design",
      type: "Удалённая",
      format: "Удалённая",
      salary: "от 140 000 ₸",
      logo: "🔷",
      logoColor: "#1877F2",
      duration: "3 месяца",
      tags: ["Figma", "iOS Design", "Motion"],
      description: "Проектируй мобильные интерфейсы для Instagram и WhatsApp. Работа в дизайн-системе мирового масштаба.",
      requirements: ["Figma / Adobe XD", "Понимание iOS/Android Guideline", "Портфолио мобильных проектов"],
      posted: "1 неделя назад",
    },
  ];
  
  /** Массив компаний */
  const companies = [
    {
      id: 1,
      name: "Google",
      emoji: "🔵",
      color: "#4285F4",
      description: "Мировой лидер в поиске, облачных технологиях и искусственном интеллекте. Офисы в 50+ странах.",
      openings: 12,
      tags: ["Frontend", "Backend", "Data Science", "AI"],
    },
    {
      id: 2,
      name: "Microsoft",
      emoji: "🪟",
      color: "#0078D4",
      description: "Технологический гигант с продуктами Azure, Microsoft 365, GitHub и Xbox.",
      openings: 8,
      tags: ["Backend", "Cloud", "Full Stack"],
    },
    {
      id: 3,
      name: "Amazon",
      emoji: "🟠",
      color: "#FF9900",
      description: "Крупнейший e-commerce и облачный провайдер. AWS — самая популярная облачная платформа мира.",
      openings: 15,
      tags: ["Data Science", "Cybersecurity", "Backend"],
    },
    {
      id: 4,
      name: "Meta",
      emoji: "🔷",
      color: "#1877F2",
      description: "Компания, стоящая за Facebook, Instagram, WhatsApp. Работает над AR/VR будущим.",
      openings: 6,
      tags: ["UI/UX", "Cybersecurity", "Frontend"],
    },
    {
      id: 5,
      name: "Spotify",
      emoji: "🟢",
      color: "#1DB954",
      description: "Ведущий мировой стриминговый сервис. 600+ млн активных пользователей.",
      openings: 4,
      tags: ["UI/UX", "Frontend", "Data Science"],
    },
    {
      id: 6,
      name: "Netflix",
      emoji: "🔴",
      color: "#E50914",
      description: "Платформа видеостриминга #1 с 260+ млн подписчиков. Один из лучших работодателей в IT.",
      openings: 5,
      tags: ["Frontend", "Backend", "Data Science"],
    },
  ];
  
  /** Данные по навыкам */
  const skillsData = {
    Frontend: {
      icon: "🖥️",
      description: "Разработка пользовательских интерфейсов — то, что видит и с чем взаимодействует пользователь.",
      tracks: [
        {
          icon: "🏗️",
          title: "Основы веба",
          skills: [
            { name: "HTML5", level: "Must have", pct: 100 },
            { name: "CSS3 / Flexbox / Grid", level: "Must have", pct: 100 },
            { name: "JavaScript ES6+", level: "Must have", pct: 95 },
            { name: "Responsive Design", level: "Must have", pct: 90 },
          ],
        },
        {
          icon: "⚛️",
          title: "Фреймворки",
          skills: [
            { name: "React.js", level: "Важно", pct: 90 },
            { name: "TypeScript", level: "Важно", pct: 80 },
            { name: "Next.js", level: "Полезно", pct: 65 },
            { name: "Vue.js", level: "Полезно", pct: 55 },
          ],
        },
        {
          icon: "🛠️",
          title: "Инструменты",
          skills: [
            { name: "Git & GitHub", level: "Must have", pct: 95 },
            { name: "Figma (базово)", level: "Полезно", pct: 60 },
            { name: "Chrome DevTools", level: "Must have", pct: 85 },
            { name: "Webpack / Vite", level: "Полезно", pct: 55 },
          ],
        },
      ],
    },
    Backend: {
      icon: "⚙️",
      description: "Серверная логика, базы данных и API — невидимая часть, которая делает всё возможным.",
      tracks: [
        {
          icon: "🐍",
          title: "Языки",
          skills: [
            { name: "Python", level: "Must have", pct: 95 },
            { name: "SQL", level: "Must have", pct: 90 },
            { name: "Node.js", level: "Важно", pct: 75 },
            { name: "Java / Kotlin", level: "Полезно", pct: 55 },
          ],
        },
        {
          icon: "🔌",
          title: "Фреймворки и API",
          skills: [
            { name: "Django / FastAPI", level: "Важно", pct: 80 },
            { name: "REST API", level: "Must have", pct: 95 },
            { name: "GraphQL", level: "Полезно", pct: 50 },
            { name: "gRPC", level: "Продвинутый", pct: 35 },
          ],
        },
        {
          icon: "🗄️",
          title: "Базы данных",
          skills: [
            { name: "PostgreSQL", level: "Must have", pct: 90 },
            { name: "Redis", level: "Важно", pct: 65 },
            { name: "MongoDB", level: "Полезно", pct: 60 },
            { name: "Git", level: "Must have", pct: 95 },
          ],
        },
      ],
    },
    DataScience: {
      icon: "📊",
      description: "Анализ данных и машинное обучение для принятия умных решений.",
      tracks: [
        {
          icon: "🧮",
          title: "Математика",
          skills: [
            { name: "Линейная алгебра", level: "Must have", pct: 90 },
            { name: "Статистика", level: "Must have", pct: 90 },
            { name: "Теория вероятностей", level: "Важно", pct: 80 },
            { name: "Матан", level: "Полезно", pct: 60 },
          ],
        },
        {
          icon: "🐍",
          title: "Python & библиотеки",
          skills: [
            { name: "Python", level: "Must have", pct: 100 },
            { name: "Pandas & NumPy", level: "Must have", pct: 95 },
            { name: "Matplotlib / Seaborn", level: "Важно", pct: 80 },
            { name: "Scikit-learn", level: "Важно", pct: 85 },
          ],
        },
        {
          icon: "🤖",
          title: "ML & Deep Learning",
          skills: [
            { name: "Классический ML", level: "Must have", pct: 85 },
            { name: "TensorFlow / PyTorch", level: "Важно", pct: 70 },
            { name: "SQL", level: "Must have", pct: 90 },
            { name: "Jupyter Notebook", level: "Must have", pct: 95 },
          ],
        },
      ],
    },
    Cybersecurity: {
      icon: "🔐",
      description: "Защита систем, сетей и данных от кибератак.",
      tracks: [
        {
          icon: "🌐",
          title: "Сети и ОС",
          skills: [
            { name: "Linux (Bash)", level: "Must have", pct: 95 },
            { name: "Сетевые протоколы", level: "Must have", pct: 90 },
            { name: "Windows Server", level: "Важно", pct: 70 },
            { name: "Виртуализация (VMware)", level: "Полезно", pct: 65 },
          ],
        },
        {
          icon: "🔍",
          title: "Инструменты",
          skills: [
            { name: "Kali Linux / Parrot OS", level: "Must have", pct: 90 },
            { name: "Burp Suite", level: "Важно", pct: 80 },
            { name: "Wireshark", level: "Важно", pct: 75 },
            { name: "Metasploit", level: "Полезно", pct: 60 },
          ],
        },
        {
          icon: "⚔️",
          title: "Этичный хакинг",
          skills: [
            { name: "OWASP Top 10", level: "Must have", pct: 95 },
            { name: "Pentest методологии", level: "Важно", pct: 75 },
            { name: "CTF участие", level: "Рекомендуется", pct: 70 },
            { name: "Python для автоматизации", level: "Важно", pct: 80 },
          ],
        },
      ],
    },
    UX: {
      icon: "🎨",
      description: "Проектирование удобных и красивых интерфейсов.",
      tracks: [
        {
          icon: "🖌️",
          title: "Дизайн-инструменты",
          skills: [
            { name: "Figma", level: "Must have", pct: 100 },
            { name: "Adobe XD", level: "Полезно", pct: 55 },
            { name: "Sketch", level: "Полезно", pct: 45 },
            { name: "Protopie", level: "Полезно", pct: 50 },
          ],
        },
        {
          icon: "🧠",
          title: "UX-методы",
          skills: [
            { name: "User Research", level: "Must have", pct: 90 },
            { name: "Wireframing", level: "Must have", pct: 95 },
            { name: "Usability Testing", level: "Важно", pct: 80 },
            { name: "Design Thinking", level: "Важно", pct: 75 },
          ],
        },
        {
          icon: "🎯",
          title: "Прочее",
          skills: [
            { name: "Дизайн-системы", level: "Важно", pct: 70 },
            { name: "HTML/CSS (базово)", level: "Полезно", pct: 60 },
            { name: "Motion Design", level: "Бонус", pct: 45 },
            { name: "Портфолио (Behance)", level: "Must have", pct: 95 },
          ],
        },
      ],
    },
  };
  
  /* ============================================================
     2. НАВИГАЦИЯ МЕЖДУ СТРАНИЦАМИ
     ============================================================ */
  
  /**
   * Показывает нужную страницу, скрывая все остальные.
   * @param {string} pageId — идентификатор страницы
   */
  function showPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
    // Показываем нужную
    const target = document.getElementById('page-' + pageId);
    if (target) {
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  
    // Обновляем активную ссылку в навигации
    document.querySelectorAll('.nav__link').forEach(link => {
      link.classList.remove('active');
    });
  
    // Инициализируем страницу при первом открытии
    if (pageId === 'vacancies') initVacanciesPage();
    if (pageId === 'companies') initCompaniesPage();
    if (pageId === 'skills') initSkillsPage();
    if (pageId === 'apply') populateApplySelect();
  }
  
  /* ============================================================
     3. ГЛАВНАЯ СТРАНИЦА
     ============================================================ */
  
  /** Запускается при загрузке DOM */
  document.addEventListener('DOMContentLoaded', () => {
    renderHomeVacancies();
    renderHomeCompanies();
    initCounters();
    showPage('home');
    initSkillsPage(); // Подготавливаем данные навыков
  });
  
  /** Рендерим 4 вакансии на главной */
  function renderHomeVacancies() {
    const container = document.getElementById('homeVacanciesList');
    if (!container) return;
    const preview = vacancies.slice(0, 4);
    container.innerHTML = preview.map(v => buildVacancyCard(v)).join('');
  }
  
  /** Рендерим логотипы компаний на главной */
  function renderHomeCompanies() {
    const container = document.getElementById('homeCompaniesList');
    if (!container) return;
    container.innerHTML = companies.map(c => `
      <div class="company-logo-pill" onclick="showPage('companies')">
        <div class="company-logo-pill__icon" style="background:${c.color}">${c.emoji}</div>
        <span>${c.name}</span>
      </div>
    `).join('');
  }
  
  /** Анимация счётчиков в Hero stats */
  function initCounters() {
    const counters = document.querySelectorAll('.stat__num[data-target]');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
  
    counters.forEach(c => observer.observe(c));
  }
  
  /**
   * Плавно анимирует число от 0 до target.
   * @param {HTMLElement} el
   */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
  
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        el.textContent = target;
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current);
      }
    }, 16);
  }
  
  /** Поиск из Hero-блока */
  function doHeroSearch() {
    const query = document.getElementById('heroSearch').value.trim();
    if (query) {
      showPage('vacancies');
      // После показа страницы — ставим значение в поле поиска каталога
      setTimeout(() => {
        const input = document.getElementById('vacSearch');
        if (input) {
          input.value = query;
          filterVacancies();
        }
      }, 100);
    } else {
      showPage('vacancies');
    }
  }
  
  /** Устанавливает поисковый запрос из тега-быстрой-кнопки */
  function setSearch(query) {
    const input = document.getElementById('heroSearch');
    if (input) input.value = query;
    doHeroSearch();
  }
  
  /* ============================================================
     4. КАТАЛОГ ВАКАНСИЙ
     ============================================================ */
  
  /** Инициализация страницы вакансий */
  function initVacanciesPage() {
    filterVacancies();
  }
  
  /**
   * Создаёт HTML-разметку карточки вакансии.
   * @param {Object} v — объект вакансии
   * @returns {string} HTML-строка
   */
  function buildVacancyCard(v) {
    const typeClass = v.format === 'Удалённая' ? 'tag-pill--green'
      : v.format === 'Гибридная' ? 'tag-pill--orange'
      : 'tag-pill--cyan';
  
    return `
      <div class="vacancy-card" onclick="openVacancyModal(${v.id})">
        <div class="vacancy-card__top">
          <div class="vacancy-card__logo" style="background:${v.logoColor}20; color:${v.logoColor}">
            ${v.emoji || v.logo}
          </div>
          <div class="vacancy-card__info">
            <div class="vacancy-card__title">${v.title}</div>
            <div class="vacancy-card__company">${v.company}</div>
          </div>
        </div>
        <div class="vacancy-card__meta">
          <span>📍 ${v.city}</span>
          <span>⏱ ${v.duration}</span>
          <span>📅 ${v.posted}</span>
        </div>
        <div class="vacancy-card__tags">
          ${v.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          <span class="tag-pill ${typeClass}">${v.format}</span>
        </div>
        <div class="vacancy-card__footer">
          <span class="vacancy-card__salary">${v.salary}</span>
          <button class="btn btn--ghost btn--sm" onclick="event.stopPropagation(); openVacancyModal(${v.id})">
            Подробнее →
          </button>
        </div>
      </div>
    `;
  }
  
  /** Фильтрация и поиск вакансий */
  function filterVacancies() {
    const query = (document.getElementById('vacSearch')?.value || '').toLowerCase();
  
    // Получаем выбранные направления
    const dirChecks = document.querySelectorAll('#directionFilters input:checked');
    const selectedDirs = Array.from(dirChecks).map(c => c.value);
  
    // Получаем выбранные типы
    const typeChecks = document.querySelectorAll('#typeFilters input:checked');
    const selectedTypes = Array.from(typeChecks).map(c => c.value);
  
    const sort = document.getElementById('vacSort')?.value || 'new';
  
    let filtered = vacancies.filter(v => {
      const matchQuery = !query
        || v.title.toLowerCase().includes(query)
        || v.company.toLowerCase().includes(query)
        || v.tags.some(t => t.toLowerCase().includes(query));
  
      const matchDir = selectedDirs.includes(v.direction);
      const matchType = selectedTypes.includes(v.format) || selectedTypes.includes(v.type);
  
      return matchQuery && matchDir && matchType;
    });
  
    // Сортировка
    if (sort === 'alpha') {
      filtered.sort((a, b) => a.title.localeCompare(b.title, 'ru'));
    }
  
    const container = document.getElementById('vacanciesList');
    const countEl = document.getElementById('vacCount');
    const emptyEl = document.getElementById('vacEmptyState');
  
    if (!container) return;
  
    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyEl) emptyEl.style.display = 'block';
      if (countEl) countEl.textContent = 'Ничего не найдено';
    } else {
      if (emptyEl) emptyEl.style.display = 'none';
      container.innerHTML = filtered.map(v => buildVacancyCard(v)).join('');
      if (countEl) countEl.textContent = `Найдено: ${filtered.length} вакансий`;
    }
  }
  
  /** Сброс всех фильтров */
  function resetFilters() {
    document.querySelectorAll('#directionFilters input').forEach(i => i.checked = true);
    document.querySelectorAll('#typeFilters input').forEach(i => i.checked = true);
    const s = document.getElementById('vacSearch');
    if (s) s.value = '';
    filterVacancies();
  }
  
  /* ============================================================
     5. СТРАНИЦА КОМПАНИЙ
     ============================================================ */
  
  /** Инициализация страницы компаний */
  function initCompaniesPage() {
    const container = document.getElementById('companiesList');
    if (!container || container.children.length > 0) return;
  
    container.innerHTML = companies.map(c => `
      <div class="company-card" onclick="showCompanyVacancies(${c.id})">
        <div class="company-card__logo" style="background:${c.color}">${c.emoji}</div>
        <div class="company-card__name">${c.name}</div>
        <div class="company-card__desc">${c.description}</div>
        <span class="company-card__count">🚀 ${c.openings} открытых стажировок</span>
        <div class="company-card__tags">
          ${c.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <button class="btn btn--ghost btn--sm" style="margin-top:8px">
          Смотреть вакансии →
        </button>
      </div>
    `).join('');
  }
  
  /**
   * Переходит в каталог и фильтрует по компании.
   * @param {number} companyId
   */
  function showCompanyVacancies(companyId) {
    const company = companies.find(c => c.id === companyId);
    if (!company) return;
    showPage('vacancies');
    setTimeout(() => {
      const input = document.getElementById('vacSearch');
      if (input) {
        input.value = company.name;
        filterVacancies();
      }
    }, 100);
  }
  
  /* ============================================================
     6. УМНЫЙ ПОДБОР ВАКАНСИЙ
     ============================================================ */
  
  /**
   * Подбирает вакансии на основе заполненной формы.
   * @param {Event} e — событие отправки формы
   */
  function matchVacancies(e) {
    e.preventDefault();
  
    const sphere  = document.getElementById('matchSphere').value;
    const level   = document.getElementById('matchLevel').value;
    const skills  = document.getElementById('matchSkills').value.toLowerCase();
  
    const resultsEl = document.getElementById('matcherResults');
  
    // Фильтрация по направлению
    let matched = vacancies.filter(v => v.direction === sphere);
  
    // Рассчитываем условный "score" совпадения по навыкам
    matched = matched.map(v => {
      let score = 60; // базовый балл
      v.tags.forEach(tag => {
        if (skills.includes(tag.toLowerCase())) score += 10;
      });
      if (level === 'junior')  score += 5;
      if (level === 'middle')  score += 15;
      return { ...v, score: Math.min(score, 99) };
    }).sort((a, b) => b.score - a.score);
  
    if (matched.length === 0) {
      resultsEl.innerHTML = `
        <div class="matcher-placeholder">
          <span>😔</span>
          <p>По твоим параметрам пока нет вакансий. Попробуй изменить направление.</p>
        </div>`;
      return;
    }
  
    resultsEl.innerHTML = `
      <div class="match-header">🎯 Подобрано ${matched.length} стажировок для тебя</div>
      <div class="matcher-results-grid">
        ${matched.map(v => `
          <div class="vacancy-card" onclick="openVacancyModal(${v.id})">
            <div class="vacancy-card__top">
              <div class="vacancy-card__logo" style="background:${v.logoColor}20; color:${v.logoColor}">
                ${v.logo}
              </div>
              <div class="vacancy-card__info">
                <div class="vacancy-card__title">${v.title}</div>
                <div class="vacancy-card__company">${v.company}</div>
              </div>
              <span class="match-score">✓ ${v.score}% совпадение</span>
            </div>
            <div class="vacancy-card__meta">
              <span>📍 ${v.city}</span>
              <span>💰 ${v.salary}</span>
            </div>
            <div class="vacancy-card__tags">
              ${v.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  /* ============================================================
     7. КАРТА НАВЫКОВ
     ============================================================ */
  
  /** Инициализация страницы навыков (показываем Frontend по умолчанию) */
  function initSkillsPage() {
    showSkills('Frontend', document.querySelector('.skills-tab'));
  }
  
  /**
   * Рендерит блок навыков для выбранного направления.
   * @param {string} key — ключ из skillsData
   * @param {HTMLElement} btn — нажатая кнопка-таб
   */
  function showSkills(key, btn) {
    // Переключаем активный таб
    if (btn) {
      document.querySelectorAll('.skills-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  
    const data = skillsData[key];
    const container = document.getElementById('skillsContent');
    if (!container || !data) return;
  
    container.innerHTML = `
      <p style="color:var(--clr-text-muted); margin-bottom:28px; font-size:0.95rem">${data.description}</p>
      <div class="skills-grid">
        ${data.tracks.map(track => `
          <div class="skill-track">
            <div class="skill-track__icon">${track.icon}</div>
            <div class="skill-track__title">${track.title}</div>
            <div class="skill-items">
              ${track.skills.map(s => `
                <div class="skill-item">
                  <span class="skill-item__name">${s.name}</span>
                  <div class="skill-item__bar-wrap">
                    <div class="skill-item__bar" style="width: 0%" data-pct="${s.pct}"></div>
                  </div>
                  <span class="skill-item__level">${s.level}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  
    // Анимируем полосы прогресса после рендера
    setTimeout(() => {
      container.querySelectorAll('.skill-item__bar').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }, 50);
  }
  
  /* ============================================================
     8. КОНСТРУКТОР РЕЗЮМЕ
     ============================================================ */
  
  /** Обновляет предпросмотр резюме в реальном времени */
  function updateResume() {
    const get = id => document.getElementById(id)?.value.trim() || '';
  
    const firstName  = get('rFirstName');
    const lastName   = get('rLastName');
    const position   = get('rPosition');
    const email      = get('rEmail');
    const phone      = get('rPhone');
    const city       = get('rCity');
    const university = get('rUniversity');
    const spec       = get('rSpec');
    const year       = get('rYear');
    const skills     = get('rSkills');
    const langs      = get('rLangs');
    const about      = get('rAbout');
  
    const preview = document.getElementById('resumePreview');
    if (!preview) return;
  
    // Если ничего не заполнено — показываем заглушку
    const hasContent = firstName || lastName || email || skills;
    if (!hasContent) {
      preview.innerHTML = `
        <div class="resume-empty">
          <span>📄</span>
          <p>Начни заполнять форму — резюме появится здесь</p>
        </div>
      `;
      return;
    }
  
    // Формируем навыки как теги
    const skillTags = skills
      ? skills.split(',').map(s => `<span class="cv__skill-tag">${s.trim()}</span>`).join('')
      : '';
  
    const langTags = langs
      ? langs.split(',').map(s => `<span class="cv__skill-tag">${s.trim()}</span>`).join('')
      : '';
  
    preview.innerHTML = `
      <div class="cv">
        <div class="cv__header">
          <div class="cv__name">${firstName || 'Имя'} ${lastName || 'Фамилия'}</div>
          ${position ? `<div class="cv__position">${position}</div>` : ''}
          <div class="cv__contacts">
            ${email  ? `<span>✉️ ${email}</span>` : ''}
            ${phone  ? `<span>📞 ${phone}</span>` : ''}
            ${city   ? `<span>📍 ${city}</span>` : ''}
          </div>
        </div>
        <div class="cv__body">
          ${about ? `
            <div>
              <div class="cv__section-title">О себе</div>
              <div class="cv__about">${about}</div>
            </div>
          ` : ''}
          ${university ? `
            <div>
              <div class="cv__section-title">Образование</div>
              <div class="cv__edu-name">${university}</div>
              ${spec ? `<div class="cv__edu-spec">${spec}${year ? `, ${year}` : ''}</div>` : ''}
            </div>
          ` : ''}
          ${skills ? `
            <div>
              <div class="cv__section-title">Технические навыки</div>
              <div class="cv__skills-wrap">${skillTags}</div>
            </div>
          ` : ''}
          ${langs ? `
            <div>
              <div class="cv__section-title">Языки</div>
              <div class="cv__skills-wrap">${langTags}</div>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }
  
  /** Псевдо-печать резюме (открывает диалог печати браузера) */
  function printResume() {
    const content = document.getElementById('resumePreview').innerHTML;
    if (content.includes('resume-empty')) {
      showToast('⚠️ Сначала заполни форму резюме');
      return;
    }
    const win = window.open('', '_blank');
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Резюме — InternHub</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
        <style>
          body { margin: 0; }
          @media print { @page { margin: 0; } }
        </style>
      </head>
      <body>${content}</body>
      </html>
    `);
    win.document.close();
    setTimeout(() => win.print(), 400);
  }
  
  /* ============================================================
     9. ФОРМА ЗАЯВКИ
     ============================================================ */
  
  /** Заполняет select вакансий в форме заявки */
  function populateApplySelect() {
    const sel = document.getElementById('apVacancy');
    if (!sel || sel.options.length > 1) return; // Уже заполнен
    vacancies.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = `${v.title} — ${v.company}`;
      sel.appendChild(opt);
    });
  }
  
  /**
   * Обрабатывает отправку заявки.
   * @param {Event} e
   */
  function submitApplication(e) {
    e.preventDefault();
  
    const name    = document.getElementById('apName').value.trim();
    const email   = document.getElementById('apEmail').value.trim();
    const vacancy = document.getElementById('apVacancy');
    const vacName = vacancy.options[vacancy.selectedIndex]?.text || '';
  
    // Показываем уведомление об успехе
    showToast(`🎉 Заявка успешно отправлена! Ожидай ответа на ${email}`);
  
    // Сбрасываем форму
    document.getElementById('applyForm').reset();
  
    // Прокрутка вверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  /* ============================================================
     10. МОДАЛЬНОЕ ОКНО (детали вакансии)
     ============================================================ */
  
  /**
   * Открывает модальное окно с деталями вакансии.
   * @param {number} id — id вакансии
   */
  function openVacancyModal(id) {
    const v = vacancies.find(v => v.id === id);
    if (!v) return;
  
    const body = document.getElementById('modalBody');
    body.innerHTML = `
      <div class="modal__logo" style="background:${v.logoColor}20; color:${v.logoColor}">${v.logo}</div>
      <div class="modal__title">${v.title}</div>
      <div class="modal__company">${v.company} · ${v.city}</div>
  
      <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px">
        <span class="tag-pill">${v.direction}</span>
        <span class="tag-pill tag-pill--green">${v.format}</span>
        <span class="tag-pill tag-pill--orange">⏱ ${v.duration}</span>
      </div>
  
      <div class="modal__desc">${v.description}</div>
  
      <div class="modal__req-title">Требования:</div>
      <ul class="modal__req-list">
        ${v.requirements.map(r => `<li>${r}</li>`).join('')}
      </ul>
  
      <div style="font-size:0.9rem; color:var(--clr-text-muted); margin-bottom:20px">
        💰 Зарплата: <strong style="color:var(--clr-success)">${v.salary}</strong>
        &nbsp;·&nbsp; 📅 Опубликовано: ${v.posted}
      </div>
  
      <div class="modal__actions">
        <button class="btn btn--primary" onclick="closeModal(); showPage('apply'); prefillApply(${v.id})">
          📨 Подать заявку
        </button>
        <button class="btn btn--ghost" onclick="closeModal()">Закрыть</button>
      </div>
    `;
  
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  
  /** Закрывает модальное окно */
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }
  
  /**
   * Предзаполняет select в форме заявки.
   * @param {number} vacancyId
   */
  function prefillApply(vacancyId) {
    populateApplySelect();
    setTimeout(() => {
      const sel = document.getElementById('apVacancy');
      if (sel) sel.value = vacancyId;
    }, 100);
  }
  
  // Закрытие по клавише Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
  
  /* ============================================================
     11. УТИЛИТЫ
     ============================================================ */
  
  /**
   * Показывает тост-уведомление.
   * @param {string} message
   * @param {number} duration — длительность в мс
   */
  function showToast(message, duration = 3500) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), duration);
  }
  
  /** Переключает мобильное меню */
  document.getElementById('burgerBtn')?.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
  });
  
  /** Закрывает мобильное меню */
  function closeMobileMenu() {
    document.getElementById('mobileMenu')?.classList.remove('open');
  }
  
  /** Закрытие меню при клике вне него */
  document.addEventListener('click', e => {
    const menu = document.getElementById('mobileMenu');
    const btn  = document.getElementById('burgerBtn');
    if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
  
  /** Подсветка активной ссылки в шапке при прокрутке (для SPA) */
  function updateActiveNav(pageId) {
    const map = {
      vacancies: 0,
      companies: 1,
      matcher:   2,
      skills:    3,
      resume:    4,
    };
    const links = document.querySelectorAll('.nav__link');
    links.forEach(l => l.classList.remove('active'));
    if (map[pageId] !== undefined) {
      links[map[pageId]]?.classList.add('active');
    }
  }
  
  // Патчим showPage чтобы добавить обновление nav
  const _origShowPage = showPage;
  window.showPage = function(pageId) {
    _origShowPage(pageId);
    updateActiveNav(pageId);
  };