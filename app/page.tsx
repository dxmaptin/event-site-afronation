import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AfronationWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-x-hidden">
      {/* Side Border Pattern */}
      <div
        className="fixed left-0 top-0 w-20 h-full z-10 opacity-60"
        style={{
          backgroundImage: "url('/border-anp.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "contain",
        }}
      />
      <div
        className="fixed right-0 top-0 w-20 h-full z-10 opacity-60 transform scale-x-[-1]"
        style={{
          backgroundImage: "url('/border-anp.png')",
          backgroundRepeat: "repeat-y",
          backgroundSize: "contain",
        }}
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full">
        <Image
          src="/burnaboy-hero.jpeg"
          alt="Burna Boy performing at Afronation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        {/* Logo Overlay */}
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

      {/* Main Content */}
      <main className="px-6 md:px-24 py-20 relative z-20">
        {/* Events Section */}
        <section className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 mb-4 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              EXPERIENCES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-lime-400 mx-auto"></div>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Main Event - Full Width */}
            <Card className="overflow-hidden bg-black/20 backdrop-blur-sm border border-pink-500/30 hover:border-pink-400/60 transition-all duration-500 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src="/burnaboy-hero.jpeg"
                    alt="Main Event"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-full">
                      HEADLINER EVENT
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">MAIN EVENT</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                    The pinnacle of Afrobeats culture. Experience world-renowned artists, cutting-edge production, and
                    an atmosphere unlike anywhere else. This is where legends are made and memories are forged forever.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-pink-500/25">
                      Reserve Your Spot
                    </Button>
                    <Button
                      variant="outline"
                      className="border-pink-400/50 text-pink-400 hover:bg-pink-400/10 px-8 py-3 rounded-full transition-all duration-300"
                    >
                      View Lineup
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Sky Terrace & Closing Party - Same Row */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Sky Terrace */}
              <Card className="overflow-hidden bg-black/20 backdrop-blur-sm border border-lime-400/30 hover:border-lime-400/60 transition-all duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/burnaboy-hero.jpeg"
                    alt="Sky Terrace"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-lime-400/20" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-lime-400 text-black text-xs font-medium rounded-full">
                      VIP EXPERIENCE
                    </span>
                  </div>
                  <h3 className="absolute bottom-6 left-6 text-white text-3xl font-light tracking-wide">SKY TERRACE</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6 font-light">
                    Elevated luxury meets Afrobeats energy. Premium views, exclusive amenities, and intimate
                    performances in our sophisticated rooftop sanctuary.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-black font-medium rounded-full transition-all duration-300">
                    Explore VIP
                  </Button>
                </CardContent>
              </Card>

              {/* Closing Party */}
              <Card className="overflow-hidden bg-black/20 backdrop-blur-sm border border-orange-400/30 hover:border-orange-400/60 transition-all duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/burnaboy-hero.jpeg"
                    alt="Closing Party"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-orange-400/20" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-400 text-black text-xs font-medium rounded-full">
                      GRAND FINALE
                    </span>
                  </div>
                  <h3 className="absolute bottom-6 left-6 text-white text-3xl font-light tracking-wide">
                    CLOSING PARTY
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6 font-light">
                    The ultimate celebration finale. Dance until dawn with surprise guests, exclusive sets, and the most
                    unforgettable closing ceremony in festival history.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-black font-medium rounded-full transition-all duration-300">
                    Join the Finale
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 mb-4">
              PARTNERS
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sponsor) => (
                <div
                  key={sponsor}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl w-full h-24 flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10"
                >
                  <span className="text-gray-400 font-light tracking-wide">PARTNER {sponsor}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="relative mt-20">
        <div 
          className="w-full h-64"
          style={{
            backgroundImage: "url('/footer-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      </footer>
    </div>
  )
}
