export const BUSINESS_INFO = {
  // Informações Básicas
  name: "Dra. Karla Veterinária Domiciliar",
  shortName: "Dra. Karla",
  tagline: "Atendimento domiciliar com excelência e carinho",
  description:
    "Atendimento veterinário domiciliar especializado no Rio de Janeiro. Consultas, vacinação e tratamentos no conforto do seu lar com profissionalismo e carinho.",

  // Credenciais
  crmv: "CRMV-RJ 15941",
  specialization: "Clínica Geral",
  experience: "3+ anos de experiência",

  // Contato
  phone: "5521975901836",
  phoneDisplay: "(21) 97590-1836",
  email: "vetkarlabomfim@gmail.com",

  // Localização
  serviceArea: "Rio de Janeiro e Região Metropolitana",
  city: "Duque de Caxias",
  state: "RJ",
  stateCode: "RJ",
  country: "Brasil",
  countryCode: "BR",

  // Coordenadas (Centro do RJ - ajustar para localização real)
  coordinates: {
    latitude: -22.7856,
    longitude: -43.3117,
  },
  // Horários
  hours: {
    display: "Segunda a Sábado - 8h às 18h",
    structured: "Mo-Sa 08:00-18:00", // Formato Schema.org
  },

  social: {
    instagram: "https://instagram.com/drakarlavet",
    facebook: "https://facebook.com/drakarlavet",
  },

  // SEO
  keywords: [
    "veterinária domiciliar rio de janeiro",
    "veterinário em casa rj",
    "consulta veterinária domiciliar",
    "atendimento pet em casa",
    "veterinária zona sul rio",
    "veterinária barra da tijuca",
    "vacinação domiciliar pet",
    "veterinária 24 horas domiciliar",
  ],

  // Serviços
  services: [
    {
      id: "consulta-geral",
      name: "Consulta Geral",
      description:
        "Avaliação completa da saúde do seu pet, com diagnóstico preciso e tratamento personalizado no conforto do seu lar.",
      icon: "stethoscope",
    },
    {
      id: "vacinacao",
      name: "Vacinação",
      description:
        "Protocolo vacinal completo e especializado que garante a proteção e imunização adequada do seu melhor amigo.",
      icon: "syringe",
    },
    {
      id: "tratamentos",
      name: "Tratamentos",
      description:
        "Acompanhamento de doenças crônicas, medicações contínuas e cuidados especializados com todo conforto.",
      icon: "medical",
    },
    {
      id: "checkup",
      name: "Check-up",
      description:
        "Avaliação preventiva completa para manter seu pet sempre saudável.",
      icon: "clipboard",
    },
    {
      id: "microchipagem",
      name: "Microchipagem",
      description:
        "Implantação de microchip para identificação e segurança do seu pet.",
      icon: "chip",
    },
    {
      id: "parceria",
      name: "Parceria",
      description: "Programas de parceria com especialidades a domicílio.",
      icon: "handshake",
    },
  ],

  // Credenciais para exibição
  credentials: [
    { label: "CRMV-RJ", value: "15941" },
    { label: "Especialização", value: "Clínica Geral" },
    { label: "Atendimento", value: "Humanizado" },
    { label: "Especialista", value: "Home Care" },
    { label: "Horários", value: "Flexíveis" },
    { label: "Cuidado", value: "Personalizado" },
  ],

  // Depoimentos
  testimonials: [
    {
      id: 1,
      author: "Lucas Tiaho Bomfim",
      pet: "Papagaio",
      text: "Excelente atendimento. A Dra. Karla salvou a vida do meu papagaio… ele estava muito triste e sem penas, mas com a ajuda dela agora ele está alegre e feliz. Sou muito grato!!!! É emocionante ver o amor e o carinho com que a dra trata os nossos filhos.",
      rating: 5,
    },
    {
      id: 2,
      author: "Prycila Carvalho",
      pet: "Pet",
      text: "Atenciosa, cuidadosa, carinhosa, uma profissional excelente... isso define o atendimento da Doutora Karla. Maravilhosa, super indico!",
      rating: 5,
    },
    {
      id: 3,
      author: "Rafaella Arvelos",
      pet: "Pet",
      text: "Excelente profissional, admiro muito todo cuidado e amor com os animais, recomendo muito marcar uma consulta!",
      rating: 5,
    },
    {
      id: 4,
      author: "Mariangela Ferreira",
      pet: "Pet",
      text: "Bom atendimento, pontual, atenciosa, uma boa veterinária. Recomendo!",
      rating: 5,
    },
    {
      id: 5,
      author: "Maicon Silva",
      pet: "Cachorro",
      text: "Tratou muito bem do meu dog, muito obrigado por esse carinho!",
      rating: 5,
    },
    {
      id: 6,
      author: "Vivian Von Held",
      pet: "Pet",
      text: "Muito profissional e assertiva em seus diagnósticos. Nota 1000!",
      rating: 5,
    },
    {
      id: 7,
      author: "Caio Gustavo",
      pet: "Cachorro",
      text: "Excelente atendimento, muito gentil e cuidadosa com o meu cachorro. Ele sofreu uma lesão em uma de suas patinhas e dentro de poucas semanas já estava andando bem melhor. Muito obrigado pelo excelente profissionalismo!",
      rating: 5,
    },
    {
      id: 8,
      author: "Tay Silva",
      pet: "Pet",
      text: "Excelente profissional, cuidou do meu pet com todo amor e carinho. Profissional capacitada, descobriu o problema e com a indicação certa obtivemos ótimos resultados!! 10x10. Super indicooooo!",
      rating: 5,
    },
    {
      id: 9,
      author: "Amanda Mello",
      pet: "Cachorra e Gato",
      text: "A Dra. Karla é uma excelente profissional, atenciosa e muito carinhosa com nossos bichinhos. Está sempre pronta a ajudar e a tirar nossas dúvidas. Somos muito gratos pelo carinho e cuidado que ela tem com nossa cachorrinha e nosso gato.",
      rating: 5,
    },
  ],

  // FAQ (pode ser adicionado posteriormente)
  faq: [
    {
      question: "Qual a área de atendimento?",
      answer:
        "Atendemos toda a cidade do Rio de Janeiro e região metropolitana.",
    },
    {
      question: "Como funciona o agendamento?",
      answer:
        "Você pode agendar pelo WhatsApp ou pelo formulário do site. Respondemos rapidamente para confirmar o horário.",
    },
    {
      question: "Quais formas de pagamento?",
      answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito.",
    },
    {
      question: "Atende emergências?",
      answer:
        "Sim, oferecemos atendimento de emergência. Entre em contato pelo WhatsApp para casos urgentes.",
    },
  ],
};

// URLs e Links (adicionar domínio real quando disponível)
export const SITE_INFO = {
  url: "https://drakarlavet.com.br", // Substituir pelo domínio real
  canonicalUrl: "https://drakarlavet.com.br",
  logo: "/logo.png", // Adicionar logo se existir
  favicon: "/favicon.ico",
  ogImage: "/og-image.jpg", // Imagem para compartilhamento (1200x630px)
};

// Cores do tema (sincronizado com CSS)
export const THEME_COLORS = {
  primary: "#28574e",
  primaryLight: "#3a6d62",
  primaryDark: "#1e4139",
  secondary: "#81b29a",
  accent: "#f2cc8f",
};
