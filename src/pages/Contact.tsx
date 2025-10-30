import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Users } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions? Want to volunteer? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="font-heading font-semibold text-2xl mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info & Volunteer */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-1">(646) 899-8980</p>
                    <p className="text-muted-foreground">(505) 999-0786</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Email Us</h3>
                    <p className="text-muted-foreground">info@masjidalut.org</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Volunteer with Us</h3>
                <p className="text-muted-foreground mb-4">
                  From setup to security to food drives—there's a role for everyone. 
                  Join us and make a difference in our community.
                </p>
                <p className="text-sm text-muted-foreground">
                  Interested in volunteering? Mention it in your message above or call us directly.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Office Hours</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The masjid is open for all five daily prayers. For administrative matters:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Best time to reach us: Between Dhuhr and Asr</li>
                  <li>• Friday: Available before and after Jumu'ah</li>
                  <li>• Weekend: Sunday mornings after Fajr</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
