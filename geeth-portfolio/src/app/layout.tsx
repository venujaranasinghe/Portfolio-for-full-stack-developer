import type { Metadata } from 'next'
import { Inter } from 'next/font/google' // Or any other font you prefer
import './globals.css' // This imports your global styles

const inter = Inter({ subsets: ['latin'] }) // Initialize your font

export const metadata: Metadata = {
  title: 'Geeth Senevirathna - Full Stack Developer Portfolio', // Updated title
  description: 'Official portfolio of Geeth Senevirathna, a Full Stack Developer and UX Designer showcasing his projects, skills, and experience.', // Updated description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}