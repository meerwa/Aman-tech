import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/purple-bg.png" alt="Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">ABOUT US</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white group hover:bg-gray-50 transition-all duration-300">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cqMN8muUuwbl7vlPl074s7QCq7Yprq.png"
                alt="Aman Tech Team"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#270F41] mb-6">Our History</h2>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 mr-4">
                  <Image src="/logo.png" alt="Aman Tech Logo" width={64} height={64} className="rounded-sm" />
                </div>
                <p className="text-gray-600 italic text-left">
                  "Protecting and raising awareness in an ever-evolving digital world"
                </p>
              </div>
              <p className="text-gray-600 mb-4">
                It all started in November 2024, during a hackathon organized by Enabel at INPT Rabat, focused on
                digital safety challenges. That day, a group of strangers — students in computer science, future
                engineers, and civil society representatives — came together around one shared idea: to build an
                accessible and civil society representatives — came together around one shared idea: to build an
                accessible solution that protects users from online threats. From that collaboration, Aman-Tech was born
                — an app designed to meet local realities and serve all generations. Despite being a newly formed team,
                we proudly won 3rd place in the competition, a recognition that encouraged us to take the project even
                further. Since then, the idea has grown into a real application, driven by a diverse team with a shared
                passion for digital safety. Aman-Tech is no longer just a concept — it's a concrete commitment to a
                safer digital future.
              </p>
              <p className="text-gray-600">
                Today, Aman-Tech continues to push the boundaries of what's possible in the field of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 group hover:bg-gray-100 transition-all duration-300">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Mission & Vision</h2>
            <p className="max-w-2xl mx-auto text-gray-600">Guided by strong values and a clear vision for the future</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-l-4 hover:border-[#270F41]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#270F41]/10 flex items-center justify-center">
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
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#270F41] mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center">
                Aman-Tech's mission is to make internet usage safer for everyone by providing accessible tools to detect
                online threats, raise awareness about digital risks, and enable every user – even without technical
                training – to navigate with confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-l-4 hover:border-[#4F772E]">
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
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#4F772E] mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center">
                Building an inclusive and secure digital ecosystem where every citizen, regardless of their education
                level or location, can access the internet without fear, being informed, protected, and autonomous in
                the face of digital world dangers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white group hover:bg-gray-50 transition-all duration-300">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Team</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Meet the passionate experts who make Aman Tech what it is today
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Lina El Khaiter",
                role: "CEO & Co-founder Amantech",
                image: "/team-1.jpg",
                bio: "Founder and visionary of Aman Tech, with a passion for cybersecurity and technological innovation serving society.",
              },
              {
                name: "Hibat Allah El Amrani",
                role: "CMO & Co-founder Amantech",
                image: "/team-2.jpg",
                bio: "Digital marketing and communication manager, specialized in raising awareness about cybersecurity issues.Currently studying at INPT",
              },
              {
                name: "Marwa BENKADDA",
                role: "COO & Co-founder Amantech",
                image: "/team-3.jpg",
                bio: "Operations manager with solid experience and a background in cybersecurity, currently studying Software Engineering at FSAC. Passionnate about leading operations and innovative projects focused on tech and social impact.",
              },
              {
                name: "Aya El Karmi",
                role: "CTO & Co-founder Amantech",
                image: "/team-4.jpg",
                bio: " A technology enthusiast and innovation-driven professional, currently studying Cloud and IoT Systems at INPT. Passionate about exploring emerging tools and tackling complex challenges through tech competitions and collaborative initiatives.",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group hover:border-t-4 hover:border-[#270F41]"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#270F41]">{member.name}</h3>
                  <p className="text-[#4F772E] font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50 group hover:bg-gray-100 transition-all duration-300">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              The fundamental principles that guide our actions and decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description:
                  "We constantly seek to improve and innovate our solutions to transform the user experience.",
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
                    className="h-8 w-8 text-[#270F41]"
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
                title: "International",
                description: "We strive to reach international standards in every aspect of our work",
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
                    className="h-8 w-8 text-[#270F41]"
                  >
                    <path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z"></path>
                  </svg>
                ),
              },
              {
                title: "Integrity",
                description: "We act with honesty, transparency, and ethics in all our interactions",
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
                    className="h-8 w-8 text-[#270F41]"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                ),
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and collaboration to achieve exceptional results",
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
                    className="h-8 w-8 text-[#4F772E]"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
              {
                title: "Responsibility",
                description:
                  "We take responsibility for our actions and keep our commitments to our clients and partners",
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
                    className="h-8 w-8 text-[#4F772E]"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                ),
              },
              {
                title: "Client First",
                description: "We place our clients' needs at the center of everything we do",
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
                    className="h-8 w-8 text-[#4F772E]"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-t-4 hover:border-[#270F41]"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#270F41]/10 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#270F41] mb-2 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#270F41] text-white group transition-all duration-300 hover:bg-[#001952]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Aman Tech team</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We are always looking for passionate talents to join our dynamic team.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#270F41] hover:bg-gray-100 group-hover:text-[#001952]">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
