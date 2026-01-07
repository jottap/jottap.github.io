export const aboutCardsData = {
    en: [
        {
            title: "Architecture & Tooling",
            desc: "Designing modular systems, UPM packages, and custom editor tools for scalable development.",
            icon: "architecture"
        },
        {
            title: "Tech Leadership",
            desc: "Defining technical vision and managing delivery for complex Enterprise & Game projects.",
            icon: "leadership"
        },
        {
            title: "XR & Immersive Tech",
            desc: "Building high-performance experiences multiplataformas WebGL, Mobile, VR and AR.",
            icon: "monitor"
        }
    ],
    pt: [
        {
            title: "Arquitetura e Ferramentas",
            desc: "Criando sistemas modulares, pacotes UPM e ferramentas de editor para desenvolvimento escalável.",
            icon: "architecture"
        },
        {
            title: "Liderança Técnica",
            desc: "Definindo visão técnica e gerenciando entregas de projetos complexos Enterprise e Games.",
            icon: "leadership"
        },
        {
            title: "XR e Tecnologias Imersivas",
            desc: "Construindo experiências de alta performance multiplataformas WebGL, Mobile, VR e AR.",
            icon: "monitor"
        }
    ]
};

export function getAboutCards(lang: keyof typeof aboutCardsData) {
    return aboutCardsData[lang] || aboutCardsData.en;
}