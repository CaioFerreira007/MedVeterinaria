import { BUSINESS_INFO } from "../constants/businessInfo";

const formatAppointmentMessage = (formData) => {
  const { nome, telefone, pet, servico, mensagem } = formData;

  // Monta mensagem formatada
  const message = [
    "*🐾 Novo Agendamento - Site*",
    "",
    `*👤 Nome:* ${nome}`,
    `*📱 Telefone:* ${telefone}`,
    `*🐕 Pet:* ${pet}`,
    `*💉 Serviço:* ${servico}`,
    `*💬 Mensagem:* ${mensagem}`,
    "",
    "_Mensagem enviada através do site_",
  ].join("%0A");

  return message;
};

export const sendAppointmentMessage = (formData) => {
  try {
    const message = formatAppointmentMessage(formData);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone}?text=${message}`;

    // Abre WhatsApp em nova aba
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    return {
      success: true,
      message: "Redirecionando para WhatsApp...",
    };
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente.",
    };
  }
};

export const sendSimpleMessage = (message) => {
  try {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    return {
      success: true,
      message: "Redirecionando para WhatsApp...",
    };
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente.",
    };
  }
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${BUSINESS_INFO.phone}`;
};

export const getWhatsAppLinkWithMessage = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_INFO.phone}?text=${encodedMessage}`;
};

export const isWhatsAppAvailable = () => {
  // Verifica se está em mobile
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return isMobile;
};

export const openWhatsApp = (message = "") => {
  const isMobile = isWhatsAppAvailable();

  if (isMobile) {
    // Mobile: abre app WhatsApp
    const appUrl = message
      ? `whatsapp://send?phone=${BUSINESS_INFO.phone}&text=${encodeURIComponent(
          message
        )}`
      : `whatsapp://send?phone=${BUSINESS_INFO.phone}`;

    window.location.href = appUrl;

    // Fallback para web após 1 segundo
    setTimeout(() => {
      const webUrl = getWhatsAppLinkWithMessage(message);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }, 1000);
  } else {
    // Desktop: abre WhatsApp Web
    const webUrl = message
      ? getWhatsAppLinkWithMessage(message)
      : getWhatsAppLink();

    window.open(webUrl, "_blank", "noopener,noreferrer");
  }
};

export const trackWhatsAppClick = (
  eventName = "whatsapp_click",
  label = ""
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: "engagement",
      event_label: label,
      value: 1,
    });
  }
};
