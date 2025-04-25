const projects = {
    "miquizz": {
        title: "Mi'Quizz",
        image: "assets/project1.png",
        description: "Une application mobile de quiz scolaire pensée pour les lycéens. Elle propose des questions personnalisées selon la classe et la série (2nde, 1ère L/S, Terminale L/S), avec un chrono, des animations, un suivi de progression, des recommandations intelligentes, et une touche de gamification (badges, classements).",
        tech: ["Flutter", "Dart", "SQLite", "Lottie", "Animations"]
    },
    "castaway": {
        title: "CAST AWAY",
        image: "assets/project2.jpg",
        description: "Un jeu 2D pixelisé inspiré de Minecraft, où l'on incarne un naufragé sur une île mystérieuse. Le joueur explore, construit, récolte, et tente de survivre dans un environnement hostile. Univers rétro, ambiance pixel art, gameplay immersif.",
        tech: ["Unity", "C#", "Pixel Art", "Animation 2D"]
    },
    "lovescreen": {
        title: "LoveScreen",
        image: "assets/project3.webp",
        description: "Une app romantique et interactive, créée pour impressionner. Fond sonore doux, animations Lottie, authentification par code secret, splash screen animé, transitions fluides et esthétique ultra sensorielle. Pensée comme une déclaration d’amour digitale.",
        tech: ["Flutter", "Lottie", "SQLite", "Animations", "Audio"]
    }
};

function getProjectKeyFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("projet");
}

function renderProjectDetails(projectKey) {
    const project = projects[projectKey];

    if (!project) {
        document.getElementById("project-details").innerHTML = `<p>Projet introuvable.</p>`;
        return;
    }

    const html = `
      <h1 class="project-title">${project.title}</h1>
      <img src="${project.image}" alt="${project.title}" class="project-image" />
      <p class="project-description">${project.description}</p>
      <div class="tech-list">
        ${project.tech.map(t => `<span class="tech-item">${t}</span>`).join("")}
      </div>
    `;

    document.getElementById("project-details").innerHTML = html;
}

const projectKey = getProjectKeyFromURL();
renderProjectDetails(projectKey);
