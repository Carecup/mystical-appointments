import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const Reviews = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: reviews, isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch("/api/reviews");
      if (!res.ok) {
        throw new Error("Failed to fetch reviews");
      }
      return res.json();
    },
  });

  const addReviewMutation = useMutation({
    mutationFn: async (reviewData: { name: string; content: string; rating: number }) => {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });
      if (!res.ok) {
        throw new Error("Failed to add review");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      toast({
        title: "Отзыв добавлен",
        description: "Спасибо за ваш отзыв!",
      });
      setName("");
      setContent("");
      setRating(5);
    },
    onError: () => {
      toast({
        title: "Ошибка",
        description: "Не удалось добавить отзыв. Пожалуйста, попробуйте позже.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !content) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля",
        variant: "destructive",
      });
      return;
    }
    addReviewMutation.mutate({ name, content, rating });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-16">
        <h1 className="text-4xl font-bold text-center mb-8">Отзывы</h1>
        
        {/* Add Review Form */}
        <Card className="max-w-2xl mx-auto mb-12">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Ваш отзыв"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => setRating(value)}
                    className={value <= rating ? "text-gold-400" : "text-muted-foreground"}
                  >
                    <Star className="h-6 w-6" fill={value <= rating ? "currentColor" : "none"} />
                  </Button>
                ))}
              </div>
              <Button
                type="submit"
                className="w-full bg-gold-500 hover:bg-gold-600 text-black"
                disabled={addReviewMutation.isPending}
              >
                {addReviewMutation.isPending ? "Отправка..." : "Оставить отзыв"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Reviews List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {isLoading ? (
            <p className="text-center text-muted-foreground">Загрузка отзывов...</p>
          ) : reviews?.length === 0 ? (
            <p className="text-center text-muted-foreground">Пока нет отзывов. Будьте первым!</p>
          ) : (
            reviews?.map((review) => (
              <Card key={review.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-gold-400"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{review.content}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;