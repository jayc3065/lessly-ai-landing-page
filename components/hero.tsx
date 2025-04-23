"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import VideoModal from "./video-modal"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 -z-10"></div>

      {/* Abstract shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10"></div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-teal-300 opacity-20"></div>
        <div className="absolute top-20 right-20 w-6 h-6 rounded-full bg-blue-300 opacity-20"></div>
        <div className="absolute bottom-40 left-1/4 w-5 h-5 rounded-full bg-teal-400 opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-blue-400 opacity-20"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-teal-200 bg-white px-3 py-1 text-sm text-teal-800 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
                <span>4.9/5 average rating from businesses</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Automate Your Google Review Replies with AI
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Save time and build customer trust with personalized AI-generated responses.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600 px-8 py-6 text-lg shadow-md">
                Get Started for Free
              </Button>
              <Button
                variant="outline"
                className="border-teal-200 hover:bg-teal-50 px-8 py-6 text-lg flex items-center gap-2"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
                Watch Demo
              </Button>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">93%</div>
                <div className="text-sm text-gray-500">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">6.2hrs+</div>
                <div className="text-sm text-gray-500">Time Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-500">Availability</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mx-auto lg:mx-0 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl transform rotate-1 scale-105 opacity-50"></div>
            <div className="relative rounded-2xl overflow-hidden border shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-800 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-white text-sm">Lessly AI Dashboard</div>
              </div>
              <div className="pt-12">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Lessly AI Dashboard"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Animated notification */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 border border-gray-100 max-w-[250px]">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
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
                    className="text-green-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium">New review replied</div>
                  <div className="text-xs text-gray-500">Just now • Automatically</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </section>
  )
}
