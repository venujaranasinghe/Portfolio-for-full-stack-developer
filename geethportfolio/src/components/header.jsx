import { Menu } from "lucide-react"
import { Button } from "./ui/button.jsx"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet.jsx"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="#" className={styles.logoLink}>
          <span className={styles.logoIcon}>G</span>
          <span className={styles.logoText}>geethsenevirathna.com</span>
        </a>
      </div>
      <nav className={styles.navDesktop}>
        <a href="#home" className={styles.navLink}>
          Home
        </a>
        <a href="#services" className={styles.navLink}>
          Services
        </a>
        <a href="#works" className={styles.navLink}>
          Works
        </a>
        <a href="#resume" className={styles.navLink}>
          Resume
        </a>
        <a href="#skills" className={styles.navLink}>
          Skills
        </a>
        <a href="#testimonials" className={styles.navLink}>
          Testimonials
        </a>
        <a href="#contact" className={styles.navLink}>
          Contact
        </a>
      </nav>
      <div className={styles.actionsContainer}>
        <Button className={styles.hireMeButton}>Hire Me!</Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={styles.menuButton}>
              <Menu className={styles.menuIcon} />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className={styles.sheetContent}>
            <div className={styles.sheetLinks}>
              <a href="#home" className={styles.sheetLink}>
                Home
              </a>
              <a href="#services" className={styles.sheetLink}>
                Services
              </a>
              <a href="#works" className={styles.sheetLink}>
                Works
              </a>
              <a href="#resume" className={styles.sheetLink}>
                Resume
              </a>
              <a href="#skills" className={styles.sheetLink}>
                Skills
              </a>
              <a href="#testimonials" className={styles.sheetLink}>
                Testimonials
              </a>
              <a href="#contact" className={styles.sheetLink}>
                Contact
              </a>
              <Button className={styles.sheetHireMeButton}>Hire Me!</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
