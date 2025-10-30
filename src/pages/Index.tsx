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
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-current rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-current rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-current rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              A welcoming masjid serving Rifle and the Western Slope
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Pray, learn, and connect with your neighbors at Masjid Talut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prayer-times">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto font-semibold">
                  View Prayer Times
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-b from-card to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">Welcome Home</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Masjid Talut is a humble community mosque in Rifle, Colorado. We host daily prayers, 
              Jumu'ah, classes, and family programs—all in a welcoming environment. Whether you're 
              a lifelong Muslim or just curious, you're welcome here.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/prayer-times">
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Jumu'ah this Friday</h3>
                <p className="text-sm text-muted-foreground">2:00 PM every Friday</p>
              </Card>
            </Link>
            
            <Link to="/visit">
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">New to the area?</h3>
                <p className="text-sm text-muted-foreground">Find us and plan your visit</p>
              </Card>
            </Link>
            
            <Link to="/contact">
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Volunteer with us</h3>
                <p className="text-sm text-muted-foreground">Join our community efforts</p>
              </Card>
            </Link>
            
            <Link to="/donate">
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-2">Give sadaqah</h3>
                <p className="text-sm text-muted-foreground">Support your masjid</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Upcoming Events</h2>
            <p className="text-muted-foreground">Join us for prayer, learning, and community</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
      <section className="py-16 bg-gradient-to-br from-accent to-accent/80 text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Help sustain the masjid</h2>
            <p className="text-lg mb-8 opacity-90">
              Recurring donations keep the lights on and doors open. Your generosity sustains prayer, 
              programs, and community care.
            </p>
            <Link to="/donate">
              <Button size="lg" variant="secondary" className="font-semibold">
                Donate Monthly
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
