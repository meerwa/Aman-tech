import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#001952] overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/network-bg.jpg" alt="Network Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">BIENVENUE CHEZ AMAN TECH</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Chez Aman Tech, nous proposons la première application marocaine qui offre la vérification des liens
            malveillants et sensibilise les utilisateurs en Darija sur les dangers de la cyberviolence, alliant passion
            pour la technologie et engagement envers l'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-[#5C5692] hover:bg-[#4a4575]">Nos Services</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Contactez-nous
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Nos Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Nous proposons une gamme complète de services IT , y compris la protection contre la cyberviolence, le
              vérificateur de liens malveillants, et du contenu éducatif, pour garantir la sécurité et le succès de
              votre entreprise dans l'ère numérique.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vérification des liens",
                description: "Vérification des liens mallveillants et suspectioux",
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
                title: "Sensibilisation ",
                description:
                  "Sensibilisation des utilisateurs contre les menaces informatiques et les lien mallveillants",
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#211A44] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-[#5C5692] hover:bg-[#4a4575]">Voir tous nos services</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#211A44] mb-6">À Propos d'Aman Tech</h2>
              <p className="text-gray-600 mb-4">
                Fondée avec une vision ambitieuse Conçue pour sécuriser et sensibiliser toutes les tranches d'âge, cette
                solution inédite d'Aman Tech vise à protéger les utilisateurs contre les menaces en ligne tout en leur
                fournissant des connaissances essentielles pour naviguer en toute sécurité dans l'univers numérique.
              </p>
              <p className="text-gray-600 mb-6">
                Notre équipe d'experts passionnés est dévouée à offrir des solutions sur mesure qui répondent aux défis
                uniques de chaque utilisateur, en alliant expertise technique et compréhension approfondie des besoins
                de tous les âges, pour garantir une expérience en ligne sécurisée et enrichissante
              </p>
              <Link href="/about">
                <Button className="bg-[#4F772E] hover:bg-[#3d5c24]">En savoir plus</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/about-image.jpg" alt="Aman Tech Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "AmanSecure",
                description:
                  "Solution de sécurité complète pour protéger vos données sensibles contre les menaces en ligne et les cyberattaques",
                image: "/security-image.jpg",
              },
              {
                title: "Aman Sensibilisation",
                description:
                  "Capsules vidéos éducatives en Darija pour sensibiliser tous les utilisateurs aux dangers de la cyberviolence et aux bonnes pratiques de sécurité en ligne",
                image: "/education-video.jpg",
              },
            ].map((product, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#211A44] mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Button
                    variant="outline"
                    className="text-[#5C5692] border-[#5C5692] hover:bg-[#5C5692] hover:text-white"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5C5692] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à sécuriser votre expérience en ligne et à vous sensibiliser aux enjeux du numérique?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour explorer vos besoins et découvrir comment nos solutions peuvent vous
            accompagner dans la réalisation de vos objectifs tout en assurant votre sécurité en ligne.
          </p>
          <Button className="bg-white text-[#5C5692] hover:bg-gray-100">Contactez-nous</Button>
        </div>
      </section>
    </>
  )
}

