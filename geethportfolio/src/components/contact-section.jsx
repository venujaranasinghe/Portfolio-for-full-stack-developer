import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "./ui/button.jsx"
import { Input } from "./ui/input.jsx"
import { Textarea } from "./ui/textarea.jsx"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-12">Let&apos;s work together!</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-accent-purple/10 p-8 rounded-lg shadow-xl border border-accent-purple/20">
            <form className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-dark-bg border border-accent-purple/30 text-text-light placeholder:text-text-muted focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-md bg-dark-bg border border-accent-purple/30 text-text-light placeholder:text-text-muted focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 rounded-md bg-dark-bg border border-accent-purple/30 text-text-light placeholder:text-text-muted focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 rounded-md bg-dark-bg border border-accent-purple/30 text-text-light placeholder:text-text-muted focus:ring-2 focus:ring-accent-purple focus:border-accent-purple transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent-purple hover:bg-light-purple text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex flex-col items-start space-y-8 text-left lg:pl-12">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-accent-purple/20 text-accent-purple">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-light">Phone</h4>
                <p className="text-text-muted">+94 77 123 4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-accent-purple/20 text-accent-purple">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-light">Email</h4>
                <p className="text-text-muted">geeth.senevirathna@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full bg-accent-purple/20 text-accent-purple">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-light">Address</h4>
                <p className="text-text-muted">123 Dev Street, Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
