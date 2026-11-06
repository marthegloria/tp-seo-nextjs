import Image from "next/image";

// Les 5 logements avec tes images webp, prix et descriptions
const annoncesLogements = [
  {
    id: "1",
    titre: "Studio meublé moderne",
    prix: "250 $ / mois",
    quartier: "Katindo, Goma",
    image: "/image/image1.webp",
    verifie: true,
    proprietaire: "Agence Goma Immobilier",
    description: "Idéal pour étudiant ou jeune professionnel, cuisine équipée et connexion Wi-Fi stable."
  },
  {
    id: "2",
    titre: "Appartement 2 chambres",
    prix: "450 $ / mois",
    quartier: "Himbi, Goma",
    image: "/image/image2.webp",
    verifie: true,
    proprietaire: "Jean-Pierre Kabangu",
    description: "Spacieux et sécurisé, salon lumineux avec groupe électrogène et réserve d'eau."
  },
  {
    id: "3",
    titre: "Studio cosy avec vue",
    prix: "200 $ / mois",
    quartier: "Kilijiwe, Goma",
    image: "/image/image3.webp",
    verifie: false,
    proprietaire: "Maman Marie-Claire",
    description: "Proche des universités, cadre calme et services de gardiennage inclus."
  },
  {
    id: "4",
    titre: "Appartement haut standing",
    prix: "600 $ / mois",
    quartier: "Le Volcan, Goma",
    image: "/image/image4.webp",
    verifie: true,
    proprietaire: "Kivu Invest",
    description: "Finition moderne, parking privé, vue magnifique et sécurité 24h/24."
  },
  {
    id: "5",
    titre: "Chambre autonome",
    prix: "130 $ / mois",
    quartier: "Ndosho, Goma",
    image: "/image/image5.webp",
    verifie: false,
    proprietaire: "Alain Mutombo",
    description: "Proche de la route principale, propre, eau et électricité stables."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* En-tête / Navigation */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white font-black px-3 py-1.5 rounded-lg text-lg shadow">
            G
          </div>
          <span className="font-bold tracking-wide text-lg text-slate-900">GomaHéberge</span>
        </div>
        <a 
          href="#offres" 
          className="border border-slate-300 hover:border-slate-900 text-sm font-semibold px-5 py-2 rounded-xl transition-all text-slate-800"
        >
          Réserver →
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-left">
        <div className="max-w-2xl">
          <span className="text-slate-600 text-xs font-bold tracking-widest uppercase bg-slate-200 px-3 py-1 rounded-full">
            • Gestion de logement à Goma
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight leading-tight text-slate-900">
            Réservez votre <span className="text-slate-700 underline decoration-slate-400">logement idéal.</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
            Appartements meublés, maisons et studios vérifiés pour des séjours courts et longs à Goma. Trouvez un cadre de vie qui vous ressemble en toute simplicité.
          </p>
          <div className="flex flex-row gap-4">
            <a 
              href="#offres" 
              className="bg-slate-900 hover:bg-slate-800 !text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md text-center"
            >
              Explorer les hébergements →
            </a>
            <a 
              href="#apropos" 
              className="border border-slate-300 hover:bg-slate-100 font-semibold px-8 py-4 rounded-xl transition-all text-slate-800 text-center"
            >
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 01 / NOS OFFRES */}
      <section id="offres" className="container mx-auto px-6 py-16 border-t border-slate-200">
        <div className="mb-12">
          <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">
            01 / NOS OFFRES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 text-slate-900">
            Découvrez nos <span className="text-slate-600">hébergements.</span>
          </h2>
          <p className="text-slate-600 max-w-xl">
            Des espaces de vie pensés pour votre bien-être et adaptés à vos besoins à Goma.
          </p>
        </div>

        {/* Grille des logements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {annoncesLogements.map((logement, index) => (
            <div 
              key={logement.id} 
              className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
                  {logement.verifie && (
                    <span className="text-xs text-green-700 bg-green-100 border border-green-200 px-3 py-1 rounded-full font-bold">
                      ✓ Vérifié
                    </span>
                  )}
                </div>

                <div className="relative mb-5 overflow-hidden rounded-2xl">
                  <img 
                    src={logement.image} 
                    alt={logement.titre} 
                    className="h-52 w-full object-cover" 
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs px-3 py-1 rounded-lg font-semibold shadow">
                    📍 {logement.quartier}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 text-slate-900">{logement.titre}</h3>
                <p className="text-xs text-slate-400 mb-3">Proposé par {logement.proprietaire}</p>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {logement.description}
                </p>
              </div>

              <div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-5 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Loyer mensuel :</span>
                  <span className="text-xl font-black text-slate-900">{logement.prix}</span>
                </div>

                {/* Bouton avec texte blanc explicite */}
                <a 
                  href="#contact" 
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow text-center"
                >
                  <span className="text-white">Afficher le contact</span>
                  <span className="text-white text-xs">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 02 / À PROPOS */}
      <section id="apropos" className="container mx-auto px-6 py-16 border-t border-slate-200">
        <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">
          02 / À PROPOS
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-6 text-slate-900">
          Plus qu'un toit. <span className="text-slate-600">Un chez-soi à Goma.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl leading-relaxed mb-8">
          Goma Héberge facilite la recherche et la location de logements fiables grâce à une sélection rigoureuse de biens immobiliers adaptés à la réalité locale.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <span className="text-slate-400 font-mono text-sm">01</span>
            <h3 className="text-lg font-bold mt-2 mb-2 text-slate-900">Logements vérifiés</h3>
            <p className="text-sm text-slate-600">Tous nos biens immobiliers sont contrôlés pour garantir votre sécurité et votre confort.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <span className="text-slate-400 font-mono text-sm">02</span>
            <h3 className="text-lg font-bold mt-2 mb-2 text-slate-900">Réservation simplifiée</h3>
            <p className="text-sm text-slate-600">Un processus rapide et direct pour trouver votre logement sans tracasseries.</p>
          </div>
          <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
            <span className="text-slate-400 font-mono text-sm">03</span>
            <h3 className="text-lg font-bold mt-2 mb-2 text-slate-900">Emplacements stratégiques</h3>
            <p className="text-sm text-slate-600">Des résidences situées dans les meilleurs quartiers de Goma.</p>
          </div>
        </div>
      </section>

      {/* SECTION 03 / CONTACT */}
      <section id="contact" className="container mx-auto px-6 py-16 border-t border-slate-200 mb-12">
        <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div>
            <span className="text-slate-400 text-xs font-bold tracking-widest uppercase">
              03 / CONTACT
            </span>
            <h2 className="text-3xl font-extrabold mt-2 mb-3 text-white">Besoin d'un logement ?</h2>
            <p className="text-slate-300 max-w-md text-sm leading-relaxed">
              Contactez-nous dès aujourd'hui pour planifier une visite ou réserver votre prochain séjour.
            </p>
          </div>
          <a 
            href="mailto:contact@gomaheberge.cd" 
            className="bg-grey hover:bg-slate-100 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow whitespace-nowrap"
          >
            Envoyer un message →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 bg-white">
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 text-white font-black px-2 py-0.5 rounded text-xs">
            G
          </div>
          <span className="font-semibold text-slate-800">GomaHéberge</span>
        </div>
        <p>© 2026 Goma Héberge. Goma, RDC.</p>
        <a href="#" className="hover:text-slate-900 transition-colors">Retour en haut ↑</a>
      </footer>

    </main>
  );
}