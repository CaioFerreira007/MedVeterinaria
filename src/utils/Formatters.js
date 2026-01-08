export const formatPhone = (value) => {
  if (!value) return "";

  // Remove tudo que não é número
  const cleanValue = value.replace(/\D/g, "");

  // Limita a 11 dígitos
  const limitedValue = cleanValue.slice(0, 11);

  // Aplica máscara
  if (limitedValue.length <= 10) {
    // Formato: (21) 9999-9999
    return limitedValue
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  } else {
    // Formato: (21) 99999-9999
    return limitedValue
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
};

export const unformatPhone = (value) => {
  if (!value) return "";
  return value.replace(/\D/g, "");
};

export const formatPhoneForWhatsApp = (value) => {
  if (!value) return "";
  const cleanValue = unformatPhone(value);

  // Se já começa com 55, retorna
  if (cleanValue.startsWith("55")) {
    return cleanValue;
  }

  // Adiciona código do país (55 - Brasil)
  return `55${cleanValue}`;
};

export const formatCPF = (value) => {
  if (!value) return "";

  const cleanValue = value.replace(/\D/g, "").slice(0, 11);

  return cleanValue
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

export const formatCEP = (value) => {
  if (!value) return "";

  const cleanValue = value.replace(/\D/g, "").slice(0, 8);

  return cleanValue.replace(/(\d{5})(\d)/, "$1-$2");
};

export const formatCurrency = (value) => {
  if (!value) return "R$ 0,00";

  const numValue = typeof value === "string" ? parseFloat(value) : value;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numValue);
};

export const capitalizeWords = (value) => {
  if (!value) return "";

  const exceptions = ["da", "de", "do", "das", "dos", "e"];

  return value
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      if (index === 0 || !exceptions.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
};

export const limitLength = (value, maxLength) => {
  if (!value) return "";
  return value.slice(0, maxLength);
};

export const normalizeSpaces = (value) => {
  if (!value) return "";
  return value.trim().replace(/\s+/g, " ");
};

export const formatDateBR = (dateString) => {
  if (!dateString) return "";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("pt-BR").format(date);
};

export const formatTime = (time) => {
  if (!time) return "";

  const [hours, minutes] = time.split(":");
  return `${hours}h${minutes}`;
};
