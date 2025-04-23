"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, Star, TrendingUp, Clock, AlertCircle } from "lucide-react"

export default function ReviewImportance() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      value: "89%",
      description: "of consumers read businesses' responses to reviews",
      icon: <ThumbsUp className="h-8 w-8 text-teal-500" />,
      source: "BrightLocal",
    },
    {
      value: "45%",
      description: "higher likelihood of visit when businesses respond to negative reviews",
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      source: "Harvard Business Review",
    },
    {
      value: "76%",
      description: "of customers expect businesses to respond to their reviews",
      icon: <AlertCircle className="h-8 w-8 text-teal-500" />,
      source: "ReviewTrackers",
    },
    {
      value: "30%",
      description: "increase in conversion rate for businesses that respond to reviews",
      icon: <Star className="h-8 w-8 text-blue-500" />,
      source: "Vendasta",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
            <span className="font-medium">Customer Satisfaction</span>
          </div>
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Review Responses Are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">Critical</span>{" "}
              For Your Business
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Responding to reviews isn't just good manners—it's essential for business growth. The data shows that
              customers expect responses and make decisions based on how businesses engage with feedback.
            </p>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border shadow-md h-full overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-100 to-blue-100 rounded-bl-full opacity-70"></div>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 relative z-10">{stat.icon}</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <p className="text-gray-600 mb-4">{stat.description}</p>
                  <div className="text-xs text-gray-400 mt-auto">Source: {stat.source}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4">The Cost of Not Responding</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <span className="font-medium">Lost Time:</span> Business owners spend an average of 6.2+ hours
                    monthly manually responding to reviews
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <span className="font-medium">Lost Trust:</span> 40% of customers say they won't return to a
                    business that doesn't respond to negative reviews
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <span className="font-medium">Lost Revenue:</span> Businesses that don't respond to reviews see 15%
                    lower revenue growth compared to responsive competitors
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Customer Satisfaction Cycle</h3>
                <p className="text-gray-600">Responding to reviews creates a positive feedback loop</p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full border-4 border-dashed border-teal-200 animate-spin-slow"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Respond", desc: "Reply to customer reviews promptly" },
                    { title: "Build Trust", desc: "Show customers you value their feedback" },
                    { title: "Retain", desc: "Keep existing customers coming back" },
                    { title: "Attract", desc: "Draw in new customers who read responses" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="font-bold text-teal-600">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 px-8 py-6 text-lg">
            Start Responding Automatically
          </Button>
        </div>
      </div>
    </section>
  )
}
