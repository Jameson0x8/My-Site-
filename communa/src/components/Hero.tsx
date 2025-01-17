import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24">
      <div className="px-4 md:px-6 max-w-3xl mx-auto w-full flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter text-[#1e3a8a] mb-4">
          Communa
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4171ea] mb-6">
          Connect with Digital Assets
        </h2>
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-700">
            Communa enables you to trade unique digital assets with others. Diversify your portfolio and profit from markets all over the globe.
          </p>
        </div>
        <Button 
          className="bg-[#4ade80] hover:bg-[#4ade80]/90 text-white rounded-full px-8 py-6 text-lg font-semibold"
          size="lg"
          asChild
        >
          <Link href="https://docs.google.com/spreadsheets/d/1vedko_3NO1186h0QZR5srwX57MtTqSsJyPfxaX6QGb8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
            Sign up for Early Access
          </Link>
        </Button>
      </div>
    </section>
  )
}

