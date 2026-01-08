export const BUSINESS_INFO = {
  // Informações Básicas
  name: "Dra. Karla Veterinária Domiciliar",
  shortName: "Dra. Karla",
  tagline: "Atendimento domiciliar com excelência e carinho",
  description:
    "Atendimento veterinário domiciliar especializado no Rio de Janeiro. Consultas, vacinação e tratamentos no conforto do seu lar com profissionalismo e carinho.",

  // Credenciais
  crmv: "CRMV-RJ 12345",
  specialization: "Clínica Geral",
  experience: "10+ anos de experiência",

  // Contato
  phone: "5521975901836", // ✅ Formato correto: 55 + DDD + número (SÓ NÚMEROS!)
  phoneDisplay: "(21) 97590-1836", // Para exibição visual
  email: "vetkarlabomfim@gmail.com",

  // Localização
  serviceArea: "Rio de Janeiro e Região Metropolitana",
  city: "Rio de Janeiro",
  state: "RJ",
  stateCode: "RJ",
  country: "Brasil",
  countryCode: "BR",

  // Coordenadas (Centro do RJ - ajustar para localização real)
  coordinates: {
    latitude: "-22.9068",
    longitude: "-43.1729",
  },

  // Horários
  hours: {
    display: "Segunda a Sábado - 8h às 18h",
    structured: "Mo-Sa 08:00-18:00", // Formato Schema.org
  },

  // Redes Sociais (adicionar se existir)
  social: {
    instagram: "https://instagram.com/drakarlavet",
    facebook: "https://facebook.com/drakarlavet",
    // whatsapp já está acima
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
      id: "tratamento",
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
      id: "emergencia",
      name: "Emergência",
      description:
        "Atendimento urgente para situações que requerem cuidado imediato.",
      icon: "ambulance",
    },
  ],

  // Credenciais para exibição
  credentials: [
    { label: "CRMV-RJ", value: "12345" },
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
      author: "Maria Silva",
      pet: "Rex",
      text: "A Dra. Karla é excepcional! Meu cachorro era muito ansioso em clínicas, mas com o atendimento em casa ficou tranquilo e super confortável. Recomendo demais!",
      rating: 5,
    },
    {
      id: 2,
      author: "João Santos",
      pet: "Mimi",
      text: "Profissional extremamente competente e atenciosa. Cuida da minha gatinha como se fosse dela. O atendimento domiciliar fez toda diferença!",
      rating: 5,
    },
    {
      id: 3,
      author: "Ana Paula",
      pet: "Bob",
      text: "Praticidade, cuidado e profissionalismo em um só lugar. Não troco o atendimento domiciliar da Dra. Karla por nada. Meu pet agradece!",
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
