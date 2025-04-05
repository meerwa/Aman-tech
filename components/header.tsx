import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Aman-Tech Logo" width={40} height={40} className="rounded-sm" />
          <span className="text-2xl font-bold text-[#5C5692]">Aman-Tech</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-[#5C5692] transition-colors">
            Accueil
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#5C5692] transition-colors">
            À Propos
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-[#5C5692] transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#5C5692] transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
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
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

