import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      date: "November 2, 2025",
      title: "All prayer times will change.",
      content: "Due to daylight savings, all prayer times will go back one hour. Please plan accordingly.",
      badge: "Important",
      badgeVariant: "destructive" as const,
    },
    {
      date: "December 10, 2025",
      title: "Community Clean-up This Sunday",
      content: "Join us this Sunday at 10:00 AM for our monthly community clean-up. We'll be cleaning the masjid grounds and nearby areas. Refreshments will be provided.",
      badge: "Event",
      badgeVariant: "default" as const,
    },
    {
      date: "February 17, 2026",
      title: "Ramadan Food Drive - Drop-off List",
      content: "Preparing for Ramadan! We're collecting non-perishable food items for local families. Needed items: rice, lentils, cooking oil, dates, and canned goods. Drop-off location: masjid office during prayer times.",
      badge: "Community",
      badgeVariant: "secondary" as const,
    },
    
   
    {
      date: "October 15, 2025",
      title: "Parking Reminder for Jumu'ah",
      content: "Reminder: Please be mindful of our neighbors during Jumu'ah. Use designated parking spots and avoid blocking driveways. Overflow parking is available on nearby side streets.",
      badge: "Notice",
      badgeVariant: "secondary" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Announcements
            </h1>
            <p className="text-lg text-muted-foreground">
              Latest updates from Masjid Talut
            </p>
          </div>

          {/* Announcements List */}
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="p-6 glow-hover border-l-4 border-l-primary/50">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2 md:mb-0">
                    <Calendar size={16} className="text-primary" />
                    <span>{announcement.date}</span>
                  </div>
                  <Badge variant={announcement.badgeVariant}>{announcement.badge}</Badge>
                </div>
                <h2 className="font-heading font-semibold text-2xl mb-3">{announcement.title}</h2>
                <p className="text-foreground/80 leading-relaxed">{announcement.content}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Announcements;
