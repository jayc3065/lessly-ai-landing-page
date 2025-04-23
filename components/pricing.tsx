"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: "Free",
      price: isAnnual ? "$0" : "$0",
      description: "Perfect for trying out Lessly AI",
      features: [
        "Up to 10 review responses per month",
        "Basic AI response templates",
        "Email notifications",
        "1 Google Business Profile",
        "Community support",
      ],
      limitations: ["No custom branding", "No analytics dashboard", "No priority support"],
      cta: "Start for Free",
      highlighted: false,
    },
    {
      name: "Growth",
      price: isAnnual ? "$29" : "$39",
      period: isAnnual ? "/month, billed annually" : "/month, billed monthly",
      description: "For small businesses with active profiles",
      features: [
        "Up to 100 review responses per month",
        "Advanced AI response customization",
        "Email and SMS notifications",
        "3 Google Business Profiles",
        "Basic analytics dashboard",
        "Priority email support",
        "Custom response templates",
      ],
      cta: "Start 14-Day Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Business",
      price: isAnnual ? "$79" : "$99",
      period: isAnnual ? "/month, billed annually" : "/month, billed monthly",
      description: "For multi-location businesses",
      features: [
        "Unlimited review responses",
        "Advanced AI with tone matching",
        "Real-time notifications",
        "10 Google Business Profiles",
        "Advanced analytics dashboard",
        "Priority phone & email support",
        "Custom branding",
        "API access",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-teal-50 to-blue-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that works best for your business needs
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <span className={`text-sm ${!isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? "text-gray-900 font-medium" : "text-gray-500"}`}>
              Annual <span className="text-teal-600 font-medium">Save 25%</span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col ${
                  plan.highlighted ? "border-2 border-teal-400 shadow-lg" : "border border-gray-200"
                }`}
              >
                {plan.highlighted && plan.badge && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {plan.badge}
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="ml-1 text-gray-500 text-sm">{plan.period}</span>}
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.limitations &&
                      plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start text-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 flex-shrink-0 mt-0.5"
                          >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                          <span>{limitation}</span>
                        </li>
                      ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600"
                        : plan.name === "Free"
                          ? "bg-white border border-teal-500 text-teal-500 hover:bg-teal-50"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="inline-flex items-center text-sm text-gray-500 border-b border-dashed border-gray-400 cursor-help">
                  Need a custom plan for multiple locations?
                  <HelpCircle className="h-4 w-4 ml-1" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  We offer custom enterprise plans for businesses with multiple locations or special requirements.
                  Contact our sales team for a personalized quote.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  )
}
