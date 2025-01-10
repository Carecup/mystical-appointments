import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float gold-glow">
            Discover Your Path
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Expert guidance through Tarot, Wax Reading, and Ancient Runes
          </p>
          <Button
            onClick={() => navigate("/services")}
            className="bg-gold-500 hover:bg-gold-600 text-black"
            size="lg"
          >
            Explore Services <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 mystic-gradient">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-gold-400" />
              <h3 className="text-xl font-semibold mb-2">Tarot & Wax Reading</h3>
              <p className="text-muted-foreground">
                Unlock insights into your past, present, and future
              </p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 mx-auto mb-4 text-gold-400" />
              <h3 className="text-xl font-semibold mb-2">Rune Casting</h3>
              <p className="text-muted-foreground">
                Ancient wisdom through Nordic rune interpretation
              </p>
            </div>
            <div className="text-center p-6">
              <ArrowRight className="w-12 h-12 mx-auto mb-4 text-gold-400" />
              <h3 className="text-xl font-semibold mb-2">Personal Guidance</h3>
              <p className="text-muted-foreground">
                Expert consultation for your spiritual journey
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;