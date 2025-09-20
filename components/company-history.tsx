export default function CompanyHistory() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              From humble beginnings to becoming Uganda's leading poultry supplier
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Founded in 2012</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Josca Farmer's World was founded in Uganda as a private company in 2012 with a vision to revolutionize
                the poultry and livestock industry. From our early days, we have been committed to exceeding customer
                expectations through quality products and efficient practices.
              </p>

              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                To provide high-quality poultry and livestock products and services, promoting sustainable farming
                practices to enhance farm productivity and profitability in Africa.
              </p>

              <h3 className="text-2xl font-serif font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading distributors of poultry and agricultural input in Africa.
              </p>
            </div>

            <div className="relative">
              <img
                src="/modern-poultry-farm-with-healthy-chickens-and-prof.jpg"
                alt="Josca Farmer's World poultry farm"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
