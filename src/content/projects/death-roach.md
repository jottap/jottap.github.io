---
slug: "death-roach"
date: 2023-08-15
showcase: true
category: "Game Jam"
type: "demos"
tech: ["Unity", "Photon PUN", "WebGL", "Multiplayer", "Arena Shooter"]
metrics: 
  event: "Game Jam Entry"
  genre: "PvP Arena"
  team: "Collaborative Squad"
  role: "Multiplayer Engineer"

# MÍDIA
cover_image: "/assets/projects/death-roach/cover.png"

gallery:
  - "/assets/projects/death-roach/death-roach-01.png" 
  - "/assets/projects/death-roach/death-roach-02.png" 
  - "/assets/projects/death-roach/death-roach-03.png" 
  - "/assets/projects/death-roach/death-roach-04.png" 
  - "/assets/projects/death-roach/death-roach-05.png" 
  - "/assets/projects/death-roach/death-roach-06.png" 
  - "/assets/projects/death-roach/death-roach-07.png"

# LINKS
store_links:
  web: "https://jottap.itch.io/death-roach"

# INTERNACIONALIZAÇÃO (i18n)
i18n:
  en:
    title: "Death Roach"
    subtitle: "Multiplayer Survival Arena"
    description: "Survive the kitchen, crush the weak. A chaotic multiplayer arena developed during a Game Jam where cockroaches fight for dominance."
    
    my_role_title: "ROLE & IMPACT"
    my_role_summary: |
      In this collaborative Game Jam effort, I took ownership of the **Multiplayer Lifecycle**. My main responsibility was ensuring players could connect, play, and compete without issues.
      
      I built the entire **Lobby System** from scratch (Room creation, Player listing) and implemented the **Core Game Loop synchronization**, managing the state machine that handles the match start, real-time ranking updates, and the "Win/Loss" conditions.

    overview_title: "Technical Overview"
    overview_text: |
      **Death Roach** is a fast-paced shooter set in a dirty kitchen. The core mechanic involves collecting sugar to grow physically larger and stronger.

      The main technical challenge was the **Game Loop Architecture**. I implemented the network logic to synchronize the **Leaderboard** in real-time (sorting players by score/size) and ensured that the "Growth Mechanic" (scaling colliders and meshes) replicated correctly across all clients to maintain fair hitboxes.
    key_features:
      - title: "Lobby Architecture"
        text: "Developed the pre-game UI and logic for room creation, player joining, and character readiness."
      - title: "Core Loop Sync"
        text: "Managed the centralized game state, handling match timers, spawn points, and end-game triggers."
      - title: "Real-Time Leaderboard"
        text: "Implemented a networked sorting algorithm to display the top cockroaches live during gameplay."
      - title: "Rapid Prototyping"
        text: "Delivered a fully functional multiplayer networking stack within the tight Game Jam timeframe."

  pt:
    title: "Death Roach"
    subtitle: "Arena de Sobrevivência Multiplayer"
    description: "Sobreviva à cozinha, esmague os fracos. Uma arena multiplayer caótica desenvolvida em Game Jam onde baratas lutam por dominância."
    
    my_role_title: "ATUAÇÃO E IMPACTO"
    my_role_summary: |
      Neste esforço colaborativo de Game Jam, assumi a responsabilidade pelo **Ciclo de Vida Multiplayer**. Minha principal função foi garantir que os jogadores pudessem se conectar, jogar e competir sem problemas.
      
      Construí todo o **Sistema de Lobby** do zero (Criação de salas, Listagem de jogadores) e implementei a sincronização do **Loop Central do Jogo**, gerenciando a máquina de estados que controla o início da partida, atualizações de ranking em tempo real e as condições de vitória/derrota.

    overview_title: "Visão Geral Técnica"
    overview_text: |
      **Death Roach** é um shooter frenético ambientado em uma cozinha suja. A mecânica central envolve coletar açúcar para crescer fisicamente e ficar mais forte.

      O principal desafio técnico foi a **Arquitetura do Game Loop**. Implementei a lógica de rede para sincronizar o **Ranking (Leaderboard)** em tempo real (ordenando jogadores por pontuação/tamanho) e garanti que a "Mecânica de Crescimento" (escalar colliders e meshes) fosse replicada corretamente em todos os clientes para manter hitboxes justos.
    key_features:
      - title: "Arquitetura de Lobby"
        text: "Desenvolvi a UI e lógica pré-jogo para criação de salas, entrada de jogadores e status de 'pronto'."
      - title: "Sincronização do Core Loop"
        text: "Gerenciei o estado central do jogo, lidando com cronômetros de partida, pontos de spawn e gatilhos de fim de jogo."
      - title: "Ranking em Tempo Real"
        text: "Implementei um algoritmo de ordenação em rede para exibir as melhores baratas ao vivo durante o gameplay."
      - title: "Prototipagem Rápida"
        text: "Entreguei uma stack de rede multiplayer totalmente funcional dentro do prazo apertado da Game Jam."
---