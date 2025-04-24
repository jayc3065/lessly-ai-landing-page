"use client"

import { Button } from "@/components/ui/button"
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
              <div className="pt-0">
                <div className="relative w-full h-[600px]">
                  {/* Purple gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900 rounded-md overflow-hidden">
                    {/* Abstract design elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/4 w-56 h-56 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                    {/* Subtle grid pattern */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    ></div>

                    {/* Product UI */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      {/* Logo and version */}
                      <div className="mb-8 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3">
                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600"></div>
                          </div>
                          <h2 className="text-4xl font-bold text-white">
                            Lessly <span className="text-purple-200">2.0</span>
                          </h2>
                        </div>
                        <p className="text-purple-200 text-lg">Advanced AI Review Management</p>
                      </div>

                      {/* Dashboard preview */}
                      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden">
                        <div className="bg-gray-800 text-white p-3 flex items-center">
                          <div className="flex space-x-2 mr-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-sm">Lessly 2.0 Dashboard</span>
                        </div>

                        <div className="p-4 bg-gray-50">
                          {/* Dashboard content */}
                          <div className="flex mb-4">
                            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mr-2">
                              Overview
                            </div>
                            <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium mr-2">
                              Reviews
                            </div>
                            <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                              Analytics
                            </div>
                          </div>

                          {/* Stats row */}
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            {[
                              { label: "Total Reviews", value: "842", change: "+12%" },
                              { label: "Average Rating", value: "4.8", change: "+0.2" },
                              { label: "Response Rate", value: "98%", change: "+5%" },
                            ].map((stat, i) => (
                              <div key={i} className="bg-white p-3 rounded-lg border shadow-sm">
                                <div className="text-xs text-gray-500">{stat.label}</div>
                                <div className="text-xl font-bold">{stat.value}</div>
                                <div className="text-xs text-green-600 mt-1">{stat.change} ↑</div>
                              </div>
                            ))}
                          </div>

                          {/* Recent reviews */}
                          <div className="bg-white rounded-lg border p-3 mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="text-sm font-medium">Recent Reviews</h4>
                              <span className="text-xs text-purple-600">View all</span>
                            </div>

                            <div className="space-y-2">
                              {[
                                { name: "Sarah J.", rating: 5, time: "2h ago" },
                                { name: "Michael C.", rating: 4, time: "5h ago" },
                              ].map((review, i) => (
                                <div key={i} className="flex items-center justify-between border-b pb-2">
                                  <div className="flex items-center">
                                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs">
                                      {review.name.charAt(0)}
                                    </div>
                                    <span className="text-xs">{review.name}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="flex mr-2">
                                      {[...Array(5)].map((_, i) => (
                                        <div
                                          key={i}
                                          className={`h-2 w-2 ${i < review.rating ? "bg-yellow-400" : "bg-gray-200"} rounded-full mr-0.5`}
                                        ></div>
                                      ))}
                                    </div>
                                    <span className="text-xs text-gray-400">{review.time}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* AI response preview */}
                          <div className="bg-purple-50 border border-purple-100 rounded-lg p-3">
                            <div className="flex items-center mb-2">
                              <div className="h-5 w-5 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mr-2"></div>
                              <span className="text-xs font-medium text-purple-800">AI Response Preview</span>
                            </div>
                            <p className="text-xs text-gray-600 bg-white p-2 rounded border">
                              Thank you for your wonderful feedback, Sarah! We're thrilled to hear you had such a
                              positive experience with our service. Your kind words mean a lot to our team, and we look
                              forward to serving you again soon!
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Product badge */}
                      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                        <span className="text-xs font-medium text-white">NEW RELEASE</span>
                      </div>
                    </div>
                  </div>

                  {/* Add some CSS animations */}
                  <style jsx>{`
                    @keyframes blob {
                      0% { transform: scale(1); }
                      33% { transform: scale(1.1) translate(20px, -10px); }
                      66% { transform: scale(0.9) translate(-20px, 10px); }
                      100% { transform: scale(1); }
                    }
                    .animate-blob {
                      animation: blob 7s infinite alternate;
                    }
                    .animation-delay-2000 {
                      animation-delay: 2s;
                    }
                    .animation-delay-4000 {
                      animation-delay: 4s;
                    }
                  `}</style>
                </div>
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
