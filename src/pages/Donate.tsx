import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Give to Masjid Talut
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your support sustains daily prayers and community care.
            </p>
          </div>

          {/* Simple Methods (no buttons) */}
          <Card className="p-8 space-y-6">
            <div>
              <h2 className="font-heading font-semibold text-2xl mb-2">Zelle</h2>
              <p className="text-muted-foreground">
                Send to: <strong className="text-primary">505-999-0786</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                For any inquiries, please Zelle or text <strong>505-999-0786</strong>.
              </p>
            </div>

            <div className="border-t border-border/50 pt-6">
              <h2 className="font-heading font-semibold text-2xl mb-2">Check</h2>
              <p className="text-muted-foreground">
                Mail to: <strong>Masjid Talut</strong>, 111 E 3rd St UNIT 101, Rifle, CO 81650
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;

