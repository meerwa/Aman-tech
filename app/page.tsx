"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import WaitlistForm from "@/components/waitlist-form"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#270F41] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/purple-bg.png" alt="Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">WELCOME TO AMAN TECH</h1>
          <p
            className="text-3xl font-bold text-white mt-20 italic"
            dir="rtl"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            كليك آمن ، خطوة محمية!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Aman-Tech helps you navigate the internet safely with simple, accessible tools tailored to the Moroccan
              context. Whether you're checking a link, learning about digital risks, or reporting harmful content, our
              app supports you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Link Verification",
                description: "Verification of malicious and suspicious links",
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
                    className="h-10 w-10 text-[#270F41] group-hover:text-white"
                  >
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                ),
              },
              {
                title: "Awareness",
                description: "User awareness against computer threats and malicious links",
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
                    className="h-10 w-10 text-[#270F41] group-hover:text-white"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                ),
              },
              {
                title: "Darija-Based Accessibility",
                description:
                  "Content and interfaces accessible in Moroccan dialect to make cybersecurity understandable by all",
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
                    className="h-10 w-10 text-[#270F41] group-hover:text-white"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-all duration-300 group hover:bg-[#270F41]"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#270F41] mb-2 group-hover:text-white">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16 bg-[#270F41] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Soyez les premiers informés du lancement</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Inscrivez-vous pour recevoir une notification dès que notre application sera disponible. Restez à
            l'avant-garde de la sécurité numérique.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* About Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">About Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our comprehensive suite of services is designed to protect and educate users of all ages and technical
              backgrounds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#270F41] mb-4">Comprehensive Digital Protection</h3>
              <p className="text-gray-600 mb-4">
                At Aman-Tech, we believe that digital safety should be accessible to everyone. Our services are designed
                with simplicity and effectiveness in mind, ensuring that users of all technical backgrounds can protect
                themselves online.
              </p>
              <p className="text-gray-600 mb-6">
                From our malicious link checker that helps identify potential threats to our educational content in
                Darija that makes cybersecurity concepts understandable to all Moroccans, our goal is to create a safer
                digital environment for everyone.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#4F772E] mt-1"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">
                    User-friendly interfaces designed for all ages and technical abilities
                  </span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#4F772E] mt-1"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">Content in Darija to ensure accessibility for all Moroccans</span>
                </li>
                <li className="flex items-start gap-2">
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
                    className="h-5 w-5 text-[#4F772E] mt-1"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-gray-700">Regular updates to protect against emerging threats</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-[350px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/link-safety-checker.png"
                alt="Link Safety Checker"
                fill
                className="object-contain bg-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white group hover:bg-gray-100 transition-all duration-300">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#270F41] mb-6">About Aman Tech</h2>
              <p className="text-gray-600 mb-4">
                Aman-Tech helps you navigate the internet safely with simple, accessible tools tailored to the Moroccan
                context. Whether you're checking a link, learning about digital risks, or reporting harmful content, our
                app supports you every step of the way.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of passionate experts is dedicated to offering customized solutions that address the unique
                challenges of each user, combining technical expertise and a deep understanding of the needs of all
                ages, to ensure a secure and enriching online experience.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cqMN8muUuwbl7vlPl074s7QCq7Yprq.png"
                alt="Aman Tech Team"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Partners</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We collaborate with leading organizations to enhance digital safety and awareness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-32 h-20 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xUBKtYCoqNjd1eEUZcLkPQFgstnwuN.png"
                    alt="Enabel Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#270F41]">Enabel</h3>
              </div>
              <p className="text-gray-600">
                Enabel is the Belgian development agency. It implements and coordinates Belgium's international
                development policy. Enabel has been supporting Aman-Tech through their digital innovation initiatives,
                helping us develop solutions that address real-world digital safety challenges in Morocco.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <div className="w-32 h-20 flex items-center justify-center">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iFbNnatkOv9b2PGwHCmHUoKU5wxAcB.png"
                    alt="Orange Logo"
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#270F41]">Orange</h3>
              </div>
              <p className="text-gray-600">
                Orange is a leading telecommunications operator in Morocco and globally. Through their digital inclusion
                programs, Orange has been supporting Aman-Tech's mission to make digital safety accessible to all
                Moroccans, regardless of their technical background or location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white group hover:bg-gray-50 transition-all duration-300">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Solutions</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              Discover our innovative solutions to protect and educate all users
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "AmanSecure",
                description:
                  "Comprehensive security solution to protect your sensitive data against online threats and cyber attacks",
                image: "/amansecure.jpg",
                color: "#4F772E",
              },
              {
                title: "Aman Awareness",
                description:
                  "Educational video capsules in Darija to raise awareness among all users about the dangers of cyber violence and good online safety practices",
                image: "/amansensibilisation.jpg",
                color: "#270F41",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group"
                style={{ borderColor: "transparent", borderWidth: "2px" }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = product.color)}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "transparent")}
              >
                <div className="relative h-64">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: product.color }}
                  >
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#270F41] text-white group transition-all duration-300 hover:bg-[#001952]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to secure your online experience and raise awareness about digital issues?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to explore your needs and discover how our solutions can help you achieve your goals while
            ensuring your online safety.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#270F41] hover:bg-gray-100 group-hover:text-[#001952]">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
