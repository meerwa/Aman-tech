import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#001952] overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/network-bg.jpg" alt="Network Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">NOS SERVICES</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Des solutions complètes pour assurer votre sécurité dans l'ère numérique
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Nos Domaines d'Expertise</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Chez Aman Tech, nous proposons une gamme complète de services, incluant la protection contre la
              cyberviolence, un vérificateur de liens malveillants, et du contenu éducatif, pour assurer la sécurité de
              tous les utilisateurs dans l'ère numérique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Vérificateur de Liens Malveillants",
                description:
                  "Notre outil avancé analyse les liens suspects pour détecter les menaces potentielles, vous protégeant ainsi contre les tentatives de phishing, les logiciels malveillants et autres dangers en ligne.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#5C5692]"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                ),
              },
              {
                title: "Contenu Éducatif en Darija",
                description:
                  "Nous proposons du contenu éducatif accessible en dialecte marocain (Darija) pour sensibiliser tous les utilisateurs aux risques de la cyberviolence et aux bonnes pratiques de sécurité en ligne.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#5C5692]"
                  >
                    <path d="M12 20V4"></path>
                    <path d="M18 12H4"></path>
                    <path d="M4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8 8 8 0 0 0-8 8z"></path>
                  </svg>
                ),
              },
              {
                title: "Ateliers de Sensibilisation",
                description:
                  "Nos ateliers interactifs offrent une formation pratique sur la cybersécurité, adaptée à tous les niveaux de compétence, pour aider les utilisateurs à reconnaître et à éviter les menaces en ligne.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#5C5692]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Conseil IT",
                description:
                  "Notre équipe d'experts vous accompagne dans l'optimisation de votre sécurité numérique, en vous proposant des solutions personnalisées adaptées à vos besoins spécifiques.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-[#5C5692]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#211A44] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  variant="outline"
                  className="text-[#5C5692] border-[#5C5692] hover:bg-[#5C5692] hover:text-white"
                >
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service - Vérificateur de Liens */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#5C5692]/10 px-4 py-2 rounded-full text-[#5C5692] font-medium mb-4">
                Service Phare
              </div>
              <h2 className="text-3xl font-bold text-[#211A44] mb-6">Vérificateur de Liens Malveillants</h2>
              <p className="text-gray-600 mb-4">
                Notre vérificateur de liens malveillants est un outil innovant qui analyse en temps réel les URLs pour
                détecter les menaces potentielles. Cette solution vous protège contre le phishing, les logiciels
                malveillants et autres dangers du web.
              </p>
              <p className="text-gray-600 mb-6">
                Conçu pour être accessible à tous, notre vérificateur est simple d'utilisation et fournit des résultats
                clairs et compréhensibles, vous permettant de naviguer en toute sécurité sur internet.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4F772E]"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">Analyse en temps réel des URLs</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4F772E]"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">Détection des sites de phishing</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4F772E]"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">Identification des logiciels malveillants</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[#4F772E]"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">Interface simple et accessible en Darija</span>
                </li>
              </ul>
              <Button className="bg-[#4F772E] hover:bg-[#3d5c24]">Essayer maintenant</Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/link-checker.png" alt="Vérificateur de liens" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Notre Approche</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Une méthode simple et efficace pour assurer votre sécurité en ligne
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Prévention",
                description:
                  "Nous vous aidons à identifier les risques potentiels avant qu'ils ne deviennent des menaces réelles",
              },
              {
                step: "02",
                title: "Éducation",
                description:
                  "Nous vous fournissons les connaissances nécessaires pour reconnaître et éviter les dangers en ligne",
              },
              {
                step: "03",
                title: "Protection",
                description:
                  "Nous mettons à votre disposition des outils efficaces pour sécuriser votre présence numérique",
              },
              {
                step: "04",
                title: "Accompagnement",
                description:
                  "Nous restons à vos côtés pour vous aider à naviguer en toute sécurité dans l'univers numérique",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 rounded-full bg-[#5C5692] text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#211A44] mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-[#5C5692]"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Social Media */}
      <section className="py-16 bg-[#5C5692] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à sécuriser votre expérience en ligne?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour découvrir comment nos services peuvent vous aider à naviguer en toute
            sécurité dans l'univers numérique.
          </p>
          <Button className="bg-white text-[#5C5692] hover:bg-gray-100 mb-8">Nous contacter</Button>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Suivez-nous sur les réseaux sociaux</h3>
            <div className="flex justify-center gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aman.tech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/aman-tech-official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/aman.tech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@aman.tech.official"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <path d="M15 8v8a4 4 0 0 1-4 4H9"></path>
                  <line x1="15" x2="15" y1="4" y2="12"></line>
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm">@aman.tech.official</p>
          </div>
        </div>
      </section>
    </>
  )
}

