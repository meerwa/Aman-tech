import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#211A44] text-white py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Aman-Tech Logo" width={40} height={40} className="rounded-sm" />
            <span className="text-xl font-bold text-white">Aman-Tech</span>
          </div>
          <p className="text-sm text-gray-300">
            Nous proposons la première application marocaine qui protège contre la cyberviolence et vérifie les liens
            malveillants, offrant ainsi une solution de premier ordre pour sécuriser les utilisateurs à l'ère numérique.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                À Propos
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300">Vérificateur de Liens Malveillants </li>
            <li className="text-sm text-gray-300">Contenu Éducatif en Darija</li>
            <li className="text-sm text-gray-300">Ateliers de Sensibilisation </li>
            <li className="text-sm text-gray-300">Conseil IT</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +212 6 66 66 66 66
            </li>
            <li className="text-sm text-gray-300 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              help.amantech@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-gray-700">
        <p className="text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Aman-Tech. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

