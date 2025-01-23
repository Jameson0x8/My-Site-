import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { HowItWorks } from "@/components/how-it-works"
import { KeyFeatures } from "@/components/key-features"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full">
        <Hero />
        <HowItWorks />
        <KeyFeatures />
      </main>
      <Footer />
    </div>
  )
}
