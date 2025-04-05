import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#001952] overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/network-bg.jpg" alt="Network Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">À PROPOS DE NOUS</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Chez Aman Tech, nous proposons la première application marocaine qui offre la vérification des liens
            malveillants et sensibilise les utilisateurs en Darija sur les dangers de la cyberviolence, alliant passion
            pour la technologie et engagement envers l'excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/about-company.jpg" alt="Aman Tech Office" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#211A44] mb-6">Notre Histoire</h2>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4">
                  <Image src="/logo.png" alt="Aman Tech Logo" width={64} height={64} className="rounded-sm" />
                </div>
                <p className="text-gray-600 italic text-left">
                  "Protéger et sensibiliser dans un monde numérique en constante évolution"
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                Fondée en 2024, Aman Tech est née de la vision de créer des solutions technologiques innovantes qui
                répondent aux défis complexes des entreprises modernes. Ce qui a commencé comme une petite équipe de
                passionnés s'est rapidement développé pour devenir un acteur majeur du secteur IT.
              </p>
              <p className="text-gray-600 mb-4">
                Au fil des années, nous avons constamment évolué, adoptant les dernières technologies et méthodologies
                pour offrir des services de premier ordre à nos clients. Notre engagement envers l'excellence et
                l'innovation nous a permis de bâtir une réputation solide et de gagner la confiance de nombreuses
                entreprises à travers le monde.
              </p>
              <p className="text-gray-600">
                Aujourd'hui, Aman Tech continue de repousser les limites de ce qui est possible dans le domaine de la
                technologie, en restant fidèle à sa mission d'autonomiser les entreprises grâce à des solutions IT
                transformatrices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Notre Mission & Vision</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Guidés par des valeurs fortes et une vision claire pour l'avenir
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#5C5692]/10 flex items-center justify-center">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#211A44] mb-4 text-center">Notre Mission</h3>
              <p className="text-gray-600 text-center">
                Fournir des solutions IT innovantes et fiables qui permettent aux entreprises de toutes tailles de
                prospérer dans un monde numérique en constante évolution, en combinant expertise technique,
                compréhension des besoins métier et service client exceptionnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#4F772E]/10 flex items-center justify-center">
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
                    className="h-8 w-8 text-[#4F772E]"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#211A44] mb-4 text-center">Notre Vision</h3>
              <p className="text-gray-600 text-center">
                Devenir le partenaire technologique de référence, reconnu pour notre capacité à transformer les défis en
                opportunités grâce à des solutions IT avant-gardistes, tout en contribuant à un avenir numérique plus
                inclusif, sécurisé et durable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Notre Équipe</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Rencontrez les experts passionnés qui font d'Aman Tech ce qu'elle est aujourd'hui
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Lina El Khaiter",
                role: "CEO",
                image: "/team-1.jpg",
                bio: "Fondatrice et visionnaire d'Aman Tech, avec une passion pour la cybersécurité et l'innovation technologique au service de la société.",
              },
              {
                name: "Hibat Allah El Amrani",
                role: "CMO",
                image: "/team-2.jpg",
                bio: "Experte en marketing digital et communication, spécialisée dans la sensibilisation aux enjeux de la cybersécurité.",
              },
              {
                name: "Marwa BENKADDA",
                role: "COO",
                image: "/team-3.jpg",
                bio: "Responsable des opérations avec une solide expérience avec un background en cybersécurité, je pilote les opérations et des projets innovants axés sur la tech et l'impact social.",
              },
              {
                name: "Aya El Karmi",
                role: "CTO",
                image: "/team-4.jpg",
                bio: "Ingénieure en informatique spécialisée en développement de solutions de cybersécurité et d'intelligence artificielle.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#211A44]">{member.name}</h3>
                  <p className="text-[#5C5692] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Nos Valeurs</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Les principes fondamentaux qui guident nos actions et nos décisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "Nous cherchons constamment à améliorer et innover nos solutions pour transformer l'expérience utilisateur.",
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
                    className="h-8 w-8 text-[#5C5692]"
                  >
                    <path d="M12 2v8"></path>
                    <path d="m4.93 10.93 1.41 1.41"></path>
                    <path d="M2 18h2"></path>
                    <path d="M20 18h2"></path>
                    <path d="m19.07 10.93-1.41 1.41"></path>
                    <path d="M22 22H2"></path>
                    <path d="M16 6a4 4 0 0 0-8 0"></path>
                    <path d="M16 18a4 4 0 0 0-8 0"></path>
                  </svg>
                ),
              },
              {
                title: "Excellence",
                description: "Nous nous efforçons d'atteindre l'excellence dans chaque aspect de notre travail",
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
                    className="h-8 w-8 text-[#5C5692]"
                  >
                    <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z"></path>
                  </svg>
                ),
              },
              {
                title: "Intégrité",
                description: "Nous agissons avec honnêteté, transparence et éthique dans toutes nos interactions",
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
                    className="h-8 w-8 text-[#5C5692]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description:
                  "Nous croyons au pouvoir du travail d'équipe et de la collaboration pour atteindre des résultats exceptionnels",
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
                    className="h-8 w-8 text-[#5C5692]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Responsabilité",
                description:
                  "Nous assumons la responsabilité de nos actions et tenons nos engagements envers nos clients et partenaires",
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
                    className="h-8 w-8 text-[#5C5692]"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                ),
              },
              {
                title: "Client d'abord",
                description: "Nous plaçons les besoins de nos clients au centre de tout ce que nous faisons",
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
                    className="h-8 w-8 text-[#5C5692]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#5C5692]/10 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#211A44] mb-2 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5C5692] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez l'équipe Aman Tech</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe dynamique. Découvrez
            nos opportunités de carrière.
          </p>
          <Button className="bg-white text-[#5C5692] hover:bg-gray-100">Voir nos offres d'emploi</Button>
        </div>
      </section>
    </>
  )
}

