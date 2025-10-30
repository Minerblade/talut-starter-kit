import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Info } from "lucide-react";

const Visit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Visit Masjid Talut in Rifle, CO
            </h1>
            <p className="text-lg text-muted-foreground">
              We look forward to welcoming you. All are welcome.
            </p>
          </div>

          {/* Location Info */}
          <Card className="p-8 mb-8 glow-hover">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-heading font-semibold text-2xl mb-4 flex items-center">
                  <MapPin className="mr-2 text-primary" />
                  Location
                </h2>
                <p className="text-lg mb-2">111 E 3rd St UNIT 101</p>
                <p className="text-lg mb-4">Rifle, CO 81650</p>
                <p className="text-sm text-muted-foreground">
                  <Info className="inline mr-1" size={14} />
                  Limited on-site parking. Overflow parking available on side streets. 
                  Please be respectful of neighbors.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading font-semibold text-2xl mb-4 flex items-center">
                  <Phone className="mr-2 text-primary" />
                  Contact
                </h2>
                <p className="text-lg mb-2">(646) 899-8980</p>
                <p className="text-lg mb-4">(505) 999-0786</p>
                <p className="text-sm text-muted-foreground mt-4">
                  <Clock className="inline mr-1" size={14} />
                  Open for all five daily prayers and special programs
                </p>
              </div>
            </div>
          </Card>

          {/* Map */}
          <Card className="p-0 overflow-hidden mb-8 border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.157699376293!2d-107.78523!3d39.53136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8742f0e40e9c5c8f%3A0x0!2s111%20E%203rd%20St%20UNIT%20101%2C%20Rifle%2C%20CO%2081650!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Masjid Talut Location"
            ></iframe>
          </Card>

          {/* Visitor Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 glow-hover">
              <h3 className="font-heading font-semibold text-xl mb-3">First Time Visiting?</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Arrive a few minutes early for parking and wudu</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Wudu facilities available inside</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Prayer spaces for men and women</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Feel free to ask anyone for help</li>
              </ul>
            </Card>

            <Card className="p-6 glow-hover">
              <h3 className="font-heading font-semibold text-xl mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Welcoming, family-friendly environment</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Five daily prayers and Jumu'ah on Fridays</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Regular classes and community programs</li>
                <li className="flex items-start"><span className="text-primary mr-2">✓</span> Modest dress appreciated</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Mosque",
          "name": "Masjid Talut",
          "url": "https://www.masjidalut.org",
          "telephone": "+1-646-899-8980",
          "contactPoint": [
            {"@type": "ContactPoint", "telephone": "+1-646-899-8980", "contactType": "customer service"},
            {"@type": "ContactPoint", "telephone": "+1-505-999-0786", "contactType": "customer service"}
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "111 E 3rd St UNIT 101",
            "addressLocality": "Rifle",
            "addressRegion": "CO",
            "postalCode": "81650",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 39.53136,
            "longitude": -107.78283
          },
          "sameAs": [
            "https://maps.google.com/?q=111+E+3rd+St+UNIT+101%2C+Rifle%2C+CO+81650"
          ]
        })}
      </script>

      <Footer />
    </div>
  );
};

export default Visit;
