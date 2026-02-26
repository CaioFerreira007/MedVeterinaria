import { useRef, useState, useEffect, useCallback } from "react";
import SEOHead from "../components/SEOHead";
import NavBar from "../components/NavBar";
import { BUSINESS_INFO } from "../constants/businessInfo";
import { useContactForm } from "../hooks/useContactForm";
import { getWhatsAppLink } from "../services/whatsappService";
import "../styles/Home.css";
import FotoKarla from "../assets/_DSC1100.jpg";
import TumbFoto from "../assets/_DSC1124.jpg";

// ── Ícones SVG inline ──────────────────────────────────────────────────────────
const icons = {
  stethoscope: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  syringe: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  ),
  medical: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  ),
  clipboard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4" />
      <path d="M12 16h4" />
      <path d="M8 11h.01" />
      <path d="M8 16h.01" />
    </svg>
  ),
  chip: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <rect width="8" height="8" x="8" y="8" rx="1" />
      <path d="M8 3v2" />
      <path d="M16 3v2" />
      <path d="M8 19v2" />
      <path d="M16 19v2" />
      <path d="M3 8h2" />
      <path d="M3 16h2" />
      <path d="M19 8h2" />
      <path d="M19 16h2" />
    </svg>
  ),
  handshake: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  ),
  ambulance: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <path d="M9 18H7" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  chevronLeft: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  chevronRight: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

// ── Carousel Hook ──────────────────────────────────────────────────────────────
function useCarousel(
  total,
  visibleCount = 1,
  autoPlay = false,
  interval = 4000,
) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const maxIndex = total - visibleCount;

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  const goTo = useCallback((i) => setCurrent(i), []);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval, next]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, interval);
  };

  return { current, next, prev, goTo, pause, resume, maxIndex };
}

// ── Serviços Carousel ──────────────────────────────────────────────────────────
function ServicesCarousel({ services, onSchedule }) {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { current, next, prev, goTo, maxIndex } = useCarousel(
    services.length,
    visible,
    true,
    3500,
  );

  return (
    <div className="carousel-wrapper" aria-label="Carrossel de serviços">
      <div className="carousel-header">
        <h2 className="sr-only" id="services-heading">
          Nossos Serviços
        </h2>
        <div className="carousel-controls" aria-label="Controles do carrossel">
          <button
            className="carousel-btn"
            onClick={prev}
            aria-label="Serviço anterior"
          >
            <span className="carousel-icon">{icons.chevronLeft}</span>
          </button>
          <div className="carousel-dots" role="tablist">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Serviço ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="carousel-btn"
            onClick={next}
            aria-label="Próximo serviço"
          >
            <span className="carousel-icon">{icons.chevronRight}</span>
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        <ul
          className="carousel-track services-track"
          style={{
            transform: `translateX(calc(-${current} * (100% / ${visible} + 10px / ${visible})))`,
          }}
        >
          {services.map((service) => (
            <li
              key={service.id}
              className="service-card"
              style={{
                flex: `0 0 calc(${100 / visible}% - ${((visible - 1) * 10) / visible}px)`,
              }}
            >
              <div className="service-icon" aria-hidden="true">
                {icons[service.icon] || icons.stethoscope}
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <button
                onClick={onSchedule}
                className="btn-secondary"
                aria-label={`Agendar ${service.name}`}
              >
                Agendar Agora
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Depoimentos Carousel ───────────────────────────────────────────────────────
function TestimonialsCarousel({ testimonials }) {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const { current, next, prev, goTo, maxIndex, pause, resume } = useCarousel(
    testimonials.length,
    visible,
    true,
    4500,
  );

  return (
    <div
      className="carousel-wrapper"
      aria-label="Carrossel de depoimentos"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="carousel-header">
        <div className="carousel-controls">
          <button
            className="carousel-btn carousel-btn--light"
            onClick={prev}
            aria-label="Depoimento anterior"
          >
            <span className="carousel-icon">{icons.chevronLeft}</span>
          </button>
          <div className="carousel-dots" role="tablist">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot carousel-dot--light ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button
            className="carousel-btn carousel-btn--light"
            onClick={next}
            aria-label="Próximo depoimento"
          >
            <span className="carousel-icon">{icons.chevronRight}</span>
          </button>
        </div>
      </div>

      <div className="carousel-viewport">
        <ul
          className="carousel-track testimonials-track"
          style={{
            transform: `translateX(calc(-${current} * (100% / ${visible} + 10px / ${visible})))`,
          }}
        >
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="testimonial"
              style={{
                flex: `0 0 calc(${100 / visible}% - ${((visible - 1) * 10) / visible}px)`,
              }}
            >
              <blockquote>
                <div
                  className="testimonial-stars"
                  aria-label={`${t.rating} estrelas`}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="star-icon" aria-hidden="true">
                      {icons.star}
                    </span>
                  ))}
                </div>
                <p>{t.text}</p>
                <footer>
                  <cite>
                    <strong>{t.author}</strong>
                    <span>Tutor(a) de {t.pet}</span>
                  </cite>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── Home ───────────────────────────────────────────────────────────────────────
function Home() {
  const contactRef = useRef(null);
  const {
    formData,
    errors,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <SEOHead />
      <NavBar />

      <main className="home">
        {/* ── HERO ── */}
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
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                aria-label="Agendar consulta via WhatsApp"
              >
                <span className="btn-icon">{icons.whatsapp}</span>
                Agendar Consulta
              </a>
            </article>

            <figure className="hero-image">
              <img
                src={FotoKarla}
                className="fotoKarla"
                alt="Dra. Karla - Veterinária especializada em atendimento domiciliar"
                loading="eager"
                width="520"
                height="520"
              />
            </figure>
          </div>
        </section>

        {/* ── SOBRE ── */}
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
              qualidade e pesquisa de ponta se unem para proporcionar a melhor
              experiência veterinária. {BUSINESS_INFO.shortName} é sua parceira
              dedicada, guiando você em direção à saúde e bem-estar do seu pet.
            </p>
          </div>
        </section>

        {/* ── SERVIÇOS (CARROSSEL) ── */}
        <section
          className="services"
          id="servicos"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <h2 className="section-title" id="services-heading">
              Nossos Serviços
            </h2>
            <ServicesCarousel
              services={BUSINESS_INFO.services}
              onSchedule={scrollToContact}
            />
          </div>
        </section>

        {/* ── CTA ── */}
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
                <span className="btn-icon">{icons.whatsapp}</span>
                Agendar Consulta
              </a>
            </article>
            <figure className="cta-image">
              <img
                className="TumbFoto"
                src={TumbFoto}
                alt="Dra. Karla - Veterinária profissional"
                loading="lazy"
                width="550"
                height="400"
              />
            </figure>
          </div>
        </section>

        {/* ── CREDENCIAIS ── */}
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

        {/* ── DEPOIMENTOS (CARROSSEL) ── */}
        <section
          className="testimonials"
          id="depoimentos"
          aria-labelledby="testimonials-heading"
        >
          <div className="container">
            <h2 id="testimonials-heading">O Que Nossos Clientes Dizem</h2>
            <TestimonialsCarousel testimonials={BUSINESS_INFO.testimonials} />
          </div>
        </section>

        {/* ── CONTATO ── */}
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

        {/* ── FOOTER ── */}
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
