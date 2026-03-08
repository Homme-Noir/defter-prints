import { Link, NavLink } from 'react-router-dom'
import { brand, navLinks } from '../content/copy'

export default function Header() {
  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link className="navbar-brand fw-bold text-dark" to="/">
          {brand.name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map(({ path, label, end }) => (
              <li key={path} className="nav-item">
                <NavLink className="nav-link" to={path} end={!!end}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
