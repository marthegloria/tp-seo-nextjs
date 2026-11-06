const hebergements = [
  {
    numero: "01",
    icone: "🏠",
    titre: "Appartements meublés",
    description: "Des appartements modernes et entièrement équipés pour vos séjours courts ou longs à Goma.",
    niveau: "Tout confort",
    duree: "Court / Long séjour",
  },
  {
    numero: "02",
    icone: "🏡",
    titre: "Maisons vérifiées",
    description: "Trouvez des maisons sécurisées et adaptées pour les familles ou les professionnels.",
    niveau: "Sécurisé",
    duree: "Disponibilité immédiate",
  },
  {
    numero: "03",
    icone: "🏢",
    titre: "Studios cosy",
    description: "Des studios pratiques, bien situés et idéaux pour les étudiants ou personnes seules.",
    niveau: "Économique",
    duree: "Flexible",
  },
];

const avantages = [
  { numero: "01", titre: "Logements vérifiés", description: "Tous nos biens immobiliers sont contrôlés pour garantir votre sécurité et votre confort." },
  { numero: "02", titre: "Réservation simplifiée", description: "Un processus rapide et direct pour trouver votre logement sans tracasseries." },
  { numero: "03", titre: "Emplacements stratégiques", description: "Des résidences situées dans les meilleurs quartiers de Goma." },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container navigation">
          <a href="#accueil" className="logo" aria-label="Goma Héberge">
            <span className="logo-icon">G<span>.</span></span>
            <span>Goma<span className="accent">Héberge</span></span>
          </a>
          <nav className="nav-links" aria-label="Navigation principale">
            <a href="#accueil">Accueil</a>
            <a href="#hebergements">Hébergements</a>
            <a href="#apropos">À propos</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Réserver <span aria-hidden="true">→</span></a>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow"><span className="eyebrow-dot" />GESTION DE LOGEMENT À GOMA</span>
              <h1>Réservez votre <span>logement idéal.</span></h1>
              <p className="hero-description">
                Appartements meublés, maisons et studios vérifiés pour des séjours courts et longs à Goma. 
                Trouvez un cadre de vie qui vous ressemble en toute simplicité.
              </p>
              <div className="hero-actions">
                <a href="#hebergements" className="button button-primary">Explorer les hébergements <span aria-hidden="true">→</span></a>
                <a href="#apropos" className="button button-outline">Découvrir nos services</a>
              </div>
              <div className="hero-note">
                <span className="note-line" />Votre tranquillité d'esprit commence ici
              </div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>SÉCURITÉ</span><span className="bottom-separator">+</span>
            <span>CONFORT</span><span className="bottom-separator">+</span>
            <span>DISPONIBILITÉ</span>
          </div>
        </section>

        <section className="section formations-section" id="hebergements">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">01/ NOS OFFRES</span>
                <h2>Découvrez nos <span>hébergements.</span></h2>
              </div>
              <p>Des espaces de vie pensés pour votre bien-être et adaptés à vos besoins.</p>
            </div>
            <div className="formation-grid">
              {hebergements.map((item) => (
                <article className="formation-card" key={item.numero}>
                  <div className="card-top">
                    <span className="card-number">{item.numero}</span>
                    <span className="card-icon" aria-hidden="true">{item.icone}</span>
                  </div>
                  <h3>{item.titre}</h3>
                  <p>{item.description}</p>
                  <div className="card-meta">
                    <span>{item.niveau}</span>
                    <span>{item.duree}</span>
                  </div>
                  <a href="#contact" className="card-link">Réserver ce bien <span aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="apropos">
          <div className="container about-grid">
            <div>
              <span className="section-label">02/ À PROPOS</span>
              <h2>Plus qu'un toit. <span>Un chez-soi à Goma.</span></h2>
              <p className="about-lead">
                Goma Héberge facilite la recherche et la location de logements fiables grâce à une sélection rigoureuse 
                de biens immobiliers adaptés à la réalité locale.
              </p>
              <a href="#contact" className="text-link">Nous contacter <span aria-hidden="true">→</span></a>
            </div>
            <div className="advantages">
              {avantages.map((avantage) => (
                <div className="advantage" key={avantage.numero}>
                  <span className="advantage-number">{avantage.numero}</span>
                  <div>
                    <h3>{avantage.titre}</h3>
                    <p>{avantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-box">
            <div>
              <span className="section-label">03/ CONTACT</span>
            <h2>Besoin d'un logement ?</h2>
              <p>Contactez-nous dès aujourd'hui pour planifier une visite ou réserver votre prochain séjour.</p>
            </div>
            <a href="mailto:contact@gomaheberge.com" className="button button-light">
              Envoyer un message <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a href="#accueil" className="logo">
            <span className="logo-icon">G<span>.</span></span>
            <span>Goma<span className="accent">Héberge</span></span>
          </a>
          <p>© 2026 Goma Héberge. Goma, RDC.</p>
          <a href="#accueil">Retour en haut ↑</a>
        </div>
      </footer>
    </>
  );
}