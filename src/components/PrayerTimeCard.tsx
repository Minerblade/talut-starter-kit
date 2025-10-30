import { Card } from "@/components/ui/card";

interface PrayerTimeCardProps {
  prayer: string;
  athan: string;
  iqama: string;
}

const PrayerTimeCard = ({ prayer, athan, iqama }: PrayerTimeCardProps) => {
  return (
    <Card className="p-6 glow-hover group">
      <div className="space-y-3">
        <h3 className="font-heading font-semibold text-xl text-primary group-hover:text-primary/80 transition-colors">{prayer}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Athan</p>
            <p className="font-semibold text-lg font-mono">{athan}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wider">Iqama</p>
            <p className="font-semibold text-lg font-mono">{iqama}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PrayerTimeCard;
