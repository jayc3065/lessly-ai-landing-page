import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Twitter, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"></div>
              <span className="text-xl font-bold">Lessly AI</span>
            </div>
            <p className="text-sm text-gray-500">
              Automate your Google review responses with AI that sounds just like you.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-lg font-semibold">Product</div>
            <Link href="#features" className="text-sm text-gray-500 hover:text-teal-600">
              Features
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm text-gray-500 hover:text-teal-600">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm text-gray-500 hover:text-teal-600">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-lg font-semibold">Company</div>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Blog
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Careers
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Contact
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="text-lg font-semibold">Legal</div>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-teal-600">
              Terms of Service
            </Link>
            <div className="pt-4">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-teal-500" />
                <a href="mailto:support@lessly.ai" className="text-sm hover:text-teal-600">
                  support@lessly.ai
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Lessly AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
