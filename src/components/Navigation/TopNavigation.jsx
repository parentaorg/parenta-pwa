import { Link } from 'preact-router/match'

export default function TopNavigation() {
  return (
    <header className="bg-[#eaf6f9] border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-[#1a7ba6] hover:text-[#156589]">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-[#1a7ba6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-bold">Parenta</span>
            </div>
          </Link>
          
          <nav className="flex space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-white" activeClassName="bg-white text-[#1a7ba6] font-medium">
              Home
            </Link>
            <Link href="/myself" className="px-3 py-2 rounded-md hover:bg-white" activeClassName="bg-white text-[#1a7ba6] font-medium">
              Myself
            </Link>
            <Link href="/documents" className="px-3 py-2 rounded-md hover:bg-white" activeClassName="bg-white text-[#1a7ba6] font-medium">
              Documents
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
