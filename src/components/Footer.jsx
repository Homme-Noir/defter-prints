import { Link } from 'react-router-dom'
import { brand, contact, navLinks } from '../content/copy'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="site-footer pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">Defter Prints</h5>
            <p className="small text-opacity-90 mb-0">
              {brand.tagline}
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase small fw-bold mb-3">Quick links</h6>
            <ul className="list-unstyled small">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link to={path} className="text-decoration-none">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="text-uppercase small fw-bold mb-3">Contact</h6>
            <p className="small text-opacity-90 mb-0">
              {contact.phoneLabel} <a href="tel:">{contact.phone || '—'}</a><br />
              {contact.emailLabel} <a href="mailto:">{contact.email || '—'}</a><br />
              {contact.addressLabel} {contact.address || '—'}
            </p>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase small fw-bold mb-3">Follow us</h6>
            <p className="small text-opacity-90 mb-2 mb-md-0">{contact.socialLabel}</p>
            <SocialLinks className="mt-2" />
          </div>
        </div>
        <hr className="footer-divider my-4" />
        <p className="small text-opacity-75 text-center mb-0">
          &copy; {new Date().getFullYear()} Defter Prints. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
