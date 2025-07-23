export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between bg-dark-bg border-t border-accent-purple/20">
      <div className="flex items-center gap-2 mb-4 sm:mb-0">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-accent-purple">
          <span className="font-extrabold text-3xl">G</span>
        </a>
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Geeth Senevirathna. All rights reserved.
        </p>
      </div>
      <nav className="flex gap-6 text-sm text-text-muted">
        <a href="#" className="hover:text-accent-purple transition-colors duration-300">
          Terms of Service
        </a>
        <a href="#" className="hover:text-accent-purple transition-colors duration-300">
          Privacy Policy
        </a>
      </nav>
    </footer>
  )
}
