"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Clock, Settings, BarChart3, Shield } from "lucide-react"

export default function InteractiveFeatures() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      id: "ai",
      icon: <Brain className="h-8 w-8 text-teal-500" />,
      title: "Smart tone-matching AI",
      description:
        "Our AI matches your business's tone and style, creating responses that sound like they came from you.",
      demo: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="text-sm font-medium mb-2">Customer Review:</div>
            <p className="text-gray-700">
              "The food was amazing and the atmosphere was great! Our server was very attentive. Will definitely be
              coming back!"
            </p>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-sm font-medium mb-1">Casual Tone Response:</div>
              <div className="bg-teal-50 p-3 rounded-lg border border-teal-100 text-gray-700">
                "Thanks so much for the awesome review! We're super happy you enjoyed the food and atmosphere. Our team
                works hard to provide great service, so we'll pass your compliments to your server! Can't wait to see
                you again soon! 😊"
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-1">Professional Tone Response:</div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-gray-700">
                "Thank you for your wonderful feedback. We're delighted to hear that you enjoyed both our cuisine and
                ambiance. We pride ourselves on attentive service, and we appreciate you recognizing our staff's
                efforts. We look forward to welcoming you back again soon."
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "time",
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Works 24/7",
      description:
        "Never miss responding to a review, even outside business hours. Replies are posted promptly at any time.",
      demo: (
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-500 animate-spin"
                style={{ animationDuration: "10s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <div className="text-4xl font-bold text-teal-600">24/7</div>
                <div className="text-gray-500">Availability</div>
              </div>

              {/* Time markers */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-3 bg-gray-400"
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: "bottom center",
                    left: "calc(50% - 0.5px)",
                    top: "0",
                  }}
                ></div>
              ))}

              {/* Review notifications */}
              {[
                { time: "3:45 AM", angle: 105 },
                { time: "11:20 AM", angle: 330 },
                { time: "7:15 PM", angle: 215 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute flex items-center justify-center"
                  style={{
                    transform: `rotate(${item.angle}deg) translateY(-90px)`,
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className="bg-white p-2 rounded-lg shadow-md border transform -rotate-[calc(var(--angle))]"
                    style={{ "--angle": `${item.angle}deg` } as any}
                  >
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs whitespace-nowrap">Review at {item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
            <div className="text-center">
              <p className="text-sm text-gray-700">
                Lessly AI responds to reviews within <span className="font-bold text-teal-600">5 minutes</span> on
                average, regardless of when they're posted.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "customize",
      icon: <Settings className="h-8 w-8 text-teal-500" />,
      title: "Customizable voice and settings",
      description: "Adjust the tone, style, and content of your responses to perfectly match your brand's personality.",
      demo: (
        <div className="space-y-4">
          <div className="bg-white rounded-lg border shadow-sm p-4">
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-2">Response Tone</div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-3/4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Casual</span>
                  <span>Professional</span>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Response Length</div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full w-1/2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Brief</span>
                  <span>Detailed</span>
                </div>
              </div>

              <div>
                <div className="text-sm font-medium mb-2">Custom Phrases</div>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs">
                    Thank you for your feedback
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    We appreciate your business
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                    Hope to see you again soon
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border">
            <div className="text-sm font-medium mb-2">Preview:</div>
            <p className="text-gray-700 italic">
              "Thank you for your feedback! We appreciate your business and are glad you enjoyed your experience. Our
              team works hard to provide excellent service, and we hope to see you again soon!"
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "analytics",
      icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
      title: "Review analytics dashboard",
      description: "Track your review performance, sentiment trends, and response metrics all in one place.",
      demo: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white p-3 rounded-lg border shadow-sm">
              <div className="text-xs text-gray-500">Average Rating</div>
              <div className="text-2xl font-bold text-teal-600">4.8</div>
              <div className="flex items-center text-xs text-green-600">
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
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
                <span>+0.3</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border shadow-sm">
              <div className="text-xs text-gray-500">Response Rate</div>
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="flex items-center text-xs text-green-600">
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
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
                <span>+5%</span>
              </div>
            </div>

            <div className="bg-white p-3 rounded-lg border shadow-sm">
              <div className="text-xs text-gray-500">New Reviews</div>
              <div className="text-2xl font-bold text-purple-600">124</div>
              <div className="flex items-center text-xs text-green-600">
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
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path>
                </svg>
                <span>+12%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border shadow-sm p-4">
            <div className="text-sm font-medium mb-3">Rating Distribution</div>
            <div className="flex items-end h-24 gap-2">
              {[
                { stars: 5, count: 78, percentage: 63 },
                { stars: 4, count: 32, percentage: 26 },
                { stars: 3, count: 8, percentage: 6 },
                { stars: 2, count: 4, percentage: 3 },
                { stars: 1, count: 2, percentage: 2 },
              ].map((rating) => (
                <div key={rating.stars} className="flex-1 flex flex-col items-center">
                  <div className="text-xs text-gray-500 mb-1">{rating.count}</div>
                  <div
                    className={`w-full rounded-t ${
                      rating.stars >= 4 ? "bg-green-500" : rating.stars === 3 ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    style={{ height: `${rating.percentage}%` }}
                  ></div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-yellow-400"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-xs ml-1">{rating.stars}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "security",
      icon: <Shield className="h-8 w-8 text-teal-500" />,
      title: "Data security built in",
      description: "Enterprise-grade security ensures your business and customer data remains private and protected.",
      demo: (
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-teal-500 border-dashed animate-spin"
                style={{ animationDuration: "15s" }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="h-16 w-16 text-teal-500" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border shadow-sm flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                  <path d="M7 12h10"></path>
                  <path d="M12 7v10"></path>
                </svg>
              </div>
              <div className="text-sm">End-to-end encryption</div>
            </div>

            <div className="bg-white p-3 rounded-lg border shadow-sm flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div className="text-sm">GDPR Compliant</div>
            </div>

            <div className="bg-white p-3 rounded-lg border shadow-sm flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="text-sm">Secure OAuth</div>
            </div>

            <div className="bg-white p-3 rounded-lg border shadow-sm flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M21 2H3v16h5v4l4-4h5l4-4V2z"></path>
                  <path d="M10 8h4"></path>
                  <path d="M10 12h4"></path>
                </svg>
              </div>
              <div className="text-sm">24/7 Monitoring</div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Automated Features</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Fully automate your review responses and gain valuable business insights through customer feedback
              analysis
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <Tabs defaultValue="ai" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-md"
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-70 data-[state=active]:opacity-100"></div>
                    <div className="relative">{feature.icon}</div>
                  </div>
                  <span className="text-xs font-medium">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="bg-white rounded-xl shadow-md border p-6">
              <AnimatePresence mode="wait">
                {features.map((feature) => (
                  <TabsContent key={feature.id} value={feature.id} className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid md:grid-cols-2 gap-8 items-center"
                    >
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-600 mb-6">{feature.description}</p>
                        <div className="flex flex-col gap-3">
                          <div className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-teal-600"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span>Easy to set up and configure</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-blue-600"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span>Works with all major review platforms</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-teal-600"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                            </div>
                            <span>Continuously improves with your feedback</span>
                          </div>
                        </div>
                      </div>

                      <Card className="overflow-hidden border shadow-md">
                        <CardContent className="p-6">{feature.demo}</CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
