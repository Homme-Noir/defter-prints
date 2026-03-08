import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
