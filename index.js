const artifacts = [
    {
        name: "Movie Recommender System",
        field: "ML / NLP",
        metric: "Cosine Similarity",
        desc: "Engineered a content-based filtering system using TF-IDF vectorization to map plot similarities across 5,000+ titles.",
        link: "https://github.com/aansu18"
    },
    {
        name: "Laptop Price Predictor",
        field: "Regression Analysis",
        metric: "R²: 0.89",
        desc: "Developed a Random Forest model to estimate hardware pricing by cleaning and encoding hardware specifications.",
        link: "https://github.com/aansu18"
    }
];

const projectList = document.getElementById('project-list');

artifacts.forEach(item => {
    projectList.innerHTML += `
        <div class="project-card">
            <div style="display:flex; justify-content:space-between; margin-bottom: 15px;">
                <span style="color:var(--accent); font-size: 0.7rem; border: 1px solid var(--accent); padding: 2px 8px;">${item.field}</span>
                <span style="color:var(--text-secondary); font-size: 0.7rem;">${item.metric}</span>
            </div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <a href="${item.link}" target="_blank" style="color:white; text-decoration:none; font-weight:bold; font-size:0.8rem; margin-top:15px; display:inline-block;">EXPLORE SOURCE ↗</a>
        </div>
    `;
});