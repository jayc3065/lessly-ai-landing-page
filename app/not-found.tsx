import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 px-4">
      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 mb-6"></div>
      <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Button
        asChild
        className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600"
      >
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
