import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, DollarSign } from "lucide-react";

const Donate = () => {
  const donationAmounts = [25, 50, 100, 250];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Give to Masjid Talut
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generosity sustains prayer, programs, and community care. Every contribution makes a difference.
            </p>
          </div>

          {/* Donation Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* One-time Donation */}
            <Card className="p-8 glow-hover">
              <h2 className="font-heading font-semibold text-2xl mb-6">One-Time Gift</h2>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <Button key={amount} variant="outline" size="lg" className="font-semibold">
                    ${amount}
                  </Button>
                ))}
              </div>
              <Button className="w-full" size="lg">
                <DollarSign className="mr-2" size={20} />
                Custom Amount
              </Button>
            </Card>

            {/* Monthly Donation */}
            <Card className="p-8 glow-hover border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-semibold text-2xl">Monthly Giving</h2>
                  <span className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-bold uppercase tracking-wide">
                    Recommended
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {donationAmounts.map((amount) => (
                    <Button key={amount} variant="outline" size="lg" className="font-semibold border-primary/30">
                      ${amount}/mo
                    </Button>
                  ))}
                </div>
                <Button className="w-full" size="lg">
                  <Heart className="mr-2" size={20} />
                  Set Up Monthly
                </Button>
              </div>
            </Card>
          </div>

          {/* Payment Methods */}
          <Card className="p-8 mb-16">
            <h2 className="font-heading font-semibold text-2xl mb-6 text-center">Payment Methods</h2>
            <div className="space-y-4">
              <div className="p-5 border border-border/50 rounded-2xl hover:border-primary/30 transition-colors bg-card/30">
                <h3 className="font-semibold text-lg mb-2">Credit/Debit Card</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Secure online payment with Apple Pay and Google Pay support
                </p>
                <Button variant="outline" className="w-full">
                  Pay with Card
                </Button>
              </div>
              
              <div className="p-5 border border-border/50 rounded-2xl hover:border-primary/30 transition-colors bg-card/30">
                <h3 className="font-semibold text-lg mb-2">Zelle</h3>
                <p className="text-sm text-muted-foreground">
                  Send directly to: <strong className="text-primary">info@masjidalut.org</strong>
                </p>
              </div>
              
              <div className="p-5 border border-border/50 rounded-2xl hover:border-primary/30 transition-colors bg-card/30">
                <h3 className="font-semibold text-lg mb-2">Check</h3>
                <p className="text-sm text-muted-foreground">
                  Mail to: Masjid Talut, 111 E 3rd St UNIT 101, Rifle, CO 81650
                </p>
              </div>
            </div>
          </Card>

          {/* How Funds Are Used */}
          <Card className="p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="font-heading font-semibold text-2xl mb-4 text-center">How Your Donation Helps</h2>
              <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
                Funds support utilities, rent, programming, scholarships, and Ramadan services. 
                We follow best practices for transparency.
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground font-medium">Operations & Utilities</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">35%</div>
                  <div className="text-sm text-muted-foreground font-medium">Programs & Education</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">25%</div>
                  <div className="text-sm text-muted-foreground font-medium">Community Support</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                Quarterly financial reports are posted on this page
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
