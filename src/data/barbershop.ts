export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  alt: string;
  category: string;
}

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

export const BARBERSHOP_DATA = {
  name: "Brutus Barbershop",
  fullName: "Barbearia - Brutus Barbershop",
  badge: "BRUTUS BARBER",
  tagline: "BARBERSHOP",
  phone: "+55 66 9987-6380",
  rawPhone: "556699876380",
  address: "Barbearia Brutus Barbershop",
  addressDetails: "Consulte no mapa oficial a rota direta para a barbearia.",
  mapsUrl: "https://maps.app.goo.gl/J3BLhVqvatXLP7iV7",
  defaultWhatsAppMessage:
    "Olá, equipe Brutus Barbershop! Vim pelo site e gostaria de agendar um horário. Quais são os serviços, valores e horários disponíveis?",
  getWhatsAppUrl(customMessage?: string) {
    const text = encodeURIComponent(customMessage || this.defaultWhatsAppMessage);
    return `https://wa.me/${this.rawPhone}?text=${text}`;
  },
  hero: {
    badge: "BRUTUS BARBERSHOP",
    headlineLine1: "Seu estilo.",
    headlineLine2: "A presença Brutus.",
    description:
      "Conheça nosso espaço e fale com a equipe para consultar serviços e agendar seu próximo horário.",
    image: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOagOFcmEEU60289fFg13HoI_AgdBDGORReNqV3EHcxWLX-w8ukcaHlSA-JDSk71oAWkLGbLotbHrOTy7cRfoj_rKVl_C34fXvpYMwZMGkcwdzDd3pzm32v-AuhlCwaZ1iyxBsqEyQj6hPzK_ru1Q8amuMiZw-NzLjqA1aXYNALl05iB5whCXl63pXFP5Udihi87miILavTeWe8hH1_SAw8ShIxNX9qwq0V-ANR5OgyPZM_OR7JJmrw4KzxVUZkdKhN20",
      alt: "Lounge e recepção Brutus Barbershop",
      badgeTitle: "Espaço Exclusivo",
      caption: "Lounge Chesterfield, iluminação cênica e conforto incomparável.",
      badgeTag: "Experiência Premium",
    },
  },
  about: {
    sectionTag: "A barbearia",
    title: "Um espaço pensado no seu conforto e bem-estar.",
    description:
      "Um espaço dedicado ao seu estilo. Conheça a Brutus Barbershop e converse com a nossa equipe para encontrar o atendimento que você procura.",
    image: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC5JIHxkRhxfmd7Z3ccfVZUsSKpp4U6qIsEgT8wVloU1cEaa6rDsYskaY1Z7gnmj5hR6ZkMB5X4BzwtpQLz-bX6fJLSB8tjoE3oVgqSj0_bSQliFeVnY5RgOUWfzHDil9XvSHRL0xgDth5XeYUfIH-UTelbkVr_aSijKA2Hyd9uGBwDBBGrZ_21xFKmXX3MYr0fCqFITfUco15EC9o-AZ4mWi87uhY-aHwTS3Xghbw8NlmOs7-I_kFMuzsQbFa-sYB6gA",
      alt: "Barbeiros em atendimento na Brutus Barbershop",
      cardTitle: "Mestres Barbeiros",
      cardSubtitle: "Técnica e precisão em cada detalhe",
      status: "Ativo",
    },
    highlights: [
      {
        icon: "face",
        title: "Atendimento personalizado e profissional",
        description:
          "Consultoria de visagismo individualizada para corte, acabamento e barba alinhados à sua identidade.",
      },
      {
        icon: "weekend",
        title: "Ambiente climatizado e confortável",
        description:
          "Lounge exclusivo com estofados de couro, sonorização selecionada e isolamento térmico de alto padrão.",
      },
      {
        icon: "local_cafe",
        title: "Café e recepção acolhedora",
        description:
          "Deguste um café expresso preparado na hora enquanto aguarda o seu horário com total comodidade.",
      },
    ] as HighlightItem[],
  },
  ctaInquiry: {
    badge: "Agendamento & Consultoria",
    title: "Seu próximo atendimento começa com uma conversa.",
    description:
      "Consulte nossos serviços, valores e horários disponíveis diretamente com a equipe.",
    disclaimer:
      "Atendimento direto com nossos profissionais para entender o que você deseja e reservar o melhor horário.",
    buttonLabel: "Consultar pelo WhatsApp",
    note: "Resposta ágil em horário de atendimento",
  },
  gallery: {
    sectionTag: "Galeria",
    title: "Registros reais do nosso ambiente",
    description:
      "Conheça a estrutura, os detalhes do espaço e o cuidado com a sua experiência através de fotos autênticas da barbearia.",
    items: [
      {
        id: "lounge",
        title: "Lounge de espera e recepção",
        subtitle: "Espaço aconchegante com sofás Chesterfield",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDOagOFcmEEU60289fFg13HoI_AgdBDGORReNqV3EHcxWLX-w8ukcaHlSA-JDSk71oAWkLGbLotbHrOTy7cRfoj_rKVl_C34fXvpYMwZMGkcwdzDd3pzm32v-AuhlCwaZ1iyxBsqEyQj6hPzK_ru1Q8amuMiZw-NzLjqA1aXYNALl05iB5whCXl63pXFP5Udihi87miILavTeWe8hH1_SAw8ShIxNX9qwq0V-ANR5OgyPZM_OR7JJmrw4KzxVUZkdKhN20",
        alt: "Lounge de espera e recepção",
        category: "Ambiente",
      },
      {
        id: "cafe-neon",
        title: "Café Brutus e detalhe neon",
        subtitle: "Hospitalidade e espresso de qualidade",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBbRNzTc2kIxe-YEGxK2umngA8w98UJGC4-AYknkiVIDKVYkTh8B0OTZTTvkl9lmOAf-yTem_wluLL2OIDLQfYNU9bMO4XrPDzeGpAR_Sm29Q8qNf6sIGPZp88oT1epNAOVJj5klW7mLmrq7g0pJSnDu7IqVzSNPwqTkTJ9fuXc1jZahqK7nfsrX5qIT0Cq0wWskCRhqZE3_OtvVwCJWq40neubGrEz5Er-wqeDAUCmXejxqoVth3IW4PFmZKIbWbLMrYY",
        alt: "Café Brutus e detalhe neon",
        category: "Experiência",
      },
      {
        id: "estacoes-corte",
        title: "Estações de corte e atendimento",
        subtitle: "Bancadas individuais e ferramentas de ponta",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBC5JIHxkRhxfmd7Z3ccfVZUsSKpp4U6qIsEgT8wVloU1cEaa6rDsYskaY1Z7gnmj5hR6ZkMB5X4BzwtpQLz-bX6fJLSB8tjoE3oVgqSj0_bSQliFeVnY5RgOUWfzHDil9XvSHRL0xgDth5XeYUfIH-UTelbkVr_aSijKA2Hyd9uGBwDBBGrZ_21xFKmXX3MYr0fCqFITfUco15EC9o-AZ4mWi87uhY-aHwTS3Xghbw8NlmOs7-I_kFMuzsQbFa-sYB6gA",
        alt: "Estações de corte e atendimento",
        category: "Atendimento",
      },
      {
        id: "convivencia",
        title: "Espaço de convivência",
        subtitle: "Conforto absoluto para relaxar antes do corte",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBNz0_TLbHhcCJxGVu1E1F2MdJ0e_673P_ftaFztGBwUA5kTqawW6v2qrNUKh0pmuw7utvMlI0R5Fp2kHsjgB9j-E53byxgrLnKCQzfn_Mo9qcizKuD3U3PJgCcz0NV2pYTKVkiPfCj6sgRIZbPMDlDXJAvuaD7GZmznYu2GLfD0dFUdEnqUTcIPjbeiB7eCuv9NsOToC95AAJk3RBxzldXkdQgRYD6EsKxI2yLcs-BO70oqGL0_7roEv9c2thzL5-zGkw",
        alt: "Espaço de convivência e poltronas Chesterfield",
        category: "Conforto",
      },
      {
        id: "cuidados-produtos",
        title: "Linha de cuidados masculinos",
        subtitle: "Pomadas, óleos e balms de alta performance",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCZP9wMI1MEryBhWBB7nENsa7FtYlK-WQiCczb9msB9_6txLnp_uXaJb7E41NH4QHb-wiG05daRFM__63UUYe9XbOrZGioyDNuzD3rQqdbP52q9u0r_FMWCAbgMEf4Bsznj40TLW06TT6UzK3p1z1JVG3E34Dt50mv6_xPu4mLqMtjutW0-gDI2fPMYFk2w8jayKlEoeT94G4WSP-rW9qrONE2hFinCkVA6aC87FgR22vlKSSnmwkB62HZgSPLD3YrxAwI",
        alt: "Linha de cuidados e produtos masculinos",
        category: "Produtos",
      },
      {
        id: "finalizadores",
        title: "Produtos e finalizadores capilares",
        subtitle: "Acabamento duradouro para manter o visual",
        imageUrl:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA69ZMIhT2axHOXZBIXKSzPwWOxVzuOJSLmEi3-VltXRxS-cOoM_Wa3bkF-8eq_TIzejmh69iJ65HI_YABvt9f8dacm_5RxUmkfdxCpEkR6nX44ZURCTp-GL3MremVO-J5DMvJyKN7mDDgz2AtQXRzoKm-rir4SV7U5PZU5KxuRQO0up_8btauFWCusblH5sDWNu7hIdEidcydGbh60QSrLiDMTetJe0o0QhOy27afqW8j4qfEjIrIkvYZPgLpee4c78zQ",
        alt: "Produtos e finalizadores capilares",
        category: "Produtos",
      },
    ] as GalleryItem[],
  },
  location: {
    sectionTag: "Localização",
    title: "Venha nos visitar",
    description: "Encontre a Barbearia Brutus facilmente e planeje sua rota.",
    badge: "Endereço & Acesso",
    name: "Barbearia Brutus Barbershop",
    subtext: "Consulte no mapa oficial a rota direta para a barbearia.",
    phoneLabel: "+55 66 9987-6380",
    phoneNote: "Confirmar número antes do contato final",
    mapRouteTitle: "Navegação via Google Maps",
    mapRouteNote: "Rota ponto a ponto para seu veículo",
    buttonLabel: "Ver no Google Maps",
    cardMapTitle: "Brutus Barbershop",
    cardMapSubtitle: "Abrir localização no aplicativo",
    openMapLabel: "Abrir Mapa",
  },
  finalCta: {
    badge: "Horários Disponíveis",
    title: "Seu próximo horário começa aqui.",
    description:
      "Fale com a equipe Brutus para consultar os serviços e a disponibilidade.",
    buttonLabel: "Agendar pelo WhatsApp",
  },
  footer: {
    title: "Barbearia - Brutus Barbershop",
    description: "Experiência refinada de corte, barba e cuidados masculinos.",
    copyright: "© 2024 Barbearia Brutus Barbershop. Todos os direitos reservados.",
    badge: "Tradição & Estilo",
  },
  // Quick inquiry options for user convenience
  quickOptions: [
    {
      label: "Corte de Cabelo",
      message:
        "Olá! Gostaria de consultar horários disponíveis para Corte de Cabelo na Brutus Barbershop.",
    },
    {
      label: "Barba & Barbaterapia",
      message:
        "Olá! Gostaria de informações e agendamento para Barba / Barbaterapia na Brutus Barbershop.",
    },
    {
      label: "Combo Cabelo + Barba",
      message:
        "Olá! Gostaria de agendar o Combo Cabelo e Barba completo na Brutus Barbershop. Quais os horários disponíveis?",
    },
    {
      label: "Dúvidas Gerais / Produtos",
      message:
        "Olá! Gostaria de saber mais informações sobre os serviços e produtos disponíveis na Brutus Barbershop.",
    },
  ],
};
