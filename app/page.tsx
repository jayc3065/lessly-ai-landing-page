import Header from "@/components/header"
import Hero from "@/components/hero"
import DemoVideo from "@/components/demo-video"
import ReviewImportance from "@/components/review-importance"
import HowItWorks from "@/components/how-it-works"
import InteractiveFeatures from "@/components/interactive-features"
import InteractiveDemo from "@/components/interactive-demo"
import ROICalculator from "@/components/roi-calculator"
import DataImpact from "@/components/data-impact"
import TargetAudience from "@/components/target-audience"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ComparisonTable from "@/components/comparison-table"
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
        <InteractiveFeatures />
        <InteractiveDemo />
        <ROICalculator />
        <DataImpact />
        <TargetAudience />
        <TestimonialCarousel />
        <ComparisonTable />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
