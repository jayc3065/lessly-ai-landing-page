"use client"

import { useState } from "react"
import { Check, X, HelpCircle, ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function ComparisonTable() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedFeatures, setExpandedFeatures] = useState(false)
  const [selectedCompetitor, setSelectedCompetitor] = useState<string>("all")

  const competitors = [
    { id: "reviewbuddy", name: "ReviewBuddy" },
    { id: "replypro", name: "ReplyPro" },
    { id: "reviewmaster", name: "ReviewMaster" },
  ]

  const features = [
    {
      category: "Core Features",
      items: [
        {
          name: "AI-Powered Responses",
          tooltip: "Automatically generate personalized responses to customer reviews",
          lessly: true,
          reviewbuddy: true,
          replypro: true,
          reviewmaster: true,
        },
        {
          name: "Tone Matching",
          tooltip: "AI that matches your brand's unique voice and style",
          lessly: true,
          reviewbuddy: false,
          replypro: true,
          reviewmaster: false,
        },
        {
          name: "24/7 Automated Replies",
          tooltip: "Responses posted at any time, day or night",
          lessly: true,
          reviewbuddy: true,
          replypro: true,
          reviewmaster: true,
        },
        {
          name: "Response Time",
          tooltip: "How quickly responses are posted after receiving a review",
          lessly: "< 5 minutes",
          reviewbuddy: "< 30 minutes",
          replypro: "< 15 minutes",
          reviewmaster: "< 1 hour",
        },
      ],
    },
    {
      category: "Customization",
      items: [
        {
          name: "Custom Response Templates",
          tooltip: "Create and save your own response templates",
          lessly: true,
          reviewbuddy: true,
          replypro: true,
          reviewmaster: false,
        },
        {
          name: "Sentiment Analysis",
          tooltip: "Detect and respond appropriately to customer sentiment",
          lessly: true,
          reviewbuddy: false,
          replypro: true,
          reviewmaster: false,
        },
        {
          name: "Industry-Specific Responses",
          tooltip: "Responses tailored to your specific industry",
          lessly: true,
          reviewbuddy: false,
          replypro: false,
          reviewmaster: true,
        },
      ],
    },
    {
      category: "Analytics & Reporting",
      items: [
        {
          name: "Review Performance Dashboard",
          tooltip: "Visualize and track your review performance over time",
          lessly: true,
          reviewbuddy: true,
          replypro: false,
          reviewmaster: true,
        },
        {
          name: "Sentiment Trend Analysis",
          tooltip: "Track changes in customer sentiment over time",
          lessly: true,
          reviewbuddy: false,
          replypro: false,
          reviewmaster: false,
        },
        {
          name: "Competitor Benchmarking",
          tooltip: "Compare your review performance against competitors",
          lessly: true,
          reviewbuddy: false,
          replypro: false,
          reviewmaster: false,
        },
        {
          name: "Custom Reports",
          tooltip: "Generate and export custom reports",
          lessly: true,
          reviewbuddy: false,
          replypro: true,
          reviewmaster: false,
        },
      ],
    },
    {
      category: "Integration & Support",
      items: [
        {
          name: "Google Business Profile Integration",
          tooltip: "Direct integration with Google Business Profile",
          lessly: true,
          reviewbuddy: true,
          replypro: true,
          reviewmaster: true,
        },
        {
          name: "Other Review Platforms",
          tooltip: "Integration with other review platforms like Yelp, TripAdvisor, etc.",
          lessly: "All major platforms",
          reviewbuddy: "Limited",
          replypro: "Most platforms",
          reviewmaster: "Limited",
        },
        {
          name: "API Access",
          tooltip: "Access to API for custom integrations",
          lessly: true,
          reviewbuddy: false,
          replypro: true,
          reviewmaster: false,
        },
        {
          name: "Customer Support",
          tooltip: "Available customer support options",
          lessly: "24/7 Priority",
          reviewbuddy: "Business hours",
          replypro: "Business hours",
          reviewmaster: "Email only",
        },
      ],
    },
  ]

  // Show only the first two categories when not expanded
  const visibleFeatures = expandedFeatures ? features : features.slice(0, 2)

  // Filter competitors based on selection
  const getVisibleCompetitors = () => {
    if (selectedCompetitor === "all") return competitors
    return competitors.filter((comp) => comp.id === selectedCompetitor)
  }

  const renderValue = (value: any) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      )
    }
    return <span className="text-center block">{value}</span>
  }

  return (
    <section id="comparison" className="py-20 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How We Compare</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See why businesses choose Lessly AI over other review response solutions
            </p>
          </div>
        </motion.div>

        <div className="mt-12 space-y-6">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCompetitor === "all" ? "default" : "outline"}
              onClick={() => setSelectedCompetitor("all")}
              className={selectedCompetitor === "all" ? "bg-teal-600 hover:bg-teal-700" : ""}
            >
              All Competitors
            </Button>
            {competitors.map((comp) => (
              <Button
                key={comp.id}
                variant={selectedCompetitor === comp.id ? "default" : "outline"}
                onClick={() => setSelectedCompetitor(comp.id)}
                className={selectedCompetitor === comp.id ? "bg-teal-600 hover:bg-teal-700" : ""}
              >
                vs. {comp.name}
              </Button>
            ))}
          </div>

          <div className="rounded-lg border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <TooltipProvider>
                <Table>
                  <TableCaption>
                    Comparison based on publicly available information as of {new Date().toLocaleDateString()}
                  </TableCaption>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-teal-50 to-blue-50">
                      <TableHead className="w-[250px]">Feature</TableHead>
                      <TableHead className="text-center bg-gradient-to-r from-teal-100 to-blue-100">
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"></div>
                          <span>Lessly AI</span>
                        </div>
                      </TableHead>
                      {getVisibleCompetitors().map((competitor) => (
                        <TableHead key={competitor.id} className="text-center">
                          {competitor.name}
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {visibleFeatures.map((category, categoryIndex) => (
                      <>
                        <TableRow key={`category-${categoryIndex}`} className="bg-gray-50">
                          <TableCell colSpan={getVisibleCompetitors().length + 2} className="font-medium">
                            {category.category}
                          </TableCell>
                        </TableRow>
                        {category.items.map((feature, featureIndex) => (
                          <TableRow key={`feature-${categoryIndex}-${featureIndex}`}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-1">
                                {feature.name}
                                {feature.tooltip && (
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <HelpCircle className="h-4 w-4 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{feature.tooltip}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="bg-gradient-to-r from-teal-50 to-blue-50">
                              {renderValue(feature.lessly)}
                            </TableCell>
                            {getVisibleCompetitors().map((competitor) => (
                              <TableCell key={`value-${competitor.id}-${featureIndex}`}>
                                {renderValue(feature[competitor.id as keyof typeof feature])}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              onClick={() => setExpandedFeatures(!expandedFeatures)}
              className="flex items-center gap-2"
            >
              {expandedFeatures ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Show More Features <ChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 max-w-2xl mx-auto">
            This comparison is based on publicly available information and may not reflect recent changes to
            competitors' offerings. For the most accurate and up-to-date comparison, we recommend requesting a demo of
            Lessly AI.
          </p>
          <Button className="mt-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600">
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
