import Header from "@/components/header"
import Hero from "@/components/hero"
import DemoVideo from "@/components/demo-video"
import ReviewImportance from "@/components/review-importance"
import HowItWorks from "@/components/how-it-works"
import Features from "@/components/features"
import AnalyticsFeatures from "@/components/analytics-features"
import DashboardPreview from "@/components/dashboard-preview"
import DataImpact from "@/components/data-impact"
import TargetAudience from "@/components/target-audience"
import Testimonials from "@/components/testimonials"
import ComparisonTable from "@/components/comparison-table"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <DemoVideo />
        <ReviewImportance />
        <HowItWorks />
        <Features />
        <AnalyticsFeatures />
        <DashboardPreview />
        <DataImpact />
        <TargetAudience />
        <Testimonials />
        <ComparisonTable />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
