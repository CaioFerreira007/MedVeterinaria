import { useState } from "react";
import "../styles/Home.css";
import FotoKarla from "../assets/fotoKarla.jpg";

function Home() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    pet: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, telefone, pet, servico, mensagem } = formData;
    const whatsappNumber = "5521999999999"; // SUBSTITUA pelo número da veterinária
    const message = `*Novo Agendamento - Site*%0A%0A*Nome:* ${nome}%0A*Telefone:* ${telefone}%0A*Pet:* ${pet}%0A*Serviço:* ${servico}%0A*Mensagem:* ${mensagem}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="home">
      <section className="hero">
        <div className="container">
          <article className="hero-content">
            <h1>
              Cuidado Veterinário de Excelência
              <span className="highlight"> no Conforto do Seu Lar</span>
            </h1>
            <p>
              Atendimento domiciliar especializado com carinho, expertise e toda
              a atenção que seu melhor amigo merece
            </p>
            <button onClick={scrollToContact} className="btn-primary">
              Agendar Consulta
            </button>
          </article>

          <figure className="hero-image">
            <img
              src={FotoKarla}
              alt="Dra. Karla - Veterinária especializada em atendimento domiciliar"
            />
          </figure>
        </div>
      </section>

      <section className="about">
        <div className="container-small">
          <h2>
            Experiência e Cuidado Excepcional
            <strong className="highlight-text"> Veterinária Dra. Karla</strong>
          </h2>
          <p>
            Descubra a excelência do atendimento veterinário domiciliar, onde
            qualidade, pesquisa de ponta e uma equipe de especialistas se unem
            para proporcionar a melhor experiência veterinária. A Dra. Karla é
            sua parceira dedicada, guiando você em direção à saúde e bem-estar
            do seu pet.
          </p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <ul className="services-list">
            <li className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M22 12h-4l-3 9L9 3l-3 9H2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3>Consultas Gerais</h3>
              <p>
                Avaliação completa da saúde do seu pet, com diagnóstico preciso
                e tratamento personalizado no conforto do seu lar.
              </p>
              <button onClick={scrollToContact} className="btn-secondary">
                Agendar Agora
              </button>
            </li>

            <li className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
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
              </svg>
              <h3>Vacinação</h3>
              <p>
                Protocolo vacinal completo e especializado que garante a
                proteção e imunização adequada do seu melhor amigo.
              </p>
              <button onClick={scrollToContact} className="btn-secondary">
                Agendar Agora
              </button>
            </li>

            <li className="service-card">
              <svg
                className="service-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
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
              </svg>
              <h3>Tratamentos</h3>
              <p>
                Acompanhamento de doenças crônicas, medicações contínuas e
                cuidados especializados com todo conforto.
              </p>
              <button onClick={scrollToContact} className="btn-secondary">
                Agendar Agora
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <article className="cta-content">
            <h2>Fale com a Dra. Karla</h2>
            <p>Tire suas dúvidas e agende sua consulta domiciliar</p>
            <button onClick={scrollToContact} className="btn-cta">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              Agendar Consulta
            </button>
          </article>
          <figure className="cta-image">
            <img src={FotoKarla} alt="Dra. Karla - Veterinária profissional" />
          </figure>
        </div>
      </section>

      <section className="credentials">
        <div className="container">
          <h2>Formação e Credenciais de Excelência</h2>
          <ul className="credentials-list">
            <li>
              <strong>CRMV-RJ</strong>
              <span>12345</span>
            </li>
            <li>
              <strong>Especialização</strong>
              <span>Clínica Geral</span>
            </li>
            <li>
              <strong>Atendimento</strong>
              <span>Humanizado</span>
            </li>
            <li>
              <strong>Especialista</strong>
              <span>Home Care</span>
            </li>
            <li>
              <strong>Horários</strong>
              <span>Flexíveis</span>
            </li>
            <li>
              <strong>Cuidado</strong>
              <span>Personalizado</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>O Que Nossos Clientes Dizem</h2>
          <ul className="testimonials-list">
            <li className="testimonial">
              <blockquote>
                <p>
                  A Dra. Karla é excepcional! Meu cachorro era muito ansioso em
                  clínicas, mas com o atendimento em casa ficou tranquilo e
                  super confortável. Recomendo demais!
                </p>
                <footer>
                  <cite>
                    <strong>Maria Silva</strong>
                    <span>Tutora do Rex</span>
                  </cite>
                </footer>
              </blockquote>
            </li>

            <li className="testimonial">
              <blockquote>
                <p>
                  Profissional extremamente competente e atenciosa. Cuida da
                  minha gatinha como se fosse dela. O atendimento domiciliar fez
                  toda diferença!
                </p>
                <footer>
                  <cite>
                    <strong>João Santos</strong>
                    <span>Tutor da Mimi</span>
                  </cite>
                </footer>
              </blockquote>
            </li>

            <li className="testimonial">
              <blockquote>
                <p>
                  Praticidade, cuidado e profissionalismo em um só lugar. Não
                  troco o atendimento domiciliar da Dra. Karla por nada. Meu pet
                  agradece!
                </p>
                <footer>
                  <cite>
                    <strong>Ana Paula</strong>
                    <span>Tutora do Bob</span>
                  </cite>
                </footer>
              </blockquote>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="container">
          <article className="contact-info">
            <h2>Agende Sua Consulta Domiciliar</h2>
            <p>
              Preencha o formulário ao lado e entraremos em contato via WhatsApp
              para confirmar seu atendimento no horário mais conveniente para
              você e seu pet.
            </p>
            <address>
              <dl>
                <dt>WhatsApp</dt>
                <dd>(21) 99999-9999</dd>

                <dt>Área de Atendimento</dt>
                <dd>Rio de Janeiro e Região Metropolitana</dd>

                <dt>Horário</dt>
                <dd>Segunda a Sábado - 8h às 18h</dd>
              </dl>
            </address>
          </article>

          <form className="contact-form" onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="nome">Seu Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="telefone">Telefone / WhatsApp</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(21) 99999-9999"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="pet">Nome do Pet</label>
              <input
                type="text"
                id="pet"
                name="pet"
                value={formData.pet}
                onChange={handleChange}
                placeholder="Digite o nome do seu pet"
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="servico">Serviço Desejado</label>
              <select
                id="servico"
                name="servico"
                value={formData.servico}
                onChange={handleChange}
                required
              >
                <option value="">Selecione um serviço</option>
                <option value="Consulta Geral">Consulta Geral</option>
                <option value="Vacinação">Vacinação</option>
                <option value="Tratamento">Tratamento</option>
                <option value="Check-up">Check-up</option>
                <option value="Emergência">Emergência</option>
                <option value="Outro">Outro</option>
              </select>
            </fieldset>

            <fieldset>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                placeholder="Conte-nos sobre seu pet e o que ele precisa..."
                required
              ></textarea>
            </fieldset>

            <button type="submit" className="btn-submit">
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <section className="footer-info">
            <h3>Dra. Karla Veterinária</h3>
            <p>
              Atendimento domiciliar com excelência e carinho para seu melhor
              amigo
            </p>
          </section>
          <nav className="footer-nav">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
        <small>
          © 2024 Dra. Karla - Veterinária Domiciliar | CRMV-RJ 12345 | Rio de
          Janeiro - RJ
        </small>
      </footer>
    </main>
  );
}

export default Home;
