"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"></div>
            <span className="text-xl font-bold">Lessly AI</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium hover:text-teal-600 transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Features
          </Link>
          <Link href="#analytics-features" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Analytics
          </Link>
          <Link href="#dashboard" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Dashboard
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-teal-600 transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-teal-600 transition-colors">
            FAQ
          </Link>
          <Button variant="ghost" className="text-sm font-medium">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600">
            Get Started for Free
          </Button>
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-50">
          <div className="container flex flex-col space-y-4 p-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#analytics-features"
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
            <Link
              href="#dashboard"
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium p-2 hover:bg-gray-100 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Button variant="ghost" className="justify-start">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600">
              Get Started for Free
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
