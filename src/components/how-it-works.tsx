import { UserCircle2, Search, TrendingUp } from 'lucide-react'

export function HowItWorks() {
  return (
    <section className="w-full py-6 md:py-12 lg:py-16">
      <div className="px-4 md:px-6 max-w-7xl mx-auto w-full pt-0">
        <h2 className="text-4xl font-bold text-center text-[#1e3a8a] mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="bg-[#1e3a8a] rounded-full p-4 inline-flex items-center justify-center mb-4">
              <UserCircle2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
              1. Create Your Account
            </h3>
            <p className="text-gray-700">
              Sign up and set up your Communa profile to start your investment journey
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="bg-[#1e3a8a] rounded-full p-4 inline-flex items-center justify-center mb-4">
              <Search className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
              2. Explore Assets
            </h3>
            <p className="text-gray-700">
              Discover unique digital assets and potential investment opportunities
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <div className="bg-[#1e3a8a] rounded-full p-4 inline-flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">
              3. Trade and Grow
            </h3>
            <p className="text-gray-700">
              Buy shares, monitor your portfolio, and watch your investments grow
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

