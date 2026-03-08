import { about } from '../content/copy'
import PageHeader from '../components/PageHeader'

export default function About() {
  return (
    <>
      <PageHeader title="About Us" />
      <section className="py-5">
        <div className="container">
          <h2 className="h4 mb-3">Who We Are</h2>
          <p className="mb-5">{about.whoWeAre}</p>
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 card-title">Our Mission</h3>
                  <p className="card-text mb-0">{about.mission}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h3 className="h5 card-title">Our Vision</h3>
                  <p className="card-text mb-0">{about.vision}</p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="h4 mb-3">Our Core Values</h2>
          <ul className="list-group list-group-flush">
            {about.coreValues.map((value, i) => (
              <li key={i} className="list-group-item border-0 px-0">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
