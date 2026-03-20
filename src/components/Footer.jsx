import { brand, contact, footerLegalLinks, footerQuickLinks, footerServiceLinks } from '../content/copy'

export default function Footer() {
  const phoneHref = contact.phone ? `tel:${contact.phone.replace(/\s/g, '')}` : undefined
  const emailHref = contact.email ? `mailto:${contact.email}` : undefined

  return (
    <footer className="border-t border-slate-800 bg-navy pb-10 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="mb-4 inline-block font-heading text-2xl tracking-wide text-white">
              {brand.name}
              <span className="text-gold">.</span>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Premium corporate branding, digital printing, and promotional solutions designed to help your business
              stand out.
            </p>
          </div>

          <div>
            <h2 className="mb-6 font-heading text-lg text-white">Quick Links</h2>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-heading text-lg text-white">Services</h2>
            <ul className="space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-400 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-heading text-lg text-white">Contact</h2>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                {contact.email ? (
                  <a href={emailHref} className="hover:text-white">
                    {contact.email}
                  </a>
                ) : (
                  '—'
                )}
              </li>
              <li>
                {contact.phone ? (
                  <a href={phoneHref} className="hover:text-white">
                    {contact.phone}
                  </a>
                ) : (
                  '—'
                )}
              </li>
              <li className="pt-2 whitespace-pre-line">{contact.address || '—'}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="mb-0 text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            {footerLegalLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
