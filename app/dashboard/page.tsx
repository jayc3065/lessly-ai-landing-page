import Header from "@/components/header"
import DashboardPreview from "@/components/dashboard-preview"
import Footer from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Lessly AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                  Dashboard
                </span>
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-gray-500 md:text-xl/relaxed">
                Take control of your online reputation with our comprehensive dashboard.
              </p>
            </div>
          </div>
        </div>
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  )
}
