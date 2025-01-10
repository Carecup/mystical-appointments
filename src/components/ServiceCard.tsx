import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, price, duration, icon }: ServiceCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="relative overflow-hidden group hover:border-gold-400 transition-colors">
      <CardHeader>
        <div className="w-12 h-12 mb-4 text-gold-400 animate-glow">
          {icon}
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {duration} • {price}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-6">{description}</p>
        <Button 
          onClick={() => navigate("/booking")}
          className="w-full bg-mystic-700 hover:bg-mystic-600 text-white"
        >
          Записаться
        </Button>
      </CardContent>
    </Card>
  );
};