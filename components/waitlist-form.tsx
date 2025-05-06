"use client"
import Link from "next/link"

export default function WaitlistForm() {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeYNBOYVWwDaoSlUlXkKM7GDe2gZXUM5XWw4fQZ4ZlreLpOSQ/viewform?usp=header"
          className="inline-block bg-white text-[#270F41] font-medium py-3 px-8 rounded-lg hover:bg-white/90 transition-colors text-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Access the Registration Form
        </Link>
      </div>
    </div>
  )
}
