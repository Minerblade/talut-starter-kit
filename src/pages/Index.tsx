import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Clock, MapPin, Heart, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              A welcoming masjid serving <span className="text-primary">Rifle</span> and the <span className="text-primary">Western Slope</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto">
              Pray, learn, and connect with your neighbors at Masjid Talut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prayer-times">
                <Button size="lg" className="w-full sm:w-auto font-semibold">
                  View Prayer Times
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center glass-card">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Welcome Home</h2>
            <p className="text-lg leading-relaxed text-foreground/80 max-w-2xl mx-auto">
              Masjid Talut is a humble community mosque in Rifle, Colorado. We host daily prayers, 
              Jumu'ah, classes, and family programs—all in a welcoming environment. Whether you're 
              a lifelong Muslim or just curious, you're welcome here.
            </p>
          </Card>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/prayer-times">
              <Card className="p-6 glow-hover cursor-pointer h-full group">
                <Clock className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-xl mb-2">Jumu'ah this Friday</h3>
                <p className="text-sm text-muted-foreground">2:00 PM every Friday</p>
              </Card>
            </Link>
            
            <Link to="/visit">
              <Card className="p-6 glow-hover cursor-pointer h-full group">
                <MapPin className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-xl mb-2">New to the area?</h3>
                <p className="text-sm text-muted-foreground">Find us and plan your visit</p>
              </Card>
            </Link>
            
            <Link to="/contact">
              <Card className="p-6 glow-hover cursor-pointer h-full group">
                <Users className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-xl mb-2">Volunteer with us</h3>
                <p className="text-sm text-muted-foreground">Join our community efforts</p>
              </Card>
            </Link>
            
            <Link to="/donate">
              <Card className="p-6 glow-hover cursor-pointer h-full group">
                <Heart className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading font-semibold text-xl mb-2">Give sadaqah</h3>
                <p className="text-sm text-muted-foreground">Support your masjid</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground text-lg">Join us for prayer, learning, and community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <EventCard
              title="Friday Family Night"
              date="This Friday"
              time="7:00 PM"
              description="Potluck dinner, games for kids, and community bonding. Bring a dish to share!"
            />
            <EventCard
              title="Weekend Halaqah"
              date="Sunday"
              time="10:00 AM"
              description="Qur'an study circle for all levels. Join us for reflection and learning."
            />
            <EventCard
              title="Community Clean-up"
              date="Next Saturday"
              time="9:00 AM"
              description="Help keep our masjid and neighborhood beautiful. All ages welcome."
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center glass-card border-primary/20">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Help sustain the masjid</h2>
            <p className="text-lg mb-8 text-foreground/80">
              Recurring donations keep the lights on and doors open. Your generosity sustains prayer, 
              programs, and community care.
            </p>
            <Link to="/donate">
              <Button size="lg" className="font-semibold">
                Donate Monthly
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
