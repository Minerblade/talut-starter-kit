import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Calendar, Heart, Moon } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Calendar,
      title: "Jumu'ah",
      description: "Weekly Friday sermon and congregational prayer at 2:00 PM. Join us for khutbah and community prayer.",
    },
    {
      icon: BookOpen,
      title: "Halaqah / Study Circles",
      description: "Qur'an and Seerah sessions for all levels. Learn about the life of the Prophet ﷺ and deepen your understanding of the Qur'an.",
    },
    {
      icon: Users,
      title: "Youth & Family Nights",
      description: "Monthly potluck, games, and reminders. A fun and educational environment for the whole family to connect and grow together.",
    },
    {
      icon: Moon,
      title: "Ramadan Programs",
      description: "Special Iftar gatherings, Taraweeh prayers, and Zakat-al-Fitr collection. Experience the blessed month with your community.",
    },
    {
      icon: Heart,
      title: "Community Services",
      description: "Visits to those in need, support for families, and interfaith outreach. Making a positive impact in Rifle and beyond.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Programs & Classes
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join us for spiritual growth, education, and community building. All programs are open to everyone.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h2 className="font-heading font-semibold text-2xl mb-3">{program.title}</h2>
                  <p className="text-muted-foreground">{program.description}</p>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-heading font-bold text-3xl mb-4">Stay Updated</h2>
            <p className="text-lg mb-6 opacity-95">
              Check our announcements page for the latest program schedules, special events, and community updates.
            </p>
            <Link to="/announcements">
              <Button size="lg" variant="secondary" className="font-semibold">
                See Announcements
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
