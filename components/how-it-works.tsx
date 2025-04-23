"use client"

import { Link2, MessageSquare, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      title: "Connect your Google Business Profile",
      description: "Easily link your Google Business account with just a few clicks. No technical skills required.",
      icon: <Link2 className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "AI reads your reviews and context",
      description: "Our AI analyzes your reviews, business details, and customer sentiment to understand context.",
      icon: <MessageSquare className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "Automatically posts friendly, accurate replies",
      description: "Personalized responses are posted automatically, saving you hours of work each week.",
      icon: <Send className="h-10 w-10 text-teal-500" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Three simple steps to automate your Google review responses
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-12 pt-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full scale-110 blur-sm"></div>
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-200 to-blue-200 hidden md:block"
                    style={{ width: "calc(100% - 5rem)" }}
                  ></div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
