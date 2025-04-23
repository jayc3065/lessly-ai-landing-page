"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import VideoModal from "./video-modal"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function DemoVideo() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-10"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">See Lessly AI in Action</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Watch how easy it is to automate your Google review responses
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 z-10"></div>

          {/* Video thumbnail */}
          <div className="aspect-video bg-gray-900 relative">
            {/* Replace with actual thumbnail image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
              <img
                src="/placeholder.svg?height=720&width=1280&text=Lessly+AI+Demo"
                alt="Lessly AI Demo Video Thumbnail"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {/* Play button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute inset-0 flex items-center justify-center z-20 group"
              aria-label="Play demo video"
            >
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-white/90 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="h-10 w-10 text-teal-600 group-hover:text-teal-700 transition-colors ml-1" />
              </div>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            </button>
          </div>

          {/* Video highlights */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white z-20">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
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
                  className="text-teal-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Easy Setup</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="text-teal-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>AI Response Quality</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="text-teal-400"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Analytics Dashboard</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />
    </section>
  )
}
