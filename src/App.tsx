import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeader";
import ServiceCard from "./components/ServiceCard";
import PackageCard from "./components/PackageCard";
import Footer from "./components/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import ScrollToTop from "./components/ScrollToTop";
import {
  INDIVIDUAL_SERVICES,
  THERAPEUTIC_SERVICES,
  FACIAL_SERVICES,
  BODY_PACKAGES,
  SPECIAL_PACKAGES,
  MASSAGE_IMAGE,
  SERVICE_CLEANING_IMAGE,
  SERVICE_MASSAGE_IMAGE,
  CRYSTAL_DETAIL,
  CANDLE_OIL_IMAGE,
  SILK_TEXTURE,
  HERO_IMAGE,
  LAYS_IMAGE,
} from "./constants";
import { getWhatsAppLink, getWhatsAppMessages } from "./utils";
import { MessageCircle } from "lucide-react";

type Page = "home" | "privacy" | "terms";

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#privacidade") {
        setCurrentPage("privacy");
      } else if (hash === "#termos") {
        setCurrentPage("terms");
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const handleNavigateToPrivacy = () => {
    setCurrentPage("privacy");
    window.location.hash = "privacidade";
    window.scrollTo(0, 0);
  };

  const handleNavigateToTerms = () => {
    setCurrentPage("terms");
    window.location.hash = "termos";
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    window.location.hash = "";
    window.scrollTo(0, 0);
  };

  // Render legal pages
  if (currentPage === "privacy") {
    return <PrivacyPolicy onBack={handleBackToHome} isDark={isDark} />;
  }

  if (currentPage === "terms") {
    return <TermsOfUse onBack={handleBackToHome} isDark={isDark} />;
  }

  // Render home page
  return (
    <div className="bg-sky-50 dark:bg-sky-950 min-h-screen text-midnight-950 dark:text-champagne-100 font-sans selection:bg-champagne-500 selection:text-black transition-colors duration-700 overflow-x-hidden max-w-full">
      <Navigation toggleTheme={toggleTheme} isDark={isDark} />

      <main>
        <Hero />

        {/* 1. ESSENTIALS (Individual) - The Texture Moodboard Layout */}
        <section
          id="individuais"
          className="pt-24 pb-12 relative overflow-hidden bg-sky-50 dark:bg-slate-950 transition-colors duration-700"
        >
          {/* Decorative Background Blur */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-champagne-500/10 dark:bg-champagne-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* LEFT: Content & Menu */}
              <div className="lg:col-span-6 xl:col-span-5 relative z-10">
                <SectionHeader
                  title={INDIVIDUAL_SERVICES.title}
                  subtitle={INDIVIDUAL_SERVICES.subtitle}
                />
                <div className="mt-12 space-y-2">
                  {INDIVIDUAL_SERVICES.items.map((item, idx) => (
                    <ServiceCard key={idx} item={item} />
                  ))}
                </div>
              </div>

              {/* RIGHT: Image Composition (The "Moodboard") */}
              <div className="lg:col-span-6 xl:col-span-7 relative min-h-[600px] hidden md:block mt-36">
                {/* Image 1: Main Texture/Close up (Cream) */}
                <div className="absolute top-0 right-0 w-3/4 h-[500px] overflow-hidden rounded-sm shadow-2xl shadow-midnight-950/10 dark:shadow-black/20 group z-10">
                  <div className="absolute inset-0 bg-midnight-950/10 dark:bg-black/20 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                  <img
                    src={SERVICE_CLEANING_IMAGE}
                    alt="Textura de creme estético em close-up"
                    width={600}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                  />
                </div>

                {/* Image 2: Detail (Hands/Touch) - Overlapping */}
                <div className="absolute bottom-10 left-10 w-1/2 h-[350px] overflow-hidden rounded-sm shadow-2xl z-20 group">
                  <img
                    src={SERVICE_MASSAGE_IMAGE}
                    alt="Detalhe de mãos realizando toque suave e delicado"
                    width={400}
                    height={350}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                </div>

                {/* Graphic Lines */}
                <div className="absolute inset-0 border border-champagne-500/20 m-8 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THERAPEUTIC - The Altar Composition Layout */}
        <section
          id="terapeutico"
          className="relative pt-24 pb-12 overflow-hidden bg-champagne-50 dark:bg-midnight-800 transition-colors duration-700"
        >
          <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            {/* LEFT: Image "Altar" Composition */}
            <div className="hidden lg:block lg:col-span-6 relative h-[800px]">
              {/* Main Pillar Image (Tarot/Vertical) */}
              <div className="absolute top-10 left-20 w-[60%] h-[700px] z-10 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-midnight-950/10 dark:bg-black/20 group-hover:opacity-0 transition-opacity duration-700 z-10"></div>
                <img
                  src={THERAPEUTIC_SERVICES.coverImage}
                  alt="Composição de cartas de tarot e elementos de rituais terapêuticos"
                  width={500}
                  height={700}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[3s] group-hover:scale-105"
                />
              </div>

              {/* Secondary Element (Candle/Oil) - Floating Right */}
              <div className="absolute top-32 right-10 w-[35%] h-[250px] z-20 shadow-xl overflow-hidden group">
                <img
                  src={CANDLE_OIL_IMAGE}
                  alt="Velas aromáticas e óleos essenciais para rituais terapêuticos"
                  width={300}
                  height={250}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
              </div>

              {/* Tertiary Element (Crystal/Light) - Bottom Left Overlay */}
              <div className="absolute bottom-20 left-0 w-[40%] h-[300px] z-30 shadow-2xl overflow-hidden group">
                <img
                  src={CRYSTAL_DETAIL}
                  srcSet={`${CRYSTAL_DETAIL.replace(
                    "w=1200",
                    "w=350"
                  )} 350w, ${CRYSTAL_DETAIL.replace(
                    "w=1200",
                    "w=600"
                  )} 600w, ${CRYSTAL_DETAIL} 1200w`}
                  sizes="(max-width: 768px) 40vw, 350px"
                  alt="Cristais e reflexos de luz para harmonização energética"
                  width={350}
                  height={300}
                  loading="lazy"
                  className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-[3s] group-hover:scale-110"
                />
              </div>

              {/* Graphic Lines */}
              <div className="absolute inset-0 border border-champagne-500/20 m-8 z-0"></div>
            </div>

            {/* RIGHT: Content */}
            <div className="lg:col-span-6 pl-0 lg:pl-12">
              <SectionHeader
                title={THERAPEUTIC_SERVICES.title}
                subtitle={THERAPEUTIC_SERVICES.subtitle}
              />

              <div>
                <div className="space-y-4 mt-12">
                  {THERAPEUTIC_SERVICES.items.map((item, idx) => (
                    <ServiceCard key={idx} item={item} />
                  ))}
                </div>

                <div className="mt-16 max-w-md relative pl-6">
                  {/* Solid Line Decoration */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-champagne-500/50"></div>
                  <p className="font-script text-3xl text-champagne-600 dark:text-champagne-400 mb-4">
                    A Cura pela Essência
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed text-justify">
                    Nossos rituais terapêuticos não são apenas procedimentos,
                    são portais de reconexão. Utilizamos a sabedoria ancestral
                    das cartas e a energia vital do Reiki para alinhar o que
                    está invisível, mas que define o seu brilho exterior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FACIAL - GLOW (Clean, Clinical but luxe) */}
        <section
          id="facial"
          className="pt-24 pb-12 bg-sky-50 dark:bg-slate-950 transition-colors duration-700"
        >
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center text-center">
              <SectionHeader
                title={FACIAL_SERVICES.title}
                subtitle={FACIAL_SERVICES.subtitle}
                centered
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              {/* Image Left */}
              <div className="md:col-span-1 h-[600px] overflow-hidden relative group">
                <img
                  src={FACIAL_SERVICES.coverImage}
                  alt="Tratamento facial com produtos de spa e técnicas de revitalização"
                  width={500}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-champagne-50/10 dark:bg-midnight-950/20"></div>
              </div>

              {/* Menu Center/Right */}
              <div className="md:col-span-2 flex flex-col justify-center px-4 md:px-12">
                <div className="space-y-4">
                  {FACIAL_SERVICES.items.map((item, idx) => (
                    <ServiceCard key={idx} item={item} />
                  ))}
                </div>

                {/* Highlight Box for Peeling */}
                <div className="mt-16 p-8 border border-champagne-500/20 bg-champagne-50 dark:bg-midnight-800/70 relative overflow-hidden transition-colors duration-700 shadow-sm">
                  <div className="absolute top-0 left-0 w-1 h-full bg-champagne-500"></div>
                  <h4 className="font-display text-2xl text-midnight-900 dark:text-champagne-200 mb-4">
                    Transformação do Olhar
                  </h4>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
                      Nosso protocolo exclusivo de peeling para olheiras é um
                      tratamento completo de 6 semanas para renovar a densidade
                      e a coloração da pele sensível dos olhos.
                    </p>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <span className="block font-gloock text-4xl text-champagne-500 dark:text-champagne-400">
                          06
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">
                          Sessões
                        </span>
                      </div>
                      <div className="w-px h-12 bg-midnight-950/10 dark:bg-white/10"></div>
                      <div className="text-center">
                        <span className="block font-gloock text-4xl text-champagne-500 dark:text-champagne-400">
                          100%
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-gray-500">
                          Renovação
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. BODY - SENSORIAL (Massage) */}
        <section
          id="corporais"
          className="pt-24 pb-12 bg-champagne-50 dark:bg-midnight-800 transition-colors duration-700"
        >
          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
              <div>
                <SectionHeader
                  title={BODY_PACKAGES.title}
                  subtitle="Esculpir o corpo, acalmar a mente."
                />
                <div className="mt-12 space-y-6">
                  {/* Visual representation of body packages */}
                  {BODY_PACKAGES.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group border-b border-midnight-950/5 dark:border-white/5 py-4 hover:pl-4 transition-all duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-gloock text-xl text-midnight-900 dark:text-champagne-100 group-hover:text-champagne-600 dark:group-hover:text-champagne-400 transition-colors">
                          {item.name}
                        </span>
                        <span className="font-gloock text-gray-500 dark:text-gray-400">
                          {item.price.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      </div>
                      <div className="overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 mt-2">
                        <a
                          href={getWhatsAppLink(
                            getWhatsAppMessages.bodyPackage(
                              item.name,
                              item.price
                            )
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-champagne-600 dark:text-champagne-400 hover:text-champagne-700 dark:hover:text-champagne-300 transition-colors"
                        >
                          <MessageCircle size={12} /> Agendar
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative max-w-lg mx-auto mt-14">
                <div className="absolute -inset-4 border border-champagne-600/20 rounded-full animate-slow-spin"></div>
                <div className="aspect-[4/5] max-h-[600px] rounded-[8rem] overflow-hidden relative">
                  <img
                    src={MASSAGE_IMAGE}
                    alt="Massagem terapêutica relaxante com técnicas manuais"
                    width={480}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-champagne-50/80 to-transparent dark:from-midnight-950/80 dark:to-transparent flex items-end justify-center pb-10 transition-colors duration-700">
                    <p className="font-script text-3xl text-midnight-900 dark:text-champagne-200">
                      Toque de Cura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. RITUALS (Packages) - The Silk Texture Backdrop */}
        <section
          id="especiais"
          className="pt-24 pb-12 relative bg-sky-50 dark:bg-slate-950 transition-colors duration-700"
        >
          <div
            className="absolute inset-0 bg-cover opacity-20 dark:opacity-8 mix-blend-multiply dark:mix-blend-overlay fixed-attachment transition-all duration-700"
            style={{ backgroundImage: `url(${SILK_TEXTURE})` }}
          ></div>

          <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
            <SectionHeader
              title="Exclusivos"
              subtitle="Experiências desenhadas para momentos únicos."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {SPECIAL_PACKAGES.map((pkg) => (
                <PackageCard key={pkg.id} item={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* 6. ABOUT (Sobre Mim) - Personal Story Section */}
        <section
          id="sobre"
          className="pt-24 pb-12 relative overflow-hidden bg-champagne-50 dark:bg-midnight-800 transition-colors duration-700"
        >
          {/* Decorative Background Blur */}
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-champagne-500/10 dark:bg-champagne-500/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-[90rem] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
              {/* Section Header - First on mobile only */}
              <div className="lg:hidden order-1">
                <SectionHeader
                  title="Sobre Mim"
                  subtitle="A conexão entre beleza e bem-estar."
                />
              </div>

              {/* LEFT: Image - Second on mobile, first on desktop */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="aspect-[3/4] max-w-md mx-auto relative group">
                  {/* Decorative Border */}
                  <div className="absolute -inset-4 border border-champagne-500/20 rounded-sm rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>

                  {/* Image Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-sm">
                    <img
                      src={LAYS_IMAGE}
                      alt="Lays Sonego - Esteticista e Terapeuta"
                      width={600}
                      height={800}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[3s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-champagne-50/40 via-transparent to-transparent dark:from-midnight-950/40 opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Content - Third on mobile, second on desktop */}
              <div className="lg:col-span-7 flex flex-col justify-center order-3 lg:order-2">
                {/* Section Header - Hidden on mobile, visible on desktop */}
                <div className="hidden lg:block">
                  <SectionHeader
                    title="Sobre Mim"
                    subtitle="A conexão entre beleza e bem-estar."
                  />
                </div>

                <div className="mt-12 space-y-6">
                  <div className="pl-6 border-l-2 border-champagne-500/30 dark:border-champagne-400/30">
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                      Sou Lays Sonego, <strong>Fisioterapeuta</strong>{" "}
                      especializada em <strong>Estética Integrativa</strong> e{" "}
                      <strong>Terapias Holísticas</strong>, dedicada a
                      transformar cuidados em experiências sensoriais e rituais
                      de reconexão. Minha abordagem une técnicas estéticas
                      modernas com sabedoria terapêutica ancestral, criando
                      momentos que curam tanto o corpo quanto a alma.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-4">
                      Acredito que cada tratamento é uma oportunidade de
                      transformação. Por isso, combino Reiki, consultas
                      oraculares e massagens terapêuticas com tratamentos
                      estéticos de alta performance, para que você saia daqui
                      não apenas mais bonita, mas também mais leve e conectada
                      com sua essência.
                    </p>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Minha missão é cuidar de você de forma integral, honrando
                      a conexão entre beleza exterior e bem-estar interior em
                      cada sessão.
                    </p>
                  </div>

                  {/* Signature/Quote */}
                  <div className="mt-12 pt-8 border-t border-champagne-500/20 dark:border-champagne-400/20">
                    <p className="font-script text-3xl md:text-4xl text-champagne-600 dark:text-champagne-400 mb-4 italic text-center md:text-left">
                      "A beleza verdadeira nasce da harmonia entre corpo e alma"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onNavigateToPrivacy={handleNavigateToPrivacy}
        onNavigateToTerms={handleNavigateToTerms}
      />

      <ScrollToTop />
    </div>
  );
};

export default App;
