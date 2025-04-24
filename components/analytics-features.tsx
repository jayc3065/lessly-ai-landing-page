"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  MessageSquare,
  Search,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowUpRight,
  Globe,
} from "lucide-react"

export default function AnalyticsFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const analyticsFeatures = [
    {
      icon: <Search className="h-8 w-8 text-teal-500" />,
      title: "Review Monitoring",
      description:
        "Track all your reviews across platforms in real-time. Get instant notifications when new reviews are posted.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Sentiment Analysis",
      description:
        "Understand customer sentiment trends over time. Identify what customers love and areas for improvement.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-teal-500" />,
      title: "Feedback Categorization",
      description:
        "AI automatically categorizes feedback by topic, helping you identify recurring themes in customer comments.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
      title: "Business Insights",
      description: "Get actionable recommendations based on customer feedback to improve your products and services.",
    },
  ]

  return (
    <section id="analytics-features" className="py-20 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 mb-2">
            <span className="font-medium">Advanced Analytics</span>
          </div>
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Turn Customer Feedback Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Business Growth
              </span>
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just respond to reviews—learn from them. Our advanced analytics help you monitor, analyze, and
              implement customer feedback to drive continuous business improvement.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {analyticsFeatures.map((feature, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow h-full">
                <CardHeader>
                  <div className="mb-2 relative">
                    <div className="absolute -left-2 -top-2 w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-70"></div>
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl transform -rotate-1 scale-105 opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden border shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-white text-sm">Analytics Dashboard</div>
              </div>
              <div className="pt-12 bg-white p-4">
                {/* Analytics Dashboard UI */}
                <div className="border-b pb-4 mb-4 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="bg-teal-100 text-teal-600 p-1 rounded">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <h3 className="font-medium">Review Analytics</h3>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-xs px-2 py-1 bg-gray-100 rounded">Last 30 days</div>
                    <div className="text-xs px-2 py-1 bg-gray-100 rounded flex items-center gap-1">
                      <Globe className="h-3 w-3" /> All platforms
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    {
                      label: "Total Reviews",
                      value: "842",
                      change: "+12%",
                      icon: <MessageSquare className="h-4 w-4 text-blue-500" />,
                    },
                    {
                      label: "Average Rating",
                      value: "4.8",
                      change: "+0.2",
                      icon: <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />,
                    },
                    {
                      label: "Response Rate",
                      value: "98%",
                      change: "+5%",
                      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
                    },
                    {
                      label: "Sentiment Score",
                      value: "92",
                      change: "+3",
                      icon: <TrendingUp className="h-4 w-4 text-teal-500" />,
                    },
                  ].map((stat, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg border">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                          <div className="text-xl font-bold">{stat.value}</div>
                        </div>
                        <div className="p-2 bg-white rounded-full">{stat.icon}</div>
                      </div>
                      <div className="text-xs text-green-600 mt-2 flex items-center">
                        <ArrowUpRight className="h-3 w-3 mr-1" /> {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {/* Rating distribution chart */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <h4 className="text-sm font-medium">Rating Distribution</h4>
                      <PieChart className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="flex items-end h-32 gap-3 mt-4">
                      {[
                        { stars: 5, count: 523, height: "h-full" },
                        { stars: 4, count: 216, height: "h-3/4" },
                        { stars: 3, count: 64, height: "h-1/3" },
                        { stars: 2, count: 27, height: "h-1/6" },
                        { stars: 1, count: 12, height: "h-1/12" },
                      ].map((rating, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div className="text-xs text-gray-500 mb-1">{rating.count}</div>
                          <div
                            className={`w-full ${rating.height} bg-gradient-to-t from-teal-500 to-blue-400 rounded-t`}
                          ></div>
                          <div className="flex items-center mt-2">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs ml-1">{rating.stars}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Review trend chart */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between mb-3">
                      <h4 className="text-sm font-medium">Review Trend</h4>
                      <LineChart className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="h-32 mt-4 relative">
                      {/* Grid lines */}
                      <div className="absolute inset-0 flex flex-col justify-between">
                        {[0, 1, 2, 3].map((i) => (
                          <div key={i} className="border-t border-gray-100 w-full"></div>
                        ))}
                      </div>

                      {/* Line chart */}
                      <div className="absolute inset-0">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path
                            d="M0,40 C10,35 20,45 30,40 C40,35 50,25 60,20 C70,15 80,25 90,20 L90,100 L0,100 Z"
                            fill="rgba(45, 212, 191, 0.1)"
                          />
                          <path
                            d="M0,40 C10,35 20,45 30,40 C40,35 50,25 60,20 C70,15 80,25 90,20"
                            fill="none"
                            stroke="#2dd4bf"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>

                      {/* Data points */}
                      <div className="absolute inset-0 flex justify-between items-center">
                        {[40, 35, 45, 40, 35, 25, 20].map((pos, i) => (
                          <div
                            key={i}
                            className="h-2 w-2 rounded-full bg-white border-2 border-teal-500"
                            style={{ marginTop: `${pos}px` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-4">
                      <div>Apr</div>
                      <div>May</div>
                      <div>Jun</div>
                      <div>Jul</div>
                      <div>Aug</div>
                      <div>Sep</div>
                      <div>Oct</div>
                    </div>
                  </div>
                </div>

                {/* Sentiment analysis */}
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-3">
                    <h4 className="text-sm font-medium">Sentiment Analysis</h4>
                    <MessageSquare className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h5 className="text-xs font-medium">Top Positive Keywords</h5>
                      {[
                        { word: "Excellent service", count: 127 },
                        { word: "Friendly staff", count: 98 },
                        { word: "Great experience", count: 86 },
                        { word: "Highly recommend", count: 72 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-teal-500 to-blue-500"
                              style={{ width: `${(item.count / 127) * 100}%` }}
                            ></div>
                          </div>
                          <div className="ml-2 text-xs">
                            {item.word} <span className="text-gray-500">({item.count})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      <h5 className="text-xs font-medium">Areas for Improvement</h5>
                      {[
                        { word: "Wait time", count: 34 },
                        { word: "Pricing", count: 28 },
                        { word: "Communication", count: 19 },
                        { word: "Parking", count: 12 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-amber-500 to-red-500"
                              style={{ width: `${(item.count / 34) * 100}%` }}
                            ></div>
                          </div>
                          <div className="ml-2 text-xs">
                            {item.word} <span className="text-gray-500">({item.count})</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating analytics cards */}
              <div className="absolute top-24 right-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 max-w-[180px]">
                <div className="text-sm font-medium mb-2">Sentiment Trend</div>
                <div className="h-20 flex items-end gap-1">
                  <div className="w-1/5 bg-green-500 h-[60%] rounded-t"></div>
                  <div className="w-1/5 bg-green-500 h-[70%] rounded-t"></div>
                  <div className="w-1/5 bg-green-500 h-[65%] rounded-t"></div>
                  <div className="w-1/5 bg-green-500 h-[80%] rounded-t"></div>
                  <div className="w-1/5 bg-green-500 h-[90%] rounded-t"></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">Last 30 days: +15%</div>
              </div>

              <div className="absolute bottom-24 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-100 max-w-[180px]">
                <div className="text-sm font-medium mb-2">Top Feedback Topics</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Service</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-teal-500 h-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Quality</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs">Price</span>
                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="bg-purple-500 h-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">How Businesses Use Our Analytics</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 mb-4">
                <BarChart3 className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Menu Optimization</h4>
              <p className="text-gray-600">
                A restaurant identified their most criticized dishes through review analysis and made targeted
                improvements, increasing their rating from 4.2 to 4.7 stars.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                <LineChart className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Service Improvement</h4>
              <p className="text-gray-600">
                A salon used feedback categories to identify wait time complaints and implemented a new booking system,
                reducing negative reviews by 35%.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 mb-4">
                <PieChart className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Staff Training</h4>
              <p className="text-gray-600">
                An auto repair shop identified specific service areas receiving praise and criticism, creating targeted
                training that improved customer satisfaction by 28%.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
