import Link from "next/link"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between w-full max-w-7xl mx-auto">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold text-[#1e3a8a]">Communa</span>
      </Link>
      <Link 
        href="https://x.com/communadotworld?s=21&t=zXCcwGBkWwNEmYRZQnqlkg" 
        className="text-[#1e3a8a] hover:text-blue-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6 fill-current">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
        </svg>
        <span className="sr-only">X (Twitter)</span>
      </Link>
    </header>
  )
}

