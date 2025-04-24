"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "Lessly AI has saved our restaurant hours each week. The responses are personalized and our customers love the quick replies. Our review rating has improved from 4.2 to 4.7 stars since we started using it!",
      author: "Maria Rodriguez",
      role: "Restaurant Owner",
      avatar: "MR",
      business: "Taste of Italy",
      rating: 5,
    },
    {
      quote:
        "As a busy salon owner, I never had time to reply to all our Google reviews. Now Lessly does it for me, and it sounds just like me! The AI captures my tone perfectly and clients appreciate the personal touch.",
      author: "James Wilson",
      role: "Salon Owner",
      avatar: "JW",
      business: "Style Studio",
      rating: 5,
    },
    {
      quote:
        "Our auto repair shop has seen a 30% increase in new customers since we started responding to every review with Lessly AI. The analytics dashboard helps us identify what customers love most about our service.",
      author: "David Chen",
      role: "Auto Shop Manager",
      avatar: "DC",
      business: "Premier Auto Care",
      rating: 5,
    },
    {
      quote:
        "The customization options are incredible. We've set up Lessly to match our brand voice perfectly, and it handles both positive and negative reviews with the right tone. Worth every penny for our dental practice.",
      author: "Sarah Johnson",
      role: "Dental Office Manager",
      avatar: "SJ",
      business: "Bright Smile Dental",
      rating: 5,
    },
    {
      quote:
        "I was skeptical about AI writing responses, but Lessly has blown me away. It's saved me at least 5 hours every week and the responses are often better than what I would write myself. Highly recommend!",
      author: "Michael Brown",
      role: "Hotel Manager",
      avatar: "MB",
      business: "Harbor View Inn",
      rating: 5,
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay || !inView) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay, inView])

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join hundreds of businesses saving time with Lessly AI
            </p>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto px-8">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-md border-gray-200 hover:bg-gray-100"
            onClick={() => {
              prev()
              setAutoplay(false)
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="overflow-hidden py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-full p-3 shadow-lg">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>

                <Card className="bg-white border shadow-lg max-w-3xl">
                  <CardContent className="pt-10 px-8 pb-6">
                    <p className="text-gray-700 text-lg italic text-center">"{testimonials[current].quote}"</p>
                  </CardContent>
                  <CardFooter className="flex flex-col items-center gap-4 pt-4 pb-8 border-t">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={`/placeholder-icon.png?height=64&width=64&text=${testimonials[current].avatar}`}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-teal-400 to-blue-400 text-white text-xl">
                        {testimonials[current].avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <div className="text-lg font-semibold">{testimonials[current].author}</div>
                      <div className="text-sm text-gray-500">
                        {testimonials[current].role}, {testimonials[current].business}
                      </div>
                      <div className="flex justify-center mt-2">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="text-yellow-400"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white shadow-md border-gray-200 hover:bg-gray-100"
            onClick={() => {
              next()
              setAutoplay(false)
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? "bg-gradient-to-r from-teal-500 to-blue-500" : "bg-gray-300"
                }`}
                onClick={() => {
                  setCurrent(i)
                  setAutoplay(false)
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
