---
slug: "project-start"
date: 2026-01-13
showcase: true
featured: true
category: "Development Tools"
type: "tools"
tech: ["Unity", "C#", "Editor Scripting", "DevOps", "AssetDatabase API", "Git LFS"]
metrics: 
  impact: "Workflow"
  domain: "Project Governance"
  system: "Internal Tooling"
  role: "Software Architect"

# MÍDIA
cover_image: "/assets/projects/project-start/cover.png"
gallery:
  - "/assets/projects/project-start/cover.png"
  - "/assets/projects/project-start/project-start-1.png"
  - "/assets/projects/project-start/project-start-2.png"

# INTERNACIONALIZAÇÃO (i18n)
i18n:
  en:
    title: "Project Start"
    subtitle: "Automated Project Setup Tool"
    description: "A professional Unity Editor tool that automates project organization and applies architectural standards from day zero."
    
    my_role_title: "WHY I BUILT THIS"
    my_role_summary: |
      Inconsistent project structures are a major cause of friction and technical debt. As a Tech Lead, I realized that starting a project correctly is more efficient than fixing it later.
      
      I developed **Project Start** to automate the tedious "Day 0" setup. It removes the guesswork of where to save files, ensuring that every team member, from junior to senior, works within the same predictable environment.

    overview_title: "Technical Approach"
    overview_text: |
      The tool provides a simple menu in the Unity Editor to initialize a standardized repository structure.
      
      **Core Features:**
      1. **Safe Folder Creation:** Uses Unity's `AssetDatabase` API to maintain meta-file integrity and avoid GUID conflicts.
      2. **The '_Project' Pattern:** Forces a root folder named `_Project` to keep team code separate and organized at the top of the hierarchy.
      3. **Version Control Prep:** Automatically writes an optimized `.gitignore` and prepares the project for Git LFS to handle large assets correctly.

    key_features:
      - title: "Architectural Governance"
        text: "Enforces a strict boundary between proprietary team logic and external dependencies using Unity's native APIs."
      - title: "Repository Hygiene & Velocity"
        text: "Automates Git LFS configuration and reduces initial setup time from minutes to a single click."

  pt:
    title: "Project Start"
    subtitle: "Ferramenta de Setup Automático"
    description: "Uma ferramenta profissional para o Unity Editor que automatiza a organização e aplica padrões arquiteturais desde o dia zero."
    
    my_role_title: "POR QUE CRIEI ISSO"
    my_role_summary: |
      Estruturas de projeto inconsistentes geram atrito e dívida técnica. Como Tech Lead, percebi que começar um projeto do jeito certo é muito mais eficiente do que tentar consertá-lo depois.
      
      Desenvolvi o **Project Start** para automatizar o setup inicial. Ele remove a dúvida de "onde salvar cada arquivo", garantindo que todos no time, do júnior ao sênior, trabalhem em um ambiente previsível e organizado.

    overview_title: "Abordagem Técnica"
    overview_text: |
      A ferramenta adiciona um menu simples ao Editor da Unity para inicializar uma estrutura de repositório padronizada.
      
      **Pontos Principais:**
      1. **Criação Segura de Pastas:** Utiliza a API `AssetDatabase` para manter a integridade dos arquivos .meta e evitar conflitos de GUID.
      2. **O Padrão '_Project':** Força uma pasta raiz chamada `_Project` para manter o código do time isolado e no topo da hierarquia.
      3. **Preparação de Versionamento:** Escreve automaticamente um `.gitignore` otimizado e prepara o Git LFS para gerenciar assets binários corretamente.

    key_features:
      - title: "Governança Arquitetural"
        text: "Impõe uma fronteira clara entre a lógica do time e dependências externas usando as APIs nativas da Unity."
      - title: "Higiene e Velocidade"
        text: "Automatiza a configuração do Git LFS e reduz o tempo de setup inicial de minutos para um único clique."
---