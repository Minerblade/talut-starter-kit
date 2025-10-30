import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrayerTimeCard from "@/components/PrayerTimeCard";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

const PrayerTimes = () => {
  const prayers = [
    { prayer: "Fajr", athan: "6:30 AM", iqama: "6:30 AM" },
    { prayer: "Dhuhr", athan: "2:00 PM", iqama: "2:00 PM" },
    { prayer: "Asr", athan: "4:00 PM", iqama: "4:00 PM" },
    { prayer: "Maghrib", athan: "6:13 PM", iqama: "6:13 PM" },
    { prayer: "Isha", athan: "8:15 PM", iqama: "8:15 PM" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Daily Prayer & Jumu'ah Times
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prayer times change daily. We publish athan times and, when set, the masjid's iqama times. 
              For accuracy, please check back before visiting.
            </p>
          </div>

          {/* Jumu'ah Alert */}
          <Alert className="mb-8 border-primary/50 bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground">
              <strong>Jumu'ah:</strong> 2:00 PM every Friday. Please arrive a few minutes early for parking and wudu.
            </AlertDescription>
          </Alert>

          {/* Prayer Times Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {prayers.map((prayer) => (
              <PrayerTimeCard
                key={prayer.prayer}
                prayer={prayer.prayer}
                athan={prayer.athan}
                iqama={prayer.iqama}
              />
            ))}
          </div>

          {/* Visitor Note */}
          <div className="bg-secondary/50 rounded-3xl p-8 text-center">
            <h2 className="font-heading font-semibold text-2xl mb-4">Note for Visitors</h2>
            <p className="text-muted-foreground">
              Please arrive a few minutes early for parking and wudu. We look forward to welcoming you 
              at Masjid Talut. If you have any questions about prayer times or facilities, please contact us.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrayerTimes;
