import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream font-body text-slate-800">
      <a
        href="#main"
        className="focus:bg-gold focus:text-navy absolute left-0.5 top-0 z-[100] -translate-y-16 rounded-br bg-navy px-4 py-2 font-semibold text-white transition-[top] focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}
