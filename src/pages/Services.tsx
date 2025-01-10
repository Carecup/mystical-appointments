import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { Sparkles, Scroll, Flame, Stars } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Tarot Reading",
      description: "Gain clarity and insight through traditional tarot card reading. Perfect for life decisions and personal growth.",
      price: "From $50",
      duration: "30 min",
      icon: <Sparkles className="w-full h-full" />,
    },
    {
      title: "Wax Reading",
      description: "Ancient ceromancy practice revealing hidden messages through molten wax patterns.",
      price: "From $60",
      duration: "45 min",
      icon: <Flame className="w-full h-full" />,
    },
    {
      title: "Rune Reading",
      description: "Connect with ancient Nordic wisdom through traditional rune casting and interpretation.",
      price: "From $55",
      duration: "40 min",
      icon: <Scroll className="w-full h-full" />,
    },
    {
      title: "Combined Session",
      description: "Experience the power of multiple divination methods in one comprehensive session.",
      price: "From $100",
      duration: "75 min",
      icon: <Stars className="w-full h-full" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-4 text-center gold-glow">Our Services</h1>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Choose from our range of spiritual guidance services, each tailored to provide you with the insights you seek
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;