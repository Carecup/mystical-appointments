import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ru } from 'date-fns/locale';

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Записаться на консультацию</h1>
        <div className="max-w-md mx-auto">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Выберите дату</h2>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              locale={ru}
              className="rounded-md border"
            />
            <Button 
              className="w-full mt-4 bg-mystic-700 hover:bg-mystic-600"
              disabled={!date}
            >
              Продолжить
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;