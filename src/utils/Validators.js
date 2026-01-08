export const validatePhone = (phone) => {
  if (!phone) return false;

  // Remove tudo que não é número
  const cleanPhone = phone.replace(/\D/g, "");

  // Telefone brasileiro: 10 ou 11 dígitos (com ou sem 9 no celular)
  // DDD (2 dígitos) + número (8 ou 9 dígitos)
  if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    return false;
  }

  // Verifica se DDD é válido (começa com 1-9)
  const ddd = cleanPhone.substring(0, 2);
  if (ddd[0] === "0") {
    return false;
  }

  // Se tiver 11 dígitos, o terceiro deve ser 9 (celular)
  if (cleanPhone.length === 11 && cleanPhone[2] !== "9") {
    return false;
  }

  return true;
};

/**
 * Valida email
 */
export const validateEmail = (email) => {
  if (!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida se campo não está vazio
 */
export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Valida nome (mínimo 3 caracteres, apenas letras e espaços)
 */
export const validateName = (name) => {
  if (!name || name.trim().length < 3) return false;

  // Aceita letras (incluindo acentuadas), espaços e hífens
  const nameRegex = /^[a-záàâãéèêíïóôõöúçñ\s-]+$/i;
  return nameRegex.test(name);
};

/**
 * Valida nome do pet (mínimo 2 caracteres)
 */
export const validatePetName = (name) => {
  if (!name || name.trim().length < 2) return false;

  // Aceita letras, números, espaços e hífens
  const petNameRegex = /^[a-záàâãéèêíïóôõöúçñ0-9\s-]+$/i;
  return petNameRegex.test(name);
};

/**
 * Valida mensagem (mínimo 10 caracteres)
 */
export const validateMessage = (message) => {
  return message && message.trim().length >= 10;
};

/**
 * Valida formulário completo de contato
 */
export const validateContactForm = (formData) => {
  const errors = {};

  // Nome
  if (!validateRequired(formData.nome)) {
    errors.nome = "Nome é obrigatório";
  } else if (!validateName(formData.nome)) {
    errors.nome = "Nome deve ter pelo menos 3 caracteres";
  }

  // Telefone
  if (!validateRequired(formData.telefone)) {
    errors.telefone = "Telefone é obrigatório";
  } else if (!validatePhone(formData.telefone)) {
    errors.telefone = "Telefone inválido. Use formato: (21) 99999-9999";
  }

  // Pet
  if (!validateRequired(formData.pet)) {
    errors.pet = "Nome do pet é obrigatório";
  } else if (!validatePetName(formData.pet)) {
    errors.pet = "Nome do pet deve ter pelo menos 2 caracteres";
  }

  // Serviço
  if (!validateRequired(formData.servico)) {
    errors.servico = "Selecione um serviço";
  }

  // Mensagem
  if (!validateRequired(formData.mensagem)) {
    errors.mensagem = "Mensagem é obrigatória";
  } else if (!validateMessage(formData.mensagem)) {
    errors.mensagem = "Mensagem deve ter pelo menos 10 caracteres";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeText = (text) => {
  if (!text) return "";
  return text.trim().replace(/\s+/g, " ");
};
