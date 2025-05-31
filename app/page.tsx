'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
})

export default function AfronationWebsite() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-container')
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionBottom = rect.bottom

        if (sectionTop <= 0 && sectionBottom > 0) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const sections = document.querySelectorAll('.section-container')
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: 'smooth' })
      setActiveSection(index)
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-x-hidden ${outfit.className}`}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 h-screen z-50 flex items-center">
        <div className="h-[90vh] rounded-r-3xl px-12 py-16 flex flex-col justify-center space-y-16">
          <Image
            src="/afronation-logo.png"
            alt="Afronation Logo"
            width={180}
            height={60}
            className="h-12 w-auto mb-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
          {['Main Event', 'Sky Terrace', 'Closing Party'].map((item, index) => (
            <button
              key={item}
              onClick={() => scrollToSection(index)}
              className="group relative flex items-center"
            >
              <div className={`absolute -left-12 w-2 h-12 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-gradient-to-b from-pink-500 to-orange-400 h-16 shadow-[0_0_30px_rgba(255,105,180,0.7)]' 
                  : 'bg-white/20 h-12 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]'
              }`} />
              <span className={`text-2xl font-medium transition-all duration-300 ${
                activeSection === index
                  ? 'text-white scale-110 font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'text-white/70 group-hover:text-white group-hover:scale-110'
              }`}>
                {item}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Container with Scroll Snap */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Hero Section */}
        <section className="h-screen w-full relative snap-start">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/hz6RtpnvZSA?playsinline=1&rel=0&autoplay=1&controls=0&showinfo=0&modestbranding=0&loop=1&playlist=hz6RtpnvZSA&mute=1"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh]"
              style={{
                pointerEvents: 'none'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-20 space-y-6">
            <h1 className="heading-medium text-white">
              The World&apos;s Biggest Afrobeats Festival
            </h1>
            <div className="heading-large gradient-text">
              Proudly Celebrating Culture Through Music, Food & Art
            </div>
            <div className="heading-medium text-white">
              Music
            </div>
            <div className="heading-small text-white">
              9th - 11th July 2025
            </div>
            <div className="heading-small text-white">
              Portugal
            </div>
          </div>

          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
            <Image
              src="/afronation-logo.png"
              alt="Afronation Fifth Anniversary Logo"
              width={700}
              height={230}
              className="w-auto h-auto max-w-[90vw] drop-shadow-2xl"
            />
          </div>
        </section>

        {/* Main Event Section */}
        <div className="section-container snap-start">
          <section className="h-screen w-full relative py-16 px-4">
            <div className="max-w-7xl mx-auto px-6 mb-8">
              <h2 className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 tracking-wide font-outfit">MAIN EVENT</h2>
            </div>
            <div className="relative w-full h-full max-w-[95%] mx-auto">
              <Image
                src="/burnaboy-hero.jpeg"
                alt="Main Event"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-4xl p-8 border border-white/10 rounded-2xl backdrop-blur-sm">
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="h-screen w-full bg-black relative">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mb-6 tracking-wide font-outfit">Reserve Your Spot</h3>
                <Button
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 animate-gradient"
                >
                  View Lineup
                </Button>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* VIP Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/vip-ticket.png"
                      alt="VIP Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">VIP Experience</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Exclusive VIP viewing area
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Premium bar access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Meet &amp; greet opportunities
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      VIP lounge access
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get VIP Tickets
                  </Button>
                </div>

                {/* Premium Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/premium-ticket.png"
                      alt="Premium Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Premium Access</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Dedicated viewing area
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Fast-track entry
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Premium bar access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Exclusive merchandise
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get Premium Tickets
                  </Button>
                </div>

                {/* Standard Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/standard-ticket.png"
                      alt="Standard Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Standard Access</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      General admission access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Multiple stages access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Food &amp; drink vendors
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Festival merchandise
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get Standard Tickets
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sky Terrace Section */}
        <div className="section-container snap-start">
          <section className="h-screen w-full relative py-16 px-4">
            <div className="max-w-7xl mx-auto px-6 mb-8">
              <h2 className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 tracking-wide font-outfit">SKY TERRACE</h2>
            </div>
            <div className="relative w-full h-full max-w-[95%] mx-auto">
              <Image
                src="/skybar.jpg"
                alt="Sky Terrace"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-4xl p-8 border border-white/10 rounded-2xl backdrop-blur-sm">
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="h-screen w-full bg-black relative">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mb-6 tracking-wide font-outfit">Reserve Your Spot</h3>
                <Button
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 animate-gradient"
                >
                  View Lineup
                </Button>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* VIP Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/vip-ticket.png"
                      alt="VIP Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">VIP Experience</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Exclusive VIP viewing area
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Premium bar access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Meet &amp; greet opportunities
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      VIP lounge access
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get VIP Tickets
                  </Button>
                </div>

                {/* Premium Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/premium-ticket.png"
                      alt="Premium Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Premium Access</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Dedicated viewing area
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Fast-track entry
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Premium bar access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Exclusive merchandise
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get Premium Tickets
                  </Button>
                </div>

                {/* Standard Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/standard-ticket.png"
                      alt="Standard Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Standard Access</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      General admission access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Multiple stages access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Food &amp; drink vendors
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Festival merchandise
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get Standard Tickets
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Closing Party Section */}
        <div className="section-container snap-start">
          <section className="h-screen w-full relative py-16 px-4">
            <div className="max-w-7xl mx-auto px-6 mb-8">
              <h2 className="text-8xl md:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 tracking-wide font-outfit">CLOSING PARTY</h2>
            </div>
            <div className="relative w-full h-full max-w-[95%] mx-auto">
              <Image
                src="/closing-party.jpg"
                alt="Closing Party"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="max-w-4xl p-8 border border-white/10 rounded-2xl backdrop-blur-sm">
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="h-screen w-full bg-black relative">
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 mb-6 tracking-wide font-outfit">Reserve Your Spot</h3>
                <Button
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 animate-gradient"
                >
                  View Lineup
                </Button>
              </div>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* VIP Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/vip-ticket.png"
                      alt="VIP Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">VIP Experience</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Exclusive VIP viewing area
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Premium bar access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Meet &amp; greet opportunities
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      VIP lounge access
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get VIP Tickets
                  </Button>
                </div>

                {/* Premium Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/premium-ticket.png"
                      alt="Premium Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Premium Access</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Dedicated viewing area
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Fast-track entry
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Premium bar access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Exclusive merchandise
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get Premium Tickets
                  </Button>
                </div>

                {/* Standard Ticket */}
                <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 border border-white/10 transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  <div className="aspect-[3/4] relative mb-6">
                    <Image
                      src="/standard-ticket.png"
                      alt="Standard Ticket"
                      fill
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Standard Access</h3>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      General admission access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Multiple stages access
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Food &amp; drink vendors
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="text-pink-500 mr-2">•</span>
                      Festival merchandise
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                    Get Standard Tickets
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Section */}
        <footer className="relative snap-start">
          <div 
            className="w-full h-screen"
            style={{
              backgroundImage: "url('/footer-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
        </footer>
      </div>
    </div>
  )
}
