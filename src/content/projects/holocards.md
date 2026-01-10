---
slug: "holocards"
date: 2021-10-01
showcase: true
category: "Professional"
type: "production"
tech: ["Unity", "Photon PUN", "C#", "Multiplayer Architecture", "Open World"]
metrics: 
  client: "Cosmo Flakes"
  platform: "Android / iOS"
  gameplay: "Open World Hub"
  role: "Multiplayer Architect"

# MÍDIA
cover_image: "/assets/projects/holocards/cover.png"
video_url: "https://www.youtube.com/embed/SlQCFw6fNQc"

# INTERNACIONALIZAÇÃO (i18n)
i18n:
  en:
    title: "Holocards"
    subtitle: "Open World & Multiplayer Infrastructure"
    description: "An open-world experience in the Cyberverse. I architected the multiplayer infrastructure connecting the city hub and minigames."
    
    my_role_title: "ROLE & IMPACT"
    my_role_summary: |
      As the **Multiplayer Architect**, my focus was on the **Network Infrastructure Stability**. I designed the system that manages Lobbies, Rooms, and player instantiation within the "Cyberverse" open world.

      I implemented the **core replication logic** using Photon PUN, ensuring that players could see each other, chat, and transition seamlessly between the City Hub and the various minigame instances (like Obstacle Racing) without connection drops.

    overview_title: "Technical Overview"
    overview_text: |
      **Holocards** is a 3D open-world game where robotic beings inhabit a technological city. The project features a persistent hub where players gather before entering competitive matches.

      The technical challenge was managing the **state synchronization** of dozens of avatars in a mobile environment. I structured the Photon network logic to handle:
      1. **Lobby Management:** Efficient matchmaking and room creation.
      2. **Basic State Replication:** Synchronizing position and rotation for the open world and racing modes.
    key_features:
      - title: "Photon Infrastructure"
        text: "Implemented the core connection logic, including Lobby management, Room creation, and player spawning."
      - title: "Open World Sync"
        text: "Managed the synchronization of player avatars (movement/animation) within the main city hub."
      - title: "Session Stability"
        text: "Ensured robust connection handling for mobile networks, managing disconnects and rejoins."
      - title: "Mobile Optimization"
        text: "Optimized network traffic (bandwidth usage) to maintain performance on Android/iOS devices."

  pt:
    title: "Holocards"
    subtitle: "Infraestrutura Multiplayer Mundo Aberto"
    description: "Uma experiência de mundo aberto no Cyberverso. Arquitetei a infraestrutura multiplayer conectando o hub da cidade e os minigames."
    
    my_role_title: "ATUAÇÃO E IMPACTO"
    my_role_summary: |
      Como **Arquiteto Multiplayer**, meu foco foi na **Estabilidade da Infraestrutura de Rede**. Projetei o sistema que gerencia Lobbies, Salas e a instanciação de jogadores dentro do mundo aberto do "Cyberverso".

      Implementei a **lógica central de replicação** usando Photon PUN, garantindo que os jogadores pudessem se ver, interagir e transitar fluidamente entre o Hub da Cidade e as instâncias de minigames (como a Corrida de Obstáculos) sem quedas de conexão.

    overview_title: "Visão Geral Técnica"
    overview_text: |
      **Holocards** é um jogo 3D de mundo aberto onde seres robóticos habitam uma cidade tecnológica. O projeto apresenta um hub persistente onde os jogadores se reúnem antes de entrar em partidas competitivas.

      O desafio técnico foi gerenciar a **sincronização de estado** de dezenas de avatares em um ambiente mobile. Estruturei a lógica de rede do Photon para lidar com:
      1. **Gerenciamento de Lobby:** Matchmaking eficiente e criação de salas.
      2. **Replicação Básica de Estado:** Sincronização de posição e rotação para o mundo aberto e modos de corrida.
    key_features:
      - title: "Infraestrutura Photon"
        text: "Implementei a lógica central de conexão, incluindo gerenciamento de Lobbies, criação de Salas e spawn de jogadores."
      - title: "Sincronização de Mundo Aberto"
        text: "Gerenciei a sincronização dos avatares dos jogadores (movimento/animação) dentro do hub principal da cidade."
      - title: "Estabilidade de Sessão"
        text: "Garanti tratamento robusto de conexão para redes móveis, gerenciando desconexões e reconexões."
      - title: "Otimização Mobile"
        text: "Otimizei o tráfego de rede (uso de banda) para manter a performance em dispositivos Android/iOS."
---