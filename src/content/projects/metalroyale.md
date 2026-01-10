---
slug: "metal-royale"
date: 2019-06-22
showcase: true
category: "Game Jam"
type: "labs"
tech: ["Unity", "WebGL", "Photon", "Multiplayer", "C#"]
metrics: 
  event: "Extra Credits Jam #4"
  duration: "72 Hours"
  multiplayer: "Photon (PUN)"
  platform: "WebGL / Browser"
  architecture: "Client-Hosted (PUN)"

# MIDIA
cover_image: "/assets/projects/metalroyale/metalroyale_intro.gif"

store_links:
  web: "https://jottap.itch.io/metalroyale" 

gallery:
  - "/assets/projects/metalroyale/metalroyale_battle.png"
  - "/assets/projects/metalroyale/metalroyale_menu.png"

# (i18n)
i18n:
  en:
    title: "Metal Royale"
    subtitle: "Musical Battle Royale (72h Jam)"
    description: "A chaotic multiplayer arena brawler developed in just 72 hours, where players use guitar riffs to knock opponents off the stage."
    overview_title: "Technical Overview"
    overview_text: |
      **Metal Royale** is a fast-paced multiplayer Battle Royale created during a 72-hour Game Jam. The core loop is simple yet chaotic: play your guitar to generate sound waves that push opponents out of the arena. The last player standing when the timer ends wins.
      
      The main technical challenge was implementing a functional **Multiplayer Physics architecture** using **Photon (PUN)** within the strict 72-hour deadline. The project required precise synchronization of "Knockback" forces and player positions in a WebGL environment to ensure fair competitive gameplay.
    key_features:
      - title: "72h Netcode Challenge"
        text: "Full multiplayer implementation (Lobby + Gameplay) delivered in 72 hours."
      - title: "Physics Synchronization"
        text: "Networked force application (Knockback) synchronized across clients."
      - title: "King of the Hill"
        text: "Battle Royale logic where the environment shrinks or becomes dangerous over time."

  pt:
    title: "Metal Royale"
    subtitle: "Battle Royale Musical (Game Jam 72h)"
    description: "Um brawler multiplayer caótico desenvolvido em apenas 72 horas, onde riffs de guitarra empurram oponentes para fora da arena."
    overview_title: "Visão Geral Técnica"
    overview_text: |
      **Metal Royale** é um Battle Royale multiplayer frenético criado durante uma Game Jam de 72 horas. O loop central é simples e caótico: use sua guitarra para gerar ondas sonoras que empurram os oponentes para fora da arena. O último a permanecer no palco vence.
      
      O principal desafio técnico foi implementar uma **arquitetura de Física Multiplayer** funcional usando **Photon (PUN)** dentro do prazo rígido de 72 horas. O projeto exigiu sincronização precisa de forças de "Knockback" e posição dos jogadores em ambiente WebGL para garantir um gameplay competitivo justo.
    key_features:
      - title: "Desafio de Netcode em 72h"
        text: "Implementação completa de multiplayer (Lobby + Gameplay) entregue em 72 horas."
      - title: "Sincronização de Física"
        text: "Aplicação de forças em rede (Knockback) sincronizada entre clientes."
      - title: "Rei da Colina"
        text: "Lógica de Battle Royale onde vencer exige sobreviver às físicas e aos oponentes."
---