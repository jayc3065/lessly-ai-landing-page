import { Utensils, Scissors, Wrench, Stethoscope } from "lucide-react"

export default function TargetAudience() {
  const businesses = [
    {
      icon: <Utensils className="h-12 w-12 text-teal-500" />,
      title: "Restaurants & Cafés",
      description: "Keep your diners happy with prompt, friendly responses to their dining experiences.",
    },
    {
      icon: <Scissors className="h-12 w-12 text-blue-500" />,
      title: "Salons & Spas",
      description: "Show appreciation for client feedback and address concerns professionally.",
    },
    {
      icon: <Wrench className="h-12 w-12 text-teal-500" />,
      title: "Repair & Service Shops",
      description: "Build trust with customers by acknowledging their feedback about your services.",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-500" />,
      title: "Healthcare Providers",
      description: "Respond appropriately to patient reviews while maintaining privacy compliance.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Perfect For Your Business</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lessly AI helps service-based businesses of all types manage their online reputation
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-blue-100">
                {business.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{business.title}</h3>
                <p className="text-gray-500">{business.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-gray-500">
          And many other small businesses including retail stores, hotels, automotive services, and more!
        </div>
      </div>
    </section>
  )
}
