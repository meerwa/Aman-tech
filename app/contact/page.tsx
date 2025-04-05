"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#001952] overflow-hidden">
        {/* Background Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <Image src="/network-bg.jpg" alt="Network Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">CONTACTEZ-NOUS</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Nous sommes là pour répondre à vos questions et vous aider à éviter les liens mallveillants
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#211A44] mb-6">Envoyez-nous un message</h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les plus brefs délais. Nous
                sommes impatients de discuter de vos besoins et de vous aider.
              </p>

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
                  <h3 className="text-xl font-bold text-[#4F772E] mb-2">Message envoyé avec succès!</h3>
                  <p className="text-gray-600">
                    Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Téléphone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+212 6 66 66 66 66"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Entreprise
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <Select value={formData.subject} onValueChange={handleSelectChange} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Renseignements généraux</SelectItem>
                        <SelectItem value="services">Services</SelectItem>
                        <SelectItem value="support">Support technique</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Comment pouvons-nous vous aider?"
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#5C5692] hover:bg-[#4a4575]" disabled={isSubmitting}>
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              )}
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h3 className="text-2xl font-bold text-[#211A44] mb-6">Informations de contact</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#5C5692]/10 p-3 rounded-full">
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
                        className="h-6 w-6 text-[#5C5692]"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#211A44] mb-1">Téléphone</h4>
                      <p className="text-gray-600">+212 6 66 66 66 66</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#5C5692]/10 p-3 rounded-full">
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
                        className="h-6 w-6 text-[#5C5692]"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#211A44] mb-1">Email</h4>
                      <p className="text-gray-600">help.amantech@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-[#211A44] mb-4">Suivez-nous</h4>
                  <div className="flex gap-4">
                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/aman.tech.official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5C5692]/10 p-3 rounded-full hover:bg-[#5C5692]/20 transition-colors"
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
                        className="h-5 w-5 text-[#5C5692]"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/aman.tech.official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5C5692]/10 p-3 rounded-full hover:bg-[#5C5692]/20 transition-colors"
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
                        className="h-5 w-5 text-[#5C5692]"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://www.tiktok.com/@aman.tech.official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5C5692]/10 p-3 rounded-full hover:bg-[#5C5692]/20 transition-colors"
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
                        className="h-5 w-5 text-[#5C5692]"
                      >
                        <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                        <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                        <path d="M15 8v8a4 4 0 0 1-4 4H9"></path>
                        <line x1="15" x2="15" y1="4" y2="12"></line>
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/company/aman-tech-official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#5C5692]/10 p-3 rounded-full hover:bg-[#5C5692]/20 transition-colors"
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
                        className="h-5 w-5 text-[#5C5692]"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">@aman.tech.official</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#211A44] mb-4">Questions Fréquentes</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Trouvez rapidement des réponses à vos questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Quels sont vos délais de réponse?",
                answer:
                  "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrables. Pour les demandes urgentes, n'hésitez pas à nous appeler directement.",
              },
              {
                question: "Proposez-vous des services de maintenance?",
                answer:
                  "Oui, nous proposons des contrats de maintenance adaptés à vos besoins spécifiques pour assurer le bon fonctionnement de vos systèmes informatiques.",
              },
              {
                question: "Travaillez-vous avec des entreprises de toutes tailles?",
                answer:
                  "Absolument! Nous travaillons avec des entreprises de toutes tailles, des startups aux grandes entreprises, en adaptant nos solutions à leurs besoins spécifiques.",
              },
              {
                question: "Proposez-vous des formations pour vos produits?",
                answer:
                  "Oui, nous proposons des formations complètes pour tous nos produits afin de vous aider à tirer le meilleur parti de vos investissements technologiques.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-[#211A44] mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Vous ne trouvez pas la réponse à votre question? N'hésitez pas à nous contacter.
            </p>
            <Button className="bg-[#5C5692] hover:bg-[#4a4575]">Nous contacter</Button>
          </div>
        </div>
      </section>
    </>
  )
}

