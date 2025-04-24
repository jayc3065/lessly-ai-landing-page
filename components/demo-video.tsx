"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Settings, MessageSquare, Star, BarChart3, Bell, Check, Sliders, Users, Globe, FileText } from "lucide-react"

export default function DashboardPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("overview")
  const [responseLength, setResponseLength] = useState([50])
  const [responseTone, setResponseTone] = useState([70])
  const [personalization, setPersonalization] = useState([85])
  const [autoRespond, setAutoRespond] = useState(true)
  const [includeBusiness, setIncludeBusiness] = useState(true)
  const [thankCustomers, setThankCustomers] = useState(true)
  const [inviteReturn, setInviteReturn] = useState(true)

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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Interactive Dashboard Preview</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the Lessly AI dashboard and customize your response settings
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 transform -rotate-1 scale-105 opacity-50"></div>
          <div className="relative bg-white rounded-xl overflow-hidden border">
            {/* Dashboard Header */}
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"></div>
                <span className="text-lg font-medium">Lessly AI Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs px-2 py-1 bg-teal-900 text-teal-100 rounded-full border border-teal-700">
                  Business Plan
                </div>
                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <Tabs defaultValue="settings" className="w-full">
              <div className="border-b">
                <TabsList className="p-0 bg-transparent border-b">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-teal-500 data-[state=active]:shadow-none rounded-none px-4 py-2"
                    onClick={() => setActiveTab("overview")}
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-teal-500 data-[state=active]:shadow-none rounded-none px-4 py-2"
                    onClick={() => setActiveTab("reviews")}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Reviews
                  </TabsTrigger>
                  <TabsTrigger
                    value="settings"
                    className="data-[state=active]:border-b-2 data-[state=active]:border-teal-500 data-[state=active]:shadow-none rounded-none px-4 py-2"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="p-0">
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-gray-500">Total Reviews</div>
                          <div className="text-2xl font-bold mt-1">124</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-teal-500" />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-green-600">
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
                          className="mr-1"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        +12% vs. last period
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-gray-500">Average Rating</div>
                          <div className="text-2xl font-bold mt-1">4.7</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                          <Star className="h-5 w-5 text-yellow-500" />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-green-600">
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
                          className="mr-1"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        +0.3 vs. last period
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-gray-500">Response Rate</div>
                          <div className="text-2xl font-bold mt-1">98%</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-green-600">
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
                          className="mr-1"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        +5% vs. last period
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-sm text-gray-500">Avg. Response Time</div>
                          <div className="text-2xl font-bold mt-1">4.2m</div>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
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
                            className="text-blue-500"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-green-600">
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
                          className="mr-1 rotate-180"
                        >
                          <path d="m5 12 7-7 7 7"></path>
                          <path d="M12 19V5"></path>
                        </svg>
                        -30% vs. last period
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="text-center text-gray-500">
                      <p>Interactive dashboard charts and analytics would appear here</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Recent Reviews</h3>
                    <div className="flex items-center gap-2">
                      <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">All Platforms</div>
                      <div className="text-xs px-2 py-1 border rounded-full">Last 30 Days</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Review items */}
                    {[
                      {
                        name: "Sarah Johnson",
                        rating: 5,
                        date: "2 days ago",
                        content:
                          "Amazing service! The staff was incredibly helpful and the quality exceeded my expectations.",
                        responded: true,
                        platform: "Google",
                      },
                      {
                        name: "Michael Chen",
                        rating: 4,
                        date: "1 week ago",
                        content:
                          "Great experience overall. Would have given 5 stars but had to wait a bit longer than expected.",
                        responded: true,
                        platform: "Yelp",
                      },
                      {
                        name: "Jessica Williams",
                        rating: 3,
                        date: "2 weeks ago",
                        content: "Decent service but room for improvement in terms of communication.",
                        responded: false,
                        platform: "Google",
                      },
                    ].map((review, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium">{review.name}</div>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">{review.date}</span>
                                <span className="text-xs px-1.5 py-0.5 border rounded-full">{review.platform}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            {review.responded ? (
                              <div className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full flex items-center gap-1">
                                <Check className="h-3 w-3" /> Responded
                              </div>
                            ) : (
                              <div className="text-xs px-2 py-1 border border-amber-300 text-amber-600 rounded-full flex items-center gap-1">
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
                                  className="mr-1"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                Pending
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="mt-3 text-gray-600">{review.content}</div>
                        {review.responded && (
                          <div className="mt-3 pl-4 border-l-2 border-teal-200">
                            <div className="text-sm text-gray-500">Your response:</div>
                            <div className="text-sm text-gray-600">
                              Thank you for your feedback! We're glad you had a positive experience and appreciate you
                              taking the time to share your thoughts.
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">AI Response Settings</h3>
                    <Button size="sm" className="h-8 bg-teal-500 hover:bg-teal-600">
                      Save Changes
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left sidebar */}
                    <div className="md:col-span-1">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-md">
                          <Sliders className="h-4 w-4 text-teal-500" />
                          <span className="text-sm font-medium">AI Response Settings</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
                          <Bell className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Notifications</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
                          <Users className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Team Members</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
                          <Globe className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Connected Accounts</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">Billing & Plans</span>
                        </div>
                      </div>
                    </div>

                    {/* Main settings area */}
                    <div className="md:col-span-2 space-y-8">
                      {/* AI Response Settings */}
                      <div className="space-y-6">
                        <div className="pb-4 border-b">
                          <h4 className="text-base font-medium mb-1">AI Response Style</h4>
                          <p className="text-sm text-gray-500">Customize how the AI responds to your customers</p>
                        </div>

                        {/* Tone settings */}
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-2">
                              <label className="text-sm font-medium">Response Tone</label>
                              <span className="text-sm text-teal-600">Professional</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-gray-500">Casual</span>
                              <Slider
                                defaultValue={responseTone}
                                max={100}
                                step={1}
                                className="flex-1"
                                onValueChange={setResponseTone}
                              />
                              <span className="text-xs text-gray-500">Formal</span>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-2">
                              <label className="text-sm font-medium">Response Length</label>
                              <span className="text-sm text-teal-600">Medium</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-gray-500">Brief</span>
                              <Slider
                                defaultValue={responseLength}
                                max={100}
                                step={1}
                                className="flex-1"
                                onValueChange={setResponseLength}
                              />
                              <span className="text-xs text-gray-500">Detailed</span>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between mb-2">
                              <label className="text-sm font-medium">Personalization Level</label>
                              <span className="text-sm text-teal-600">High</span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-xs text-gray-500">Generic</span>
                              <Slider
                                defaultValue={personalization}
                                max={100}
                                step={1}
                                className="flex-1"
                                onValueChange={setPersonalization}
                              />
                              <span className="text-xs text-gray-500">Personalized</span>
                            </div>
                          </div>
                        </div>

                        {/* Response behavior */}
                        <div className="space-y-4 pt-2">
                          <h5 className="text-sm font-medium">Response Behavior</h5>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Automatic Responses</div>
                              <div className="text-xs text-gray-500">Allow AI to respond without approval</div>
                            </div>
                            <Switch checked={autoRespond} onCheckedChange={setAutoRespond} />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Include Business Name</div>
                              <div className="text-xs text-gray-500">Mention your business name in responses</div>
                            </div>
                            <Switch checked={includeBusiness} onCheckedChange={setIncludeBusiness} />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Thank Customers</div>
                              <div className="text-xs text-gray-500">Include thank you message in responses</div>
                            </div>
                            <Switch checked={thankCustomers} onCheckedChange={setThankCustomers} />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Invite Return Visits</div>
                              <div className="text-xs text-gray-500">Encourage customers to visit again</div>
                            </div>
                            <Switch checked={inviteReturn} onCheckedChange={setInviteReturn} />
                          </div>
                        </div>

                        {/* Custom phrases */}
                        <div className="pt-2">
                          <h5 className="text-sm font-medium mb-3">Custom Phrases to Include</h5>
                          <div className="border rounded-md p-3 bg-gray-50">
                            <div className="flex flex-wrap gap-2 mb-2">
                              <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs flex items-center">
                                Thank you for your feedback
                                <button className="ml-1 text-teal-600 hover:text-teal-800">×</button>
                              </div>
                              <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs flex items-center">
                                We appreciate your business
                                <button className="ml-1 text-teal-600 hover:text-teal-800">×</button>
                              </div>
                              <div className="bg-teal-100 text-teal-800 px-2 py-1 rounded-full text-xs flex items-center">
                                Hope to see you again soon
                                <button className="ml-1 text-teal-600 hover:text-teal-800">×</button>
                              </div>
                            </div>
                            <div className="flex">
                              <input
                                type="text"
                                placeholder="Add a custom phrase..."
                                className="flex-1 text-sm border-0 bg-transparent focus:outline-none focus:ring-0"
                              />
                              <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Preview */}
                      <div className="pt-4 border-t">
                        <h5 className="text-sm font-medium mb-3">Response Preview</h5>
                        <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-100">
                          <p className="text-gray-700 text-sm italic">
                            Thank you for your feedback! {includeBusiness && "At [Your Business Name], "}
                            we're {responseTone[0] > 50 ? "delighted" : "happy"} to hear about your experience.
                            {responseLength[0] > 50 &&
                              " Your comments help us understand what we're doing well and where we can improve to better serve our customers."}
                            {thankCustomers &&
                              " We truly appreciate you taking the time to share your thoughts with us."}
                            {inviteReturn && " We look forward to serving you again soon!"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600">
            Try Lessly AI Dashboard
          </Button>
        </div>
      </div>
    </section>
  )
}
