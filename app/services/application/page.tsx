import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ApplicationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/purple-bg.png" alt="Background" fill className="object-cover" priority />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">OUR APPLICATION</h1>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#270F41]/10 px-4 py-2 rounded-full text-[#270F41] font-medium mb-4">
                Coming Soon
              </div>
              <h2 className="text-3xl font-bold text-[#270F41] mb-6">Aman-Tech Mobile Application</h2>
              <p className="text-gray-600 mb-4">
                Our mobile application is designed to provide instant protection against online threats. With a simple,
                user-friendly interface, it allows anyone to verify links and stay safe online.
              </p>

              <div className="bg-[#4F772E]/10 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-[#4F772E] mb-4">With us, you can:</h3>
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
                    <span className="text-gray-700">Check any link</span>
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
                    <span className="text-gray-700">Know if it's safe or risky</span>
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
                    <span className="text-gray-700">Stay protected, in one tap</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#270F41] hover:bg-[#1a0a2d]">Coming Soon</Button>
                <Link href="/services">
                  <Button variant="outline" className="border-[#270F41] text-[#270F41]">
                    Learn More About Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/app-screenshot.png"
                alt="Aman-Tech Application"
                width={600}
                height={600}
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#270F41] mb-4">Key Features</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our application is designed with simplicity and effectiveness in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#270F41] mb-4">Comprehensive Digital Protection</h3>
              <p className="text-gray-600 mb-4">
                At Aman-Tech, we believe that digital safety should be accessible to everyone. Our application is
                designed with simplicity and effectiveness in mind, ensuring that users of all technical backgrounds can
                protect themselves online.
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
              <Image src="/security-image.jpg" alt="Digital Security" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Link Verification",
                description: "Instantly check if a link is safe or potentially harmful before clicking",
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
                    <path d="m18 16 4-4-4-4"></path>
                    <path d="m6 8-4 4 4 4"></path>
                    <path d="m14.5 4-5 16"></path>
                  </svg>
                ),
              },
              {
                title: "QR Code Scanner",
                description: "Scan QR codes to verify their safety before they redirect you",
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
                    <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                    <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                    <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                    <path d="M21 21v.01"></path>
                    <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                    <path d="M3 12h.01"></path>
                    <path d="M12 3h.01"></path>
                    <path d="M12 16v.01"></path>
                    <path d="M16 12h1"></path>
                    <path d="M21 12v.01"></path>
                    <path d="M12 21v-1"></path>
                  </svg>
                ),
              },
              {
                title: "Educational Content",
                description: "Access educational resources about online safety in Darija",
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                ),
              },
              {
                title: "Threat Reporting",
                description: "Report suspicious links and contribute to our security database",
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
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M3.6 9h16.8a1 1 0 0 1 .9 1.45l-8.4 14.14a1 1 0 0 1-1.8 0L2.7 10.45A1 1 0 0 1 3.6 9z"></path>
                  </svg>
                ),
              },
              {
                title: "Darija Interface",
                description: "Fully accessible in Moroccan dialect for all users",
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
                    <path d="M5 8h14M5 12h14M5 16h6"></path>
                  </svg>
                ),
              },
              {
                title: "Offline Capability",
                description: "Basic features work even without an internet connection",
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
                    <path d="M14.5 2v16.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-16.5"></path>
                    <path d="M7 2h10"></path>
                    <path d="M21 8h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3"></path>
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:border-t-4 hover:border-[#270F41]"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#270F41]/10 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#270F41] mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#270F41] text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Stay tuned for our app launch!</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our application will be available for download soon. Sign up to be notified when it launches.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-[#270F41] hover:bg-gray-100">Join Waitlist</Button>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
