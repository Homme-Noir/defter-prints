export default function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header hero-gradient bg-primary text-white py-4">
      <div className="container py-3">
        <h1 className="mb-0">{title}</h1>
        {subtitle && <p className="mb-0 mt-2 opacity-90" style={{ fontSize: "var(--text-lg)" }}>{subtitle}</p>}
      </div>
    </section>
  )
}
