export default function TeamSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Our Leadership Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals committed to delivering exceptional quality and service
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-primary mb-6 text-center">
              Organizational Structure
            </h3>

            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-primary text-white px-6 py-3 rounded-lg inline-block mb-4">
                  <h4 className="font-semibold">Director General</h4>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-secondary text-primary px-4 py-2 rounded-lg">
                    <h4 className="font-semibold">Manager: Procurement</h4>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-secondary text-primary px-4 py-2 rounded-lg">
                    <h4 className="font-semibold">Accountant</h4>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="bg-accent text-primary px-4 py-2 rounded-lg">
                    <h4 className="font-semibold">Sales Team</h4>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-accent text-primary px-4 py-2 rounded-lg">
                    <h4 className="font-semibold">General Staff</h4>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8">
              Our team of experienced professionals is committed to delivering exceptional quality, innovative
              solutions, and outstanding customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
