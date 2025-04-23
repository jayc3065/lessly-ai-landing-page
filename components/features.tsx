"use client"

import { Brain, Clock, Settings, BarChart3, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-teal-500" />,
      title: "Smart tone-matching AI",
      description:
        "Our AI matches your business's tone and style, creating responses that sound like they came from you.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Works 24/7",
      description:
        "Never miss responding to a review, even outside business hours. Replies are posted promptly at any time.",
    },
    {
      icon: <Settings className="h-8 w-8 text-teal-500" />,
      title: "Customizable voice and settings",
      description: "Adjust the tone, style, and content of your responses to perfectly match your brand's personality.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: "Review analytics dashboard",
      description: "Track your review performance, sentiment trends, and response metrics all in one place.",
    },
    {
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      title: "Data security built in",
      description: "Enterprise-grade security ensures your business and customer data remains private and protected.",
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
    <section id="features" className="py-20 bg-gray-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to manage your online reputation effortlessly
            </p>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border shadow-sm hover:shadow-md transition-shadow h-full">
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
