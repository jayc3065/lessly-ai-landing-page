"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import {
  Settings,
  Bell,
  Users,
  BarChart,
  MessageSquare,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  PieChart,
  LineChart,
  ArrowUpRight,
  ArrowDownRight,
  Sliders,
  Mail,
  Smartphone,
  Globe,
  Palette,
  Volume2,
  FileText,
} from "lucide-react"

export default function DashboardPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const dashboardFeatures = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Review Management",
      description: "View, filter, and manage all your reviews in one place",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Custom Notifications",
      description: "Set up alerts for specific review types or ratings",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Response Settings",
      description: "Customize AI response tone, length, and content",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Performance Analytics",
      description: "Track review metrics and response effectiveness",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Collaboration",
      description: "Add team members with custom permission levels",
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Review Requests",
      description: "Generate links to request reviews from customers",
    },
  ]

  return (
    <section id="dashboard" className="py-20 bg-gray-50" ref={ref}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-700 mb-2">
            <span className="font-medium">For Paid Users</span>
          </div>
          <div className="space-y-2 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Powerful Dashboard To{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
                Manage Everything
              </span>
            </h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Take control of your online reputation with our comprehensive dashboard. Monitor, manage, and optimize
              your review responses all in one place.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-blue-100 rounded-2xl transform rotate-1 scale-[1.03] opacity-50"></div>
          <div className="relative bg-white rounded-2xl overflow-hidden border shadow-xl">
            <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-blue-500"></div>
                <span className="text-lg font-medium">Lessly AI Dashboard</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="bg-teal-900 text-teal-100 border-teal-700">
                  Business Plan
                </Badge>
                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="reviews" className="w-full">
              <div className="border-b">
                <div className="flex items-center px-4">
                  <TabsList className="h-14">
                    <TabsTrigger value="reviews" className="data-[state=active]:bg-transparent">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Reviews
                    </TabsTrigger>
                    <TabsTrigger value="analytics" className="data-[state=active]:bg-transparent">
                      <BarChart className="h-4 w-4 mr-2" />
                      Analytics
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="data-[state=active]:bg-transparent">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                </div>
              </div>

              <TabsContent value="reviews" className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Recent Reviews</h3>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200">All Platforms</Badge>
                      <Badge variant="outline">Last 30 Days</Badge>
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
                                      className={`h-4 w-4 ${
                                        i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span className="text-xs text-gray-500">{review.date}</span>
                                <Badge variant="outline" className="text-xs">
                                  {review.platform}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          <div>
                            {review.responded ? (
                              <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                                <CheckCircle className="h-3 w-3" /> Responded
                              </Badge>
                            ) : (
                              <Badge
                                variant="outline"
                                className="text-amber-600 border-amber-300 flex items-center gap-1"
                              >
                                <Clock className="h-3 w-3" /> Pending
                              </Badge>
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

              <TabsContent value="analytics" className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Analytics Overview</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Last 30 Days</Badge>
                      <Button variant="outline" size="sm" className="h-8">
                        Export
                      </Button>
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      {
                        title: "Total Reviews",
                        value: "124",
                        change: "+12%",
                        trend: "up",
                        icon: <MessageSquare className="h-5 w-5 text-teal-500" />,
                      },
                      {
                        title: "Average Rating",
                        value: "4.7",
                        change: "+0.3",
                        trend: "up",
                        icon: <Star className="h-5 w-5 text-yellow-500" />,
                      },
                      {
                        title: "Response Rate",
                        value: "98%",
                        change: "+5%",
                        trend: "up",
                        icon: <CheckCircle className="h-5 w-5 text-green-500" />,
                      },
                      {
                        title: "Avg. Response Time",
                        value: "4.2m",
                        change: "-30%",
                        trend: "down",
                        icon: <Clock className="h-5 w-5 text-blue-500" />,
                      },
                    ].map((metric, index) => (
                      <div key={index} className="bg-white border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="text-sm text-gray-500">{metric.title}</div>
                            <div className="text-2xl font-bold mt-1">{metric.value}</div>
                          </div>
                          <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                            {metric.icon}
                          </div>
                        </div>
                        <div className="mt-2 flex items-center">
                          {metric.trend === "up" ? (
                            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                          ) : (
                            <ArrowDownRight className="h-4 w-4 text-green-500 mr-1" />
                          )}
                          <span className={`text-sm ${metric.trend === "up" ? "text-green-500" : "text-green-500"}`}>
                            {metric.change}
                          </span>
                          <span className="text-xs text-gray-400 ml-1">vs. last period</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Rating distribution */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Rating Distribution</h4>
                        <PieChart className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="flex items-end h-40 gap-2 mt-4 px-4">
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
                              <Star
                                className={`h-3 w-3 ${
                                  rating.stars >= 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                              <span className="text-xs ml-1">{rating.stars}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Review trend */}
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium">Review Trend</h4>
                        <LineChart className="h-4 w-4 text-gray-400" />
                      </div>
                      <div className="h-40 mt-4">
                        <div className="relative h-full">
                          {/* Line chart */}
                          <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                            {/* Grid lines */}
                            <line x1="0" y1="0" x2="300" y2="0" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="25" x2="300" y2="25" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="75" x2="300" y2="75" stroke="#f1f5f9" strokeWidth="1" />
                            <line x1="0" y1="100" x2="300" y2="100" stroke="#f1f5f9" strokeWidth="1" />

                            {/* Rating line */}
                            <path
                              d="M0,50 C20,60 40,40 60,45 C80,50 100,30 120,35 C140,40 160,20 180,15 C200,10 220,25 240,20 C260,15 280,10 300,5"
                              fill="none"
                              stroke="#14b8a6"
                              strokeWidth="2"
                            />

                            {/* Volume area */}
                            <path
                              d="M0,100 C20,90 40,95 60,85 C80,75 100,80 120,70 C140,60 160,65 180,55 C200,60 220,50 240,55 C260,60 280,50 300,55 L300,100 L0,100 Z"
                              fill="url(#gradient)"
                              opacity="0.2"
                            />

                            <defs>
                              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#14b8a6" />
                                <stop offset="100%" stopColor="#ffffff" />
                              </linearGradient>
                            </defs>
                          </svg>

                          {/* Y-axis labels */}
                          <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-400 py-1">
                            <div>5.0</div>
                            <div>4.0</div>
                            <div>3.0</div>
                            <div>2.0</div>
                            <div>1.0</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400 mt-2 px-4">
                        <div>Apr</div>
                        <div>May</div>
                        <div>Jun</div>
                        <div>Jul</div>
                        <div>Aug</div>
                        <div>Sep</div>
                      </div>
                    </div>
                  </div>

                  {/* Feedback analysis */}
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium">Feedback Analysis</h4>
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-sm font-medium mb-3">Most Mentioned Topics</h5>
                        <div className="space-y-3">
                          {[
                            { topic: "Customer Service", percentage: 68, sentiment: "positive" },
                            { topic: "Product Quality", percentage: 52, sentiment: "positive" },
                            { topic: "Wait Time", percentage: 34, sentiment: "negative" },
                            { topic: "Price", percentage: 27, sentiment: "neutral" },
                          ].map((topic, index) => (
                            <div key={index}>
                              <div className="flex justify-between text-xs mb-1">
                                <span>{topic.topic}</span>
                                <span
                                  className={
                                    topic.sentiment === "positive"
                                      ? "text-green-500"
                                      : topic.sentiment === "negative"
                                        ? "text-red-500"
                                        : "text-gray-500"
                                  }
                                >
                                  {topic.sentiment}
                                </span>
                              </div>
                              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${
                                    topic.sentiment === "positive"
                                      ? "bg-green-500"
                                      : topic.sentiment === "negative"
                                        ? "bg-red-500"
                                        : "bg-gray-400"
                                  }`}
                                  style={{ width: `${topic.percentage}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-right mt-1 text-gray-500">{topic.percentage}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-3">Sentiment Analysis</h5>
                        <div className="flex items-center justify-center h-40">
                          {/* Donut chart */}
                          <div className="relative h-32 w-32">
                            <svg viewBox="0 0 36 36" className="h-full w-full">
                              <circle cx="18" cy="18" r="16" fill="none" stroke="#f1f5f9" strokeWidth="4"></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="4"
                                strokeDasharray="100.48"
                                strokeDashoffset="25.12"
                                transform="rotate(-90 18 18)"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                stroke="#f59e0b"
                                strokeWidth="4"
                                strokeDasharray="100.48"
                                strokeDashoffset="75.36"
                                transform="rotate(-90 18 18)"
                              ></circle>
                              <circle
                                cx="18"
                                cy="18"
                                r="16"
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="4"
                                strokeDasharray="100.48"
                                strokeDashoffset="90.432"
                                transform="rotate(-90 18 18)"
                              ></circle>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-2xl font-bold">75%</div>
                                <div className="text-xs text-gray-500">Positive</div>
                              </div>
                            </div>
                          </div>
                          <div className="ml-4 space-y-2">
                            <div className="flex items-center">
                              <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-xs">Positive (75%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                              <span className="text-xs">Neutral (15%)</span>
                            </div>
                            <div className="flex items-center">
                              <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                              <span className="text-xs">Negative (10%)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="settings" className="p-0">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Account Settings</h3>
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
                              <Slider defaultValue={[70]} max={100} step={1} className="flex-1" />
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
                              <Slider defaultValue={[50]} max={100} step={1} className="flex-1" />
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
                              <Slider defaultValue={[85]} max={100} step={1} className="flex-1" />
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
                            <Switch checked={true} />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Include Business Name</div>
                              <div className="text-xs text-gray-500">Mention your business name in responses</div>
                            </div>
                            <Switch checked={true} />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Thank Customers</div>
                              <div className="text-xs text-gray-500">Include thank you message in responses</div>
                            </div>
                            <Switch checked={true} />
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-sm">Invite Return Visits</div>
                              <div className="text-xs text-gray-500">Encourage customers to visit again</div>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </div>

                        {/* Custom phrases */}
                        <div className="pt-2">
                          <h5 className="text-sm font-medium mb-3">Custom Phrases to Include</h5>
                          <div className="border rounded-md p-3 bg-gray-50">
                            <div className="flex flex-wrap gap-2 mb-2">
                              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                                Thank you for your feedback
                                <button className="ml-1 text-teal-600 hover:text-teal-800">×</button>
                              </Badge>
                              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                                We appreciate your business
                                <button className="ml-1 text-teal-600 hover:text-teal-800">×</button>
                              </Badge>
                              <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                                Hope to see you again soon
                                <button className="ml-1 text-teal-600 hover:text-teal-800">×</button>
                              </Badge>
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

                      {/* Notification settings preview */}
                      <div className="pt-4 border-t">
                        <h5 className="text-sm font-medium mb-3">Notification Preferences</h5>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Mail className="h-4 w-4 text-gray-400" />
                              <div className="text-sm">Email Notifications</div>
                            </div>
                            <Switch checked={true} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Smartphone className="h-4 w-4 text-gray-400" />
                              <div className="text-sm">SMS Notifications</div>
                            </div>
                            <Switch checked={false} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Volume2 className="h-4 w-4 text-gray-400" />
                              <div className="text-sm">Push Notifications</div>
                            </div>
                            <Switch checked={true} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Palette className="h-4 w-4 text-gray-400" />
                              <div className="text-sm">Weekly Report</div>
                            </div>
                            <Switch checked={true} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg border shadow-sm flex flex-col items-center text-center"
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center mb-3">
                {feature.icon}
              </div>
              <h4 className="font-medium mb-1">{feature.title}</h4>
              <p className="text-xs text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:from-teal-600 hover:to-blue-600">
            Explore Dashboard Features
          </Button>
        </div>
      </div>
    </section>
  )
}
