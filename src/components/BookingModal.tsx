import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    price: string;
    duration: string;
  };
}

export const BookingModal = ({ isOpen, onClose, service }: BookingModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/send-telegram-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, dateTime, service }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
      });
      onClose();
    } catch (error) {
      console.error("Error sending booking:", error);
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте позже.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Запись на консультацию</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">{service.title}</h3>
            <p className="text-sm text-muted-foreground">{service.description}</p>
            <p className="text-sm">
              {service.duration} • {service.price}
            </p>
          </div>
          <div className="space-y-4">
            <Input
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              placeholder="Номер телефона"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              placeholder="Желаемая дата и время"
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Отмена
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Отправка..." : "Записаться"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};