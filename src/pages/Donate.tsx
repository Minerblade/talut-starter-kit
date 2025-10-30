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
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Give to Masjid Talut
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your generosity sustains prayer, programs, and community care. Every contribution makes a difference.
            </p>
          </div>

          {/* Donation Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* One-time Donation */}
            <Card className="p-8">
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
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-semibold text-2xl">Monthly Giving</h2>
                <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                  RECOMMENDED
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <Button key={amount} variant="outline" size="lg" className="font-semibold">
                    ${amount}/mo
                  </Button>
                ))}
              </div>
              <Button className="w-full" size="lg">
                <Heart className="mr-2" size={20} />
                Set Up Monthly
              </Button>
            </Card>
          </div>

          {/* Payment Methods */}
          <Card className="p-8 mb-12">
            <h2 className="font-heading font-semibold text-2xl mb-6 text-center">Payment Methods</h2>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold mb-2">Credit/Debit Card</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Secure online payment with Apple Pay and Google Pay support
                </p>
                <Button variant="outline" className="w-full">
                  Pay with Card
                </Button>
              </div>
              
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold mb-2">Zelle</h3>
                <p className="text-sm text-muted-foreground">
                  Send directly to: <strong>info@masjidalut.org</strong>
                </p>
              </div>
              
              <div className="p-4 border border-border rounded-xl">
                <h3 className="font-semibold mb-2">Check</h3>
                <p className="text-sm text-muted-foreground">
                  Mail to: Masjid Talut, 111 E 3rd St UNIT 101, Rifle, CO 81650
                </p>
              </div>
            </div>
          </Card>

          {/* How Funds Are Used */}
          <Card className="p-8 bg-secondary/30">
            <h2 className="font-heading font-semibold text-2xl mb-4 text-center">How Your Donation Helps</h2>
            <p className="text-muted-foreground mb-6 text-center">
              Funds support utilities, rent, programming, scholarships, and Ramadan services. 
              We follow best practices for transparency.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Operations & Utilities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Programs & Education</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-muted-foreground">Community Support</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              Quarterly financial reports are posted on this page
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;
