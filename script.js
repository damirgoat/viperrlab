const filterSelect = document.getElementById('filter-area');
const projectList = document.getElementById('project-list');

const projects = [
    { title: "Прогнозирование заболеваний", area: "медицина", description: "Использование машинного обучения для ранней диагностики заболеваний на основе медицинских данных.", image: "/../img/1.webp" },
    { title: "Автоматизация банковских операций", area: "финансы", description: "Разработка интеллектуальных систем для автоматизации психологического анализа клиентов банка.", image: "/../img/2.jpg" },
    { title: "Умные фабрики", area: "производство", description: "Внедрение IoT в производственные процессы для оптимизации расходы и повышения качества.", image: "/../img/3.webp" },
    { title: "Индивидуальное обучение", area: "образование", description: "Создание системы IQ, которая подстраивается под стиль и скорость обучения учащихся.", image: "/../img/4.jpg" },
    { title: "Система безопасности для предприятий", area: "безопасность", description: "Разработка AI систем для анализа угроз и предотвращения кибератак.", image: "/../img/5.webp" },

    { title: "Мониторинг состояния окружающей среды", area: "экология", description: "Применение ИИ для анализа экологических данных и прогноза изменений экосистем.", image: "/../img/6.webp" },
    { title: "Анализ больших данных для бизнеса", area: "data-science", description: "Использование методов машинного обучения для превращения данных в стратегические решения.", image: "/../img/7.webp" },
    
    
];

function displayProjects(filteredProjects) {
    projectList.innerHTML = ''; 

    filteredProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('research-item');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            <a href="#" class="btn">Подробнее</a>
        `;
        projectList.appendChild(projectDiv);
    });
}

filterSelect.addEventListener('change', () => {
    const selectedArea = filterSelect.value;
    const filteredProjects = selectedArea === '' ? projects : projects.filter(project => project.area === selectedArea);
    displayProjects(filteredProjects);
});


displayProjects(projects);


