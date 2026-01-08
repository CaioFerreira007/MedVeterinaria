import { useState, useCallback } from "react";
import { validateContactForm } from "../utils/Validators";
import { formatPhone } from "../utils/Formatters";
import { sendAppointmentMessage } from "../services/whatsappService";

const INITIAL_FORM_STATE = {
  nome: "",
  telefone: "",
  pet: "",
  servico: "",
  mensagem: "",
};

export const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  /**
   * Atualiza campo do formulário
   */
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      // Aplica formatação específica por campo
      let formattedValue = value;

      if (name === "telefone") {
        formattedValue = formatPhone(value);
      }

      // Atualiza estado
      setFormData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));

      // Limpa erro do campo quando usuário começa a digitar
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors]
  );

  /**
   * Valida e submete formulário
   */
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Valida formulário
      const validation = validateContactForm(formData);

      if (!validation.isValid) {
        setErrors(validation.errors);

        // Foca no primeiro campo com erro
        const firstErrorField = Object.keys(validation.errors)[0];
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.focus();
        }

        return;
      }

      // Envia mensagem
      setIsSubmitting(true);
      setErrors({});

      try {
        const result = sendAppointmentMessage(formData);

        if (result.success) {
          setSubmitSuccess(true);

          // Reset formulário após 2 segundos
          setTimeout(() => {
            setFormData(INITIAL_FORM_STATE);
            setSubmitSuccess(false);
          }, 2000);
        } else {
          setErrors({ submit: result.message });
        }
      } catch (err) {
        setErrors({ submit: "Erro ao enviar mensagem. Tente novamente." });
        console.error("Erro no formulário:", err);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  /**
   * Reseta formulário
   */
  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setIsSubmitting(false);
    setSubmitSuccess(false);
  }, []);

  /**
   * Valida campo individual (para validação em tempo real)
   */
  const validateField = useCallback(
    (fieldName) => {
      const validation = validateContactForm(formData);

      if (validation.errors[fieldName]) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: validation.errors[fieldName],
        }));
        return false;
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[fieldName];
          return newErrors;
        });
        return true;
      }
    },
    [formData]
  );

  return {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
    resetForm,
    validateField,
  };
};
