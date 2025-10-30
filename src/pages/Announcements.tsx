import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Announcements = () => {
  const announcements = [
    {
      date: "December 15, 2024",
      title: "Jumu'ah moved to 1:15 PM this Friday",
      content: "Due to weather conditions, this week's Jumu'ah prayer will begin at 1:15 PM instead of the usual 2:00 PM. Please plan accordingly.",
      badge: "Important",
      badgeVariant: "destructive" as const,
    },
    {
      date: "December 10, 2024",
      title: "Community Clean-up This Sunday",
      content: "Join us this Sunday at 10:00 AM for our monthly community clean-up. We'll be cleaning the masjid grounds and nearby areas. Refreshments will be provided.",
      badge: "Event",
      badgeVariant: "default" as const,
    },
    {
      date: "December 5, 2024",
      title: "Ramadan Food Drive - Drop-off List",
      content: "Preparing for Ramadan! We're collecting non-perishable food items for local families. Needed items: rice, lentils, cooking oil, dates, and canned goods. Drop-off location: masjid office during prayer times.",
      badge: "Community",
      badgeVariant: "secondary" as const,
    },
    {
      date: "November 28, 2024",
      title: "New Youth Halaqah Starting in January",
      content: "Announcing a new youth study circle starting January 2025! Sessions will be held every Sunday at 11:00 AM after Fajr. Topics include Islamic history, character development, and Qur'an study. Ages 12-18 welcome.",
      badge: "Programs",
      badgeVariant: "outline" as const,
    },
    {
      date: "November 20, 2024",
      title: "Winter Heating Fund Campaign",
      content: "As temperatures drop, we're seeking support to cover increased heating costs. Any contribution helps keep our masjid warm and welcoming throughout winter. Donate via the Donate page or at the masjid.",
      badge: "Fundraising",
      badgeVariant: "default" as const,
    },
    {
      date: "November 15, 2024",
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
