import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Контакты</h1>
        <div className="max-w-2xl mx-auto grid gap-6">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Phone className="w-6 h-6 text-gold-400" />
              <div>
                <h3 className="font-semibold mb-1">Телефоны</h3>
                <p className="text-muted-foreground">Валентина: +7 902 059-21-32</p>
                <p className="text-muted-foreground">Константин: +7 953 203-21-32</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <Mail className="w-6 h-6 text-gold-400" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">baskleev1107@gmail.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <MapPin className="w-6 h-6 text-gold-400" />
              <div>
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-muted-foreground">г. Артем, ул. Иркутская, д. 26</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;