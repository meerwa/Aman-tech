import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#270F41] text-white py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Aman-Tech Logo" width={40} height={40} className="rounded-sm" />
            <span className="text-xl font-bold text-white">Aman-Tech</span>
          </div>
          <p className="text-sm text-gray-300">
            A digital security application designed in Morocco to protect users against online threats, misinformation,
            and harmful content — in a simple, local, and accessible way for everyone.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/services/application" className="text-sm text-gray-300 hover:text-white transition-colors">
                Application
              </Link>
            </li>
            <li>
              <Link href="/partners" className="text-sm text-gray-300 hover:text-white transition-colors">
                Partners
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
            <li className="text-sm text-gray-300">Malicious Link Checker</li>
            <li className="text-sm text-gray-300">Educational Content in Darija</li>
            <li className="text-sm text-gray-300">Awareness Workshops</li>
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
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              help.amantech@gmail.com
            </li>
          </ul>

          <div className="mt-6">
            <h4 className="font-bold text-white mb-2">Follow Us</h4>
            <div className="flex gap-4">
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
                  className="h-5 w-5 text-white"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>

              {/* LinkedIn - Updated link */}
              <a
                href="https://www.linkedin.com/company/aman-tech-official/?viewAsMember=true"
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
                  className="h-5 w-5 text-white"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* TikTok - Removed text, only icon */}
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
                  className="h-5 w-5 text-white"
                >
                  <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                  <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                  <path d="M15 8v8a4 4 0 0 1-4 4H9"></path>
                  <line x1="15" x2="15" y1="4" y2="12"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mt-12 pt-8 border-t border-gray-700">
        <h3 className="text-lg font-semibold mb-6 text-center">Our Partners</h3>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="bg-white p-4 rounded-lg h-16 w-40 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iFbNnatkOv9b2PGwHCmHUoKU5wxAcB.png"
              alt="Orange Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="bg-white p-4 rounded-lg h-16 w-40 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xUBKtYCoqNjd1eEUZcLkPQFgstnwuN.png"
              alt="Enabel Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center text-gray-400">
            © {new Date().getFullYear()} Aman-Tech. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://www.termsfeed.com/live/a811b775-aea6-49fe-8f2d-361625162f05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
