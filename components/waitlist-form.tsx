"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation simple de l'email
    if (!email || !email.includes("@")) {
      setError("Veuillez entrer une adresse email valide")
      return
    }

    setIsSubmitting(true)

    // Simulation d'envoi (à remplacer par votre logique réelle)
    try {
      // Ici, vous pourriez intégrer un service comme Mailchimp, SendGrid, etc.
      // Pour l'instant, nous simulons juste une réponse réussie
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      setEmail("")
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {isSubmitted ? (
        <div className="bg-[#4F772E]/10 border border-[#4F772E]/20 rounded-lg p-6 text-center">
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
            className="h-12 w-12 text-[#4F772E] mx-auto mb-4"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="m9 11 3 3L22 4"></path>
          </svg>
          <h3 className="text-xl font-bold text-[#4F772E] mb-2">Merci pour votre inscription!</h3>
          <p className="text-gray-600">Nous vous tiendrons informé du lancement de notre application.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit" className="bg-[#270F41] hover:bg-[#1a0a2d] whitespace-nowrap" disabled={isSubmitting}>
              {isSubmitting ? "Envoi..." : "Me notifier"}
            </Button>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      )}
    </div>
  )
}
