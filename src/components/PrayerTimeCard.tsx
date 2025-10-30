import { Card } from "@/components/ui/card";

interface PrayerTimeCardProps {
  prayer: string;
  athan: string;
  iqama: string;
}

const PrayerTimeCard = ({ prayer, athan, iqama }: PrayerTimeCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="space-y-3">
        <h3 className="font-heading font-semibold text-xl text-primary">{prayer}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Athan</p>
            <p className="font-semibold text-lg">{athan}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Iqama</p>
            <p className="font-semibold text-lg">{iqama}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PrayerTimeCard;
