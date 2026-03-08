import { Link } from 'react-router-dom'

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-outline-primary',
  light: 'btn-light text-primary',
  outlineLight: 'btn-outline-light',
}
export function Button({ to, href, variant = 'primary', children, className = '', ...props }) {
  const baseClass = 'btn'
  const variantClass = variantClasses[variant] || variantClasses.primary
  const classes = `${baseClass} ${variantClass} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
