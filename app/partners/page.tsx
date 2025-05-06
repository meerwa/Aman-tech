import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/purple-bg.png" alt="Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">OUR PARTNERS</h1>
        </div>
      </section>

      {/* Partners Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Strategic Partnerships</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Aman-Tech, we collaborate with leading organizations to enhance digital safety and awareness across
              Morocco. Our partners share our vision of creating a safer digital environment for all users.
            </p>
          </div>

          <div className="grid gap-12">
            {/* Enabel Partner Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-[250px] h-[150px] flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xUBKtYCoqNjd1eEUZcLkPQFgstnwuN.png"
                      alt="Enabel Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-[#270F41] mb-4">Enabel</h3>
                  <p className="text-gray-600 mb-4">
                    Enabel is the Belgian development agency that implements and coordinates Belgium's international
                    development policy. With a focus on promoting digital inclusion and innovation, Enabel has been a
                    key partner in supporting Aman-Tech's mission.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Through their Digital for Development (D4D) program, Enabel has provided crucial support for the
                    development of our digital safety solutions, helping us reach vulnerable communities and ensure that
                    everyone has access to the tools and knowledge needed to navigate the digital world safely.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.enabel.be" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#270F41] hover:bg-[#1a0a2d]">Visit Enabel Website</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Orange Partner Section */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-[250px] h-[150px] flex items-center justify-center">
                    <Image
                      src="/orange-logo-large.png"
                      alt="Orange Logo"
                      width={200}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-[#270F41] mb-4">Orange</h3>
                  <p className="text-gray-600 mb-4">
                    Orange is a leading telecommunications operator in Morocco and globally. As a partner of Aman-Tech,
                    Orange supports our mission to make digital safety accessible to all Moroccans, regardless of their
                    technical background or location.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Through their digital inclusion programs and technological expertise, Orange has been instrumental
                    in helping us develop and scale our solutions. Their commitment to corporate social responsibility
                    aligns perfectly with our goal of creating a safer digital environment for everyone.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://www.orange.ma" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[#270F41] hover:bg-[#1a0a2d]">Visit Orange Website</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Services Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">How We Work Together</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our partnerships enable us to deliver comprehensive digital safety solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#270F41] mb-4">Collaborative Approach</h3>
              <p className="text-gray-600 mb-4">
                At Aman-Tech, we work closely with our partners to develop and implement digital safety solutions that
                address the specific needs of Moroccan users. By combining our expertise with the resources and
                knowledge of our partners, we can create more effective and accessible tools.
              </p>
              <p className="text-gray-600 mb-6">
                Our collaborative approach ensures that our solutions are not only technically sound but also culturally
                relevant and accessible to all users, regardless of their technical background or language preferences.
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
                  <span className="text-gray-700">Joint research and development initiatives</span>
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
                  <span className="text-gray-700">Shared resources and expertise</span>
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
                  <span className="text-gray-700">Community outreach and education programs</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[350px] rounded-lg overflow-hidden shadow-md">
              <Image src="/security-image.jpg" alt="Digital Security" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Partnership Benefits</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our partnerships create value for all stakeholders and help us achieve our mission
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expanded Reach",
                description: "Working with established partners helps us reach more users across Morocco",
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
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                  </svg>
                ),
              },
              {
                title: "Technical Expertise",
                description: "Access to specialized knowledge and resources to enhance our solutions",
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
                    <path d="M12 2H2v10h10V2Z"></path>
                    <path d="M12 12H2v10h10V12Z"></path>
                    <path d="M22 2h-10v10h10V2Z"></path>
                    <path d="M22 12h-10v10h10V12Z"></path>
                  </svg>
                ),
              },
              {
                title: "Sustainable Impact",
                description: "Creating long-term solutions that address real community needs",
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
                    <path d="M2 22a8 8 0 1 1 16 0H2Z"></path>
                    <path d="M10 6a6 6 0 0 0 12 0H10Z"></path>
                    <path d="M10 6a6 6 0 0 1-8 5.659"></path>
                    <path d="m2 2 20 20"></path>
                  </svg>
                ),
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-t-4 hover:border-[#270F41]"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#270F41]/10 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#270F41] mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-16 bg-[#270F41] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in partnering with us?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We're always looking for organizations that share our vision of a safer digital world. If you're interested
            in collaborating with Aman-Tech, we'd love to hear from you.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#270F41] hover:bg-gray-100">Contact Us</Button>
          </Link>
        </div>
      </section>
    </>
  )
}
