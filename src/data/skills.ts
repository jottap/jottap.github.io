export const skillsData = {
    en: {
        core: {
            title: "Core Stack & Tooling",
            list: [
                "Unity & C# (.NET)",
                "Addressables & Memory Mgmt",
                "UPM Modular Architecture",
                "Editor Tooling / UI Toolkit",
                "XR Interaction (VR/AR)",
            ],
        },
        arch: {
            title: "Architecture & Netcode",
            list: [
                "Clean Architecture / SOLID",
                "Multiplayer (Photon/Colyseus)",
                "API Integration (AWS/Azure)",
                "Design Patterns",
                "Performance Profiling",
            ],
        },
        lead: {
            title: "Leadership & Strategy",
            list: [
                "Team Development",
                "Code Review Standards",
                "Technical Hiring / Sourcing",
                "CI/CD & DevOps Culture",
                "Agile Methodologies",
            ],
        },
    },
    pt: {
        core: {
            title: "Stack Principal",
            list: [
                "Unity & C# (.NET)",
                "Addressables & Gestão de Memória",
                "Arquitetura Modular (UPM)",
                "Editor Tooling / UI Toolkit",
                "XR Interaction (VR/AR)",
            ],
        },
        arch: {
            title: "Arquitetura & Netcode",
            list: [
                "Clean Architecture / SOLID",
                "Multiplayer (Photon/Colyseus)",
                "Integração de APIs (AWS/Azure)",
                "Design Patterns",
                "Profiling & Performance",
            ],
        },
        lead: {
            title: "Liderança & Estratégia",
            list: [
                "Desenvolvimento de Equipe",
                "Padrões de Code Review",
                "Contratação Técnica",
                "Cultura DevOps & CI/CD",
                "Metodologias Ágeis",
            ],
        },
    },
};

export function getSkillsData(lang: keyof typeof skillsData) {
    return skillsData[lang] || skillsData.en;
}