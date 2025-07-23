import { Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO, Tech Solutions",
      quote:
        "Geeth delivered an outstanding website that exceeded our expectations. His attention to detail and commitment to quality are truly remarkable.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Director, Creative Co.",
      quote:
        "Working with Geeth was a pleasure. He understood our vision perfectly and brought it to life with his exceptional design and development skills.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "David Lee",
      title: "Founder, Startup Hub",
      quote:
        "Geeth's expertise in UX design transformed our application. Our users love the new interface, and we've seen a significant increase in engagement.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">My Client&apos;s Stories</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-12">
          Representing people become a digital journey, with my super services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-lg bg-accent-purple/10 border border-accent-purple/20 shadow-xl text-left flex flex-col items-center transition-all duration-300 hover:bg-accent-purple/20 hover:shadow-2xl hover:scale-[1.02]"
            >
              <Quote className="h-10 w-10 text-accent-purple mb-4" />
              <p className="text-text-muted text-base italic mb-6 text-center">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-2 border-accent-purple"
                />
                <div>
                  <h4 className="text-lg font-semibold text-text-light">{testimonial.name}</h4>
                  <p className="text-sm text-text-muted">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
