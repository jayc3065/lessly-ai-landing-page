import Header from "@/components/header"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Simple, Transparent{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                  Pricing
                </span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed">
                Choose the plan that works best for your business needs.
              </p>
            </div>
          </div>
        </div>
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
