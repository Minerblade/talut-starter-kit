import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
}

const EventCard = ({ title, date, time, description }: EventCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <h3 className="font-heading font-semibold text-xl mb-3">{title}</h3>
      <div className="flex flex-col space-y-2 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center space-x-2">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={16} />
          <span>{time}</span>
        </div>
      </div>
      <p className="text-sm mb-4">{description}</p>
      <Button variant="outline" size="sm">Learn More</Button>
    </Card>
  );
};

export default EventCard;
