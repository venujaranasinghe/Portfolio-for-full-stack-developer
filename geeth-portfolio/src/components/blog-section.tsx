import Image from "next/image"
import Link from "next/link"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Secret of Technology is Modern",
      date: "October 26, 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "The Services Private for Your Business",
      date: "November 10, 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "The Digital Marketing to Top Your Office",
      date: "December 1, 2023",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="blog" className="w-full py-16 md:py-24 lg:py-32 bg-dark-bg">
      <div className="container px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-text-light mb-4">Recent Blogs</h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-12">
          Stay updated with my latest insights and thoughts on full-stack development and UX design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href="#"
              className="group block rounded-lg overflow-hidden shadow-xl bg-accent-purple/10 border border-accent-purple/20 transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-text-light mb-2 group-hover:text-accent-purple transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-text-muted">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
