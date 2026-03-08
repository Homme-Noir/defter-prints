import { servicesDetail } from '../content/copy'
import PageHeader from '../components/PageHeader'

export default function Services() {
  return (
    <>
      <PageHeader title="Our Services" subtitle="End-to-end printing and branding solutions" />
      <section className="py-5">
        <div className="container">
          {servicesDetail.map((svc, i) => (
            <div
              key={i}
              className="mb-5 pb-4 border-bottom border-secondary border-opacity-25 services-section"
            >
              <h2 className="h4 mb-3">{svc.title}</h2>
              <p className="text-muted mb-3">{svc.intro}</p>
              {svc.items && svc.items.length > 0 && (
                <>
                  {svc.listLabel && <h3 className="h6 mt-2 mb-1">{svc.listLabel}</h3>}
                  <ul className="list-unstyled mb-0">
                    {svc.items.map((item, j) => (
                    <li key={j} className="mb-1">
                      <span className="text-primary me-2">•</span>
                      {item}
                    </li>
                    ))}
                  </ul>
                </>
              )}
              {svc.idealFor && svc.idealFor.length > 0 && (
                <>
                  <h3 className="h6 mt-3 mb-1">{svc.listLabel || 'Ideal for:'}</h3>
                  <ul className="list-unstyled mb-0">
                    {svc.idealFor.map((item, j) => (
                      <li key={j} className="mb-1">
                        <span className="text-primary me-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {svc.wePrintOn && svc.wePrintOn.length > 0 && (
                <>
                  <h3 className="h6 mt-3 mb-1">{svc.wePrintOnLabel || 'We print on:'}</h3>
                  <ul className="list-unstyled mb-2">
                    {svc.wePrintOn.map((item, j) => (
                      <li key={j} className="mb-1">
                        <span className="text-primary me-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {svc.methods && svc.methods.length > 0 && (
                <>
                  <h3 className="h6 mt-2 mb-1">{svc.methodsLabel || 'Printing methods include:'}</h3>
                  <ul className="list-unstyled mb-0">
                    {svc.methods.map((item, j) => (
                      <li key={j} className="mb-1">
                        <span className="text-primary me-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
