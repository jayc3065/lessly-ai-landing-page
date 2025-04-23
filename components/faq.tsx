import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "Is Lessly AI safe?",
      answer:
        "Lessly AI uses enterprise-grade security to protect your business data. We never share your information with third parties, and all connections to Google are made through official APIs with proper authentication.",
    },
    {
      question: "Can I edit replies before posting?",
      answer:
        "Yes! You can set Lessly to either post replies automatically or to send them to you for approval first. This gives you complete control over what gets posted to your Google Business Profile.",
    },
    {
      question: "Do I need coding skills?",
      answer:
        "Not at all! Lessly AI is designed to be user-friendly for all business owners. The setup process is simple and guided, with no technical knowledge required.",
    },
    {
      question: "How does the AI know what to say?",
      answer:
        "Our AI is trained on thousands of professional business responses and learns your specific business details, services, and tone from your profile and existing responses. It gets smarter over time as it learns your preferences.",
    },
    {
      question: "What if the AI makes a mistake?",
      answer:
        "While our AI is highly accurate, you can always edit or delete any response. You can also set up keyword alerts for sensitive topics that should be handled manually instead of by the AI.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to know about Lessly AI
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl pt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Have more questions?{" "}
            <a href="#" className="text-teal-600 font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
