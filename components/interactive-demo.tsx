"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star, Loader2, ThumbsUp, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function InteractiveDemo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [review, setReview] = useState("")
  const [rating, setRating] = useState(4)
  const [isGenerating, setIsGenerating] = useState(false)
  const [response, setResponse] = useState("")
  const [showResponse, setShowResponse] = useState(false)
  const [responseQuality, setResponseQuality] = useState<null | "good" | "excellent">(null)

  const exampleReviews = [
    "The food was amazing but the service was a bit slow. Would come back again though!",
    "Great haircut, but the salon was too noisy. Overall good experience.",
    "My car was fixed perfectly. Excellent service and fair pricing. Highly recommend!",
  ]

  const handleGenerateResponse = () => {
    if (!review.trim()) return

    setIsGenerating(true)
    setShowResponse(false)
    setResponse("")
    setResponseQuality(null)

    // Simulate API call delay
    setTimeout(() => {
      const responses = [
        `Thank you for your feedback! We're glad you enjoyed your experience overall. We appreciate your comments about the service speed and are actively working to improve this aspect. We hope to welcome you back soon and provide an even better experience!`,
        `We appreciate your honest review! Thank you for highlighting what you enjoyed and where we can improve. We're constantly working on creating a better environment for our customers while maintaining our quality service. We hope to see you again soon!`,
        `Thank you so much for your kind words! We're thrilled to hear that you were satisfied with our service and pricing. Our team takes great pride in providing excellent service, and your recommendation means a lot to us. We look forward to serving you again in the future!`,
      ]

      // Generate a tailored response based on the review content
      let generatedResponse = ""

      // Check for specific review content to personalize response
      if (review.toLowerCase().includes("food") || review.toLowerCase().includes("restaurant")) {
        generatedResponse = `Thank you for your dining feedback! We're delighted you took the time to share your experience with our cuisine${review.toLowerCase().includes("service") ? " and service" : ""}. ${rating >= 4 ? "We're thrilled you enjoyed your meal with us!" : "We appreciate your honest feedback and will use it to improve our offerings."} Your specific comments help our chef and staff continue to refine the dining experience. We hope to welcome you back soon!`
      } else if (review.toLowerCase().includes("haircut") || review.toLowerCase().includes("salon")) {
        generatedResponse = `Thank you for your salon feedback! We value your thoughts on your recent visit${review.toLowerCase().includes("noisy") ? " and appreciate your comment about the noise level" : ""}. ${rating >= 4 ? "We're delighted you enjoyed your experience!" : "We take your suggestions seriously and will work to improve."} Our stylists are committed to providing the best service possible, and your feedback helps us maintain that standard. We look forward to seeing you again!`
      } else if (review.toLowerCase().includes("car") || review.toLowerCase().includes("repair")) {
        generatedResponse = `Thank you for taking the time to review our auto service! ${rating >= 4 ? "We're thrilled to hear about your positive experience with our repair work." : "We appreciate your honest assessment of our service."} ${review.toLowerCase().includes("price") || review.toLowerCase().includes("pricing") ? "We always strive to provide fair and transparent pricing for all our services." : "We're committed to providing reliable service for all your automotive needs."} Your vehicle's performance and your satisfaction are our top priorities. We hope to serve you again soon!`
      } else {
        // For other reviews, create a generic but personalized response based on rating
        generatedResponse = `Thank you for your ${rating >= 4 ? "wonderful" : "valuable"} feedback! We appreciate you taking the time to share your experience with us. ${rating >= 4 ? "We're delighted to hear that you had a positive experience." : "Your insights help us identify areas where we can improve."} ${review.toLowerCase().includes("recommend") ? "And thank you for recommending us - that means a lot!" : 'Your comments have been shared with our team to ensure we continue to ${rating >= 4 ? "provide excellent service" : "improve our service'}."} We hope to see you again soon!`
      }

      // Check for specific examples as a fallback
      for (let i = 0; i < exampleReviews.length; i++) {
        if (review.includes(exampleReviews[i].substring(0, 15))) {
          generatedResponse = responses[i]
          break
        }
      }

      setResponse(generatedResponse)
      setIsGenerating(false)
      setShowResponse(true)
      setResponseQuality(rating >= 4 ? "excellent" : "good")
    }, 1500)
  }

  const handleSelectExample = (example: string) => {
    setReview(example)
    setShowResponse(false)
    setResponse("")
    setResponseQuality(null)
  }

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="inline-flex items-center justify-center rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
            <span className="font-medium">Try It Yourself</span>
          </div>
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See How Lessly AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Responds to Reviews
              </span>
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Try our interactive demo to see how Lessly AI generates personalized, professional responses to customer
              reviews
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
                <h3 className="font-medium text-lg">Customer Review</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-sm font-medium">Rating:</div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setRating(star)} className="focus:outline-none">
                        <Star
                          className={`h-6 w-6 ${
                            star <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <Textarea
                  placeholder="Enter a customer review here..."
                  className="min-h-[150px] resize-none"
                  value={review}
                  onChange={(e) => {
                    setReview(e.target.value)
                    setShowResponse(false)
                  }}
                />

                <div className="space-y-2">
                  <div className="text-sm font-medium">Or try an example:</div>
                  <div className="flex flex-wrap gap-2">
                    {exampleReviews.map((example, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSelectExample(example)}
                        className="text-xs"
                      >
                        Example {index + 1}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleGenerateResponse}
                  disabled={isGenerating || !review.trim()}
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Response...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Generate AI Response
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-50 p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="font-medium text-lg">Lessly AI Response</h3>
                {responseQuality && (
                  <Badge
                    className={
                      responseQuality === "excellent"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    }
                  >
                    {responseQuality === "excellent" ? "Excellent Match" : "Good Match"}
                  </Badge>
                )}
              </div>
              <div className="p-6 flex flex-col justify-between h-[calc(100%-57px)]">
                <div>
                  {!showResponse && !isGenerating && (
                    <div className="flex flex-col items-center justify-center h-[150px] text-gray-400 text-center">
                      <Send className="h-12 w-12 mb-2 opacity-20" />
                      <p>Enter a review and click "Generate AI Response" to see Lessly AI in action</p>
                    </div>
                  )}

                  {isGenerating && (
                    <div className="flex flex-col items-center justify-center h-[150px]">
                      <div className="relative">
                        <div className="h-16 w-16 rounded-full border-4 border-t-teal-500 border-r-transparent border-b-blue-500 border-l-transparent animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"></div>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-500">Lessly AI is crafting a response...</p>
                    </div>
                  )}

                  {showResponse && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-white"
                            >
                              <path d="M12 8V4H8"></path>
                              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                              <path d="M2 14h2"></path>
                              <path d="M20 14h2"></path>
                              <path d="M15 13v2"></path>
                              <path d="M9 13v2"></path>
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-teal-700">
                            AI-Generated Response (Tailored to this specific review)
                          </span>
                        </div>
                        <p className="text-gray-700">{response}</p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {showResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 flex flex-col items-center"
                  >
                    <p className="text-sm text-gray-500 mb-2">How was this response?</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" /> Excellent
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4 rotate-180" /> Needs Improvement
                      </Button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
