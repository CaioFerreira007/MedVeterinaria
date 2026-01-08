import { useRef } from "react";
import SEOHead from "../components/SEOHead";
import NavBar from "../components/NavBar";
import { BUSINESS_INFO } from "../constants/businessInfo";
import { useContactForm } from "../hooks/usecontactform";
import { getWhatsAppLink } from "../services/whatsappService";
import "../styles/Home.css";
import FotoKarla from "../assets/fotoKarla.jpg";

function Home() {
  const contactRef = useRef(null);

  // Custom hook para gerenciar formulário
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  // Scroll suave para seção de contato
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <SEOHead />

      {/* Navbar */}
      <NavBar />

      <main className="home">
        {/* ==================== HERO SECTION ==================== */}
        <section className="hero" aria-label="Apresentação">
          <div className="container">
            <article className="hero-content">
              <h1>
                Cuidado Veterinário de Excelência
                <span className="highlight"> no Conforto do Seu Lar</span>
              </h1>
              <p>
                Atendimento domiciliar especializado com carinho, expertise e
                toda a atenção que seu melhor amigo merece
              </p>
              <button
                onClick={scrollToContact}
                className="btn-primary"
                aria-label="Agendar consulta veterinária"
              >
                Agendar Consulta
              </button>
            </article>

            <figure className="hero-image">
              <img
                src={FotoKarla}
                alt="Dra. Karla - Veterinária especializada em atendimento domiciliar"
                loading="eager"
                width="520"
                height="520"
              />
            </figure>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section className="about" id="sobre" aria-labelledby="about-heading">
          <div className="container-small">
            <h2 id="about-heading">
              Experiência e Cuidado Excepcional
              <strong className="highlight-text">
                {" "}
                Veterinária {BUSINESS_INFO.shortName}
              </strong>
            </h2>
            <p>
              Descubra a excelência do atendimento veterinário domiciliar, onde
              qualidade, pesquisa de ponta e uma equipe de especialistas se unem
              para proporcionar a melhor experiência veterinária.{" "}
              {BUSINESS_INFO.shortName} é sua parceira dedicada, guiando você em
              direção à saúde e bem-estar do seu pet.
            </p>
          </div>
        </section>

        {/* ==================== SERVICES SECTION ==================== */}
        <section
          className="services"
          id="servicos"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <h2 className="sr-only" id="services-heading">
              Nossos Serviços
            </h2>
            <ul className="services-list">
              {BUSINESS_INFO.services.slice(0, 3).map((service) => (
                <li key={service.id} className="service-card">
                  <svg
                    className="service-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    {service.id === "consulta-geral" && (
                      <path
                        d="M22 12h-4l-3 9L9 3l-3 9H2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                    {service.id === "vacinacao" && (
                      <>
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2 17l10 5 10-5M2 12l10 5 10-5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </>
                    )}
                    {service.id === "tratamento" && (
                      <>
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                          strokeWidth="2"
                        />
                        <line
                          x1="9"
                          y1="9"
                          x2="15"
                          y2="15"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="15"
                          y1="9"
                          x2="9"
                          y2="15"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </>
                    )}
                  </svg>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <button
                    onClick={scrollToContact}
                    className="btn-secondary"
                    aria-label={`Agendar ${service.name}`}
                  >
                    Agendar Agora
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="cta" aria-labelledby="cta-heading">
          <div className="container">
            <article className="cta-content">
              <h2 id="cta-heading">Fale com {BUSINESS_INFO.shortName}</h2>
              <p>Tire suas dúvidas e agende sua consulta domiciliar</p>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                aria-label="Agendar consulta via WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                Agendar Consulta
              </a>
            </article>
            <figure className="cta-image">
              <img
                src={FotoKarla}
                alt="Dra. Karla - Veterinária profissional"
                loading="lazy"
                width="550"
                height="400"
              />
            </figure>
          </div>
        </section>

        {/* ==================== CREDENTIALS SECTION ==================== */}
        <section className="credentials" aria-labelledby="credentials-heading">
          <div className="container">
            <h2 id="credentials-heading">
              Formação e Credenciais de Excelência
            </h2>
            <ul className="credentials-list">
              {BUSINESS_INFO.credentials.map((credential, index) => (
                <li key={index}>
                  <strong>{credential.label}</strong>
                  <span>{credential.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================== TESTIMONIALS SECTION ==================== */}
        <section
          className="testimonials"
          id="depoimentos"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <h2 id="testimonials-heading">O Que Nossos Clientes Dizem</h2>
            <ul className="testimonials-list">
              {BUSINESS_INFO.testimonials.map((testimonial) => (
                <li key={testimonial.id} className="testimonial">
                  <blockquote>
                    <p>{testimonial.text}</p>
                    <footer>
                      <cite>
                        <strong>{testimonial.author}</strong>
                        <span>Tutor(a) do {testimonial.pet}</span>
                      </cite>
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section
          className="contact"
          id="contato"
          ref={contactRef}
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <article className="contact-info">
              <h2 id="contact-heading">Agende Sua Consulta Domiciliar</h2>
              <p>
                Preencha o formulário ao lado e entraremos em contato via
                WhatsApp para confirmar seu atendimento no horário mais
                conveniente para você e seu pet.
              </p>
              <address>
                <dl>
                  <dt>WhatsApp</dt>
                  <dd>
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ligar para WhatsApp"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </dd>

                  <dt>Área de Atendimento</dt>
                  <dd>{BUSINESS_INFO.serviceArea}</dd>

                  <dt>Horário</dt>
                  <dd>{BUSINESS_INFO.hours.display}</dd>
                </dl>
              </address>
            </article>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Formulário de agendamento"
            >
              <fieldset>
                <label htmlFor="nome">
                  Seu Nome <span aria-label="obrigatório">*</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                />
                {errors.nome && (
                  <span id="nome-error" className="error-message" role="alert">
                    {errors.nome}
                  </span>
                )}
              </fieldset>

              <fieldset>
                <label htmlFor="telefone">
                  Telefone / WhatsApp <span aria-label="obrigatório">*</span>
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(21) 99999-9999"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.telefone}
                  aria-describedby={
                    errors.telefone ? "telefone-error" : undefined
                  }
                />
                {errors.telefone && (
                  <span
                    id="telefone-error"
                    className="error-message"
                    role="alert"
                  >
                    {errors.telefone}
                  </span>
                )}
              </fieldset>

              <fieldset>
                <label htmlFor="pet">
                  Nome do Pet <span aria-label="obrigatório">*</span>
                </label>
                <input
                  type="text"
                  id="pet"
                  name="pet"
                  value={formData.pet}
                  onChange={handleChange}
                  placeholder="Digite o nome do seu pet"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.pet}
                  aria-describedby={errors.pet ? "pet-error" : undefined}
                />
                {errors.pet && (
                  <span id="pet-error" className="error-message" role="alert">
                    {errors.pet}
                  </span>
                )}
              </fieldset>

              <fieldset>
                <label htmlFor="servico">
                  Serviço Desejado <span aria-label="obrigatório">*</span>
                </label>
                <select
                  id="servico"
                  name="servico"
                  value={formData.servico}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.servico}
                  aria-describedby={
                    errors.servico ? "servico-error" : undefined
                  }
                >
                  <option value="">Selecione um serviço</option>
                  {BUSINESS_INFO.services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.servico && (
                  <span
                    id="servico-error"
                    className="error-message"
                    role="alert"
                  >
                    {errors.servico}
                  </span>
                )}
              </fieldset>

              <fieldset>
                <label htmlFor="mensagem">
                  Mensagem <span aria-label="obrigatório">*</span>
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Conte-nos sobre seu pet e o que ele precisa..."
                  required
                  aria-required="true"
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={
                    errors.mensagem ? "mensagem-error" : undefined
                  }
                ></textarea>
                {errors.mensagem && (
                  <span
                    id="mensagem-error"
                    className="error-message"
                    role="alert"
                  >
                    {errors.mensagem}
                  </span>
                )}
              </fieldset>

              <button
                type="submit"
                className="btn-submit"
                disabled={isSubmitting}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar pelo WhatsApp"}
              </button>

              {submitSuccess && (
                <div
                  className="success-message"
                  role="status"
                  aria-live="polite"
                >
                  ✓ Redirecionando para WhatsApp...
                </div>
              )}

              {errors.submit && (
                <div
                  className="error-message"
                  role="alert"
                  aria-live="assertive"
                >
                  {errors.submit}
                </div>
              )}
            </form>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="footer" role="contentinfo">
          <div className="container">
            <section className="footer-info">
              <h3>{BUSINESS_INFO.name}</h3>
              <p>{BUSINESS_INFO.tagline}</p>
            </section>
            <nav className="footer-nav" aria-label="Navegação do rodapé">
              <a href="#sobre">Sobre</a>
              <a href="#servicos">Serviços</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
          <small>
            © 2024 {BUSINESS_INFO.shortName} - Veterinária Domiciliar |{" "}
            {BUSINESS_INFO.crmv} | {BUSINESS_INFO.city} -{" "}
            {BUSINESS_INFO.stateCode}
          </small>
        </footer>
      </main>
    </>
  );
}

export default Home;
