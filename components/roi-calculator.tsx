"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Clock, DollarSign } from "lucide-react"

export default function ROICalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [reviewsPerMonth, setReviewsPerMonth] = useState(50)
  const [responseTime, setResponseTime] = useState(5) // minutes per review
  const [hourlyRate, setHourlyRate] = useState(25)
  const [showResults, setShowResults] = useState(false)

  // Calculate ROI
  const calculateResults = () => {
    // Time saved per month (in hours)
    const timeSavedMonthly = (reviewsPerMonth * responseTime) / 60

    // Money saved per month
    const moneySavedMonthly = timeSavedMonthly * hourlyRate

    // Annual savings
    const annualSavings = moneySavedMonthly * 12

    // Lessly AI cost (estimated based on Growth plan)
    const lesslyMonthlyCost = 29
    const lesslyAnnualCost = lesslyMonthlyCost * 12

    // Net savings
    const netAnnualSavings = annualSavings - lesslyAnnualCost

    // ROI percentage
    const roiPercentage = (netAnnualSavings / lesslyAnnualCost) * 100

    return {
      timeSavedMonthly,
      moneySavedMonthly,
      annualSavings,
      lesslyAnnualCost,
      netAnnualSavings,
      roiPercentage,
    }
  }

  const results = calculateResults()

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
            <Calculator className="h-4 w-4 mr-1" />
            <span className="font-medium">ROI Calculator</span>
          </div>
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Calculate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Time & Cost Savings
              </span>
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how much time and money your business can save by automating review responses with Lessly AI
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-medium text-lg">Your Business Details</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="reviews">Monthly Reviews</Label>
                      <span className="text-sm font-medium">{reviewsPerMonth}</span>
                    </div>
                    <Slider
                      id="reviews"
                      min={10}
                      max={200}
                      step={5}
                      value={[reviewsPerMonth]}
                      onValueChange={(value) => {
                        setReviewsPerMonth(value[0])
                        setShowResults(false)
                      }}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>10</span>
                      <span>200+</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="time">Minutes Per Response</Label>
                      <span className="text-sm font-medium">{responseTime} min</span>
                    </div>
                    <Slider
                      id="time"
                      min={1}
                      max={15}
                      step={1}
                      value={[responseTime]}
                      onValueChange={(value) => {
                        setResponseTime(value[0])
                        setShowResults(false)
                      }}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>1 min</span>
                      <span>15 min</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rate">Hourly Rate ($ USD)</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        id="rate"
                        type="number"
                        min={10}
                        max={200}
                        value={hourlyRate}
                        onChange={(e) => {
                          const value = Number.parseInt(e.target.value)
                          if (value >= 10 && value <= 200) {
                            setHourlyRate(value)
                            setShowResults(false)
                          }
                        }}
                        className="pl-9"
                      />
                    </div>
                    <p className="text-xs text-gray-500">The hourly cost of the person who responds to reviews</p>
                  </div>
                </div>

                <Button
                  onClick={() => setShowResults(true)}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600"
                >
                  Calculate Savings
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h3 className="font-medium text-lg">Your Potential Savings</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Card className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-teal-500" /> Time Saved
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-teal-600">
                        {results.timeSavedMonthly.toFixed(1)}
                        <span className="text-lg font-normal text-gray-500 ml-1">hrs/mo</span>
                      </div>
                      <CardDescription>{(results.timeSavedMonthly * 12).toFixed(0)} hours annually</CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-sm">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center">
                        <DollarSign className="h-5 w-5 mr-2 text-blue-500" /> Money Saved
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">
                        ${results.moneySavedMonthly.toFixed(0)}
                        <span className="text-lg font-normal text-gray-500 ml-1">/mo</span>
                      </div>
                      <CardDescription>${results.annualSavings.toFixed(0)} annually</CardDescription>
                    </CardContent>
                  </Card>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: showResults ? 1 : 0, y: showResults ? 0 : 20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 border border-teal-100"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Annual ROI Summary</h4>
                    <div className="text-sm font-medium text-teal-600">{results.roiPercentage.toFixed(0)}% ROI</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Annual Time Savings</span>
                      <span className="font-medium">{(results.timeSavedMonthly * 12).toFixed(0)} hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Cost Savings</span>
                      <span className="font-medium">${results.annualSavings.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Annual Lessly AI Cost</span>
                      <span className="font-medium">-${results.lesslyAnnualCost}</span>
                    </div>
                    <div className="h-px bg-gray-200 my-2"></div>
                    <div className="flex justify-between font-medium">
                      <span>Net Annual Savings</span>
                      <span className="text-teal-600">${results.netAnnualSavings.toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600">
                      Start Your Free Trial
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
