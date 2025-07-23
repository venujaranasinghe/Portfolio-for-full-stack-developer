import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion.jsx"
import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      value: "item-1",
      title: "Branding Design",
      description:
        "I break down complex user experience problems to create integrity, focused solutions that connect billions of people.",
    },
    {
      value: "item-2",
      title: "UI/UX Design",
      description:
        "I break down complex user experience problems to create integrity, focused solutions that connect billions of people.",
    },
    {
      value: "item-3",
      title: "Web Design",
      description:
        "I break down complex user experience problems to create integrity, focused solutions that connect billions of people.",
    },
    {
      value: "item-4",
      title: "App Design",
      description:
        "I break down complex user experience problems to create integrity, focused solutions that connect billions of people.",
    },
  ]

  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">My Quality Services</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-12">
          We put your ideas and thus your wishes in the form of a unique web project that improves you and your
          customers.
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service, index) => (
              <AccordionItem
                key={service.value}
                value={service.value}
                className="mb-4 rounded-lg border border-accent-purple/30 bg-dark-bg shadow-lg"
              >
                <AccordionTrigger className="flex items-center justify-between p-6 text-left text-lg md:text-xl font-semibold text-text-light hover:no-underline hover:bg-accent-purple/15 transition-colors duration-300">
                  <span className="text-accent-purple mr-4">{`0${index + 1}`}</span>
                  {service.title}
                  <ArrowRight className="h-6 w-6 text-accent-purple transition-transform duration-200 group-data-[state=open]:rotate-90" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-text-muted text-base md:text-lg">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
