"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/purple-bg.png" alt="Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">OUR SERVICES</h1>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Areas of Expertise</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Aman-Tech helps you navigate the internet safely with simple, accessible tools tailored to the Moroccan
              context. Whether you're checking a link, learning about digital risks, or reporting harmful content, our
              app supports you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Malicious Link Checker",
                description:
                  "Our advanced tool analyzes suspicious links to detect potential threats, protecting you against phishing attempts, malware, and other online dangers.",
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
                color: "#270F41",
              },
              {
                title: "Educational Content in Darija",
                description:
                  "We offer educational content accessible in Moroccan dialect (Darija) to raise awareness among all users about the risks of cyber violence and good online safety practices.",
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
                    className="h-10 w-10 text-[#4F772E] group-hover:text-white"
                  >
                    <path d="M12 20V4"></path>
                    <path d="M18 12H4"></path>
                    <path d="M4 12a8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8 8 8 0 0 0-8 8z"></path>
                  </svg>
                ),
                color: "#4F772E",
              },
              {
                title: "Awareness Workshops",
                description:
                  "Our interactive workshops offer practical training on cybersecurity, adapted to all skill levels, to help users recognize and avoid online threats.",
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
                    className="h-10 w-10 text-[#001952] group-hover:text-white"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                color: "#001952",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg text-center transition-all duration-300 group hover:shadow-lg"
                style={{ borderLeft: "0px solid transparent" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderLeft = `4px solid ${service.color}`
                  e.currentTarget.style.backgroundColor = `${service.color}10`
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderLeft = "0px solid transparent"
                  e.currentTarget.style.backgroundColor = ""
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300" style={{ color: service.color }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service - Malicious Link Checker */}
      <section className="py-20 bg-gray-50 group hover:bg-gray-100 transition-all duration-300">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#270F41]/10 px-4 py-2 rounded-full text-[#270F41] font-medium mb-4">
                Featured Service
              </div>
              <h2 className="text-3xl font-bold text-[#270F41] mb-6">Malicious Link Checker</h2>
              <p className="text-gray-600 mb-4">
                Our malicious link checker is an innovative tool that analyzes URLs in real-time to detect potential
                threats. This solution protects you against phishing, malware, and other web dangers.
              </p>
              <p className="text-gray-600 mb-6">
                Designed to be accessible to everyone, our checker is easy to use and provides clear and understandable
                results, allowing you to navigate safely on the internet.
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
                  <span className="text-gray-700">Real-time URL analysis</span>
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
                  <span className="text-gray-700">Phishing site detection</span>
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
                  <span className="text-gray-700">Malware identification</span>
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
                  <span className="text-gray-700">Simple interface accessible in Darija</span>
                </li>
              </ul>
              <Button className="bg-[#4F772E] hover:bg-[#3d5c24]">Try Now</Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/amansecure.jpg" alt="Link Checker" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Approach</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              A simple and effective method to ensure your online safety
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Prevention",
                description: "We help you identify potential risks before they become real threats",
                color: "#270F41",
              },
              {
                step: "02",
                title: "Education",
                description: "We provide you with the knowledge needed to recognize and avoid online dangers",
                color: "#001952",
              },
              {
                step: "03",
                title: "Protection",
                description: "We provide you with effective tools to secure your digital presence",
                color: "#4F772E",
              },
              {
                step: "04",
                title: "Support",
                description: "We stay by your side to help you navigate safely in the digital universe",
                color: "#81AD70",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div
                  className="bg-gray-50 p-8 rounded-lg text-center transition-all duration-300 h-full hover:shadow-lg"
                  style={{ borderTop: "0px solid transparent" }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderTop = `4px solid ${process.color}`
                    e.currentTarget.style.backgroundColor = `${process.color}10`
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderTop = "0px solid transparent"
                    e.currentTarget.style.backgroundColor = ""
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold transition-all duration-300"
                    style={{ backgroundColor: process.color }}
                  >
                    {process.step}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: process.color }}
                  >
                    {process.title}
                  </h3>
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
                      className="h-8 w-8 text-[#270F41]"
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
      <section className="py-16 bg-[#270F41] text-white group transition-all duration-300 hover:bg-[#001952]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to secure your online experience?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discover how our services can help you navigate safely in the digital universe.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#270F41] hover:bg-gray-100 group-hover:text-[#001952]">Contact Us</Button>
          </Link>

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Follow Us on Social Media</h3>
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
                  className="h-6 w-6"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
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
          </div>
        </div>
      </section>
    </>
  )
}
