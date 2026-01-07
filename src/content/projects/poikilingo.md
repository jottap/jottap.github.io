---
slug: "poikilingo"
date: 2022-06-01
showcase: true
category: "EdTech Platform"
type: "enterprise"
tech: ["Unity", "Addressables", "Mobile", "Localization", "AWS", "Firebase"]
metrics: 
  downloads: "5k+"
  rating: "4.3/5.0"
  assets: "740+ Managed"

video_url: "https://www.youtube.com/watch?v=8pjiO8bBlo4"
cover_image: "/assets/projects/poikilingo/cover.png" 
backers:
  - "/assets/projects/poikilingo/logo-aws-edstart.png"
  - "/assets/projects/poikilingo/logo-dfi.png"
  - "/assets/projects/poikilingo/logo-impact.png"


# LINKS 
store_links:
  android: "https://play.google.com/store/apps/details?id=com.poikilingo"
  ios: "https://apps.apple.com/us/app/poikilingo-learning-for-kids/id6448920013"

# GALERIA
gallery:
  - "/assets/projects/poikilingo/cover.png"

# (i18n)
i18n:
  en:
    title: "Poikilingo"
    subtitle: "Multilingual Kids Learning Platform"
    description: "Award-winning EdTech platform. I owned the localization architecture and cloud synchronization."
    
    my_role_title: "The challenge"
    my_role_summary: |
      As the **Sole Architect**, I bridged the gap between Pedagogical requirements and Technical constraints. I was responsible for the **Technical Risk Assessment** regarding GDPR compliance and designed the **Content Delivery Pipeline** that allows the app to update without store resubmission.
    
    overview_title: "Overview"
    overview_text: |
      The core challenge was to build a **Multi-tenant Architecture** on a mobile client. The app needed to support 4 simultaneous user profiles with distinct progress, synced via Firebase, while running on resource-constrained Android devices.
      
      I implemented a **Modular Asset System** using Addressables to decouple content from the core binary, solving the 100MB Play Store limit issue.

    key_features_title: "Features"
    key_features:
      - title: "Secure Backend"
        text: "Designed GDPR-compliant auth flow for minors."
      - title: "Asset Optimization"
        text: "Reduced build size by 60% via on-demand loading."

  pt:
    title: "Poikilingo"
    subtitle: "Plataforma Educacional Multilíngue"
    description: "Plataforma EdTech premiada. Fui dono da arquitetura de localização e sincronização."
    
    my_role_title: "LIDERANÇA DE ENGENHARIA"
    my_role_summary: |
      Como **Arquiteto Único**, fiz a ponte entre requisitos Pedagógicos e restrições Técnicas. Fui responsável pela **Avaliação de Risco Técnico** (GDPR) e desenhei o **Pipeline de Entrega de Conteúdo** que permite atualizações sem ressubmissão nas lojas.
    
    overview_title: "O Desafio & Arquitetura"
    overview_text: |
      O desafio central foi construir uma **Arquitetura Multi-tenant** no cliente mobile. O app precisava suportar 4 perfis de usuário simultâneos com progresso distinto, sincronizados via Firebase, rodando em dispositivos Android limitados.
      
      Implementei um **Sistema Modular de Assets** usando Addressables para desacoplar o conteúdo do binário principal, resolvendo o limite de 100MB da Play Store.

    key_features_title: "Features"
    key_features:
      - title: "Backend Seguro"
        text: "Fluxo de autenticação compatível com GDPR para menores."
      - title: "Otimização de Assets"
        text: "Redução de 60% no tamanho da build via carregamento sob demanda."
---