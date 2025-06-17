import { Card } from "@/components/ui/card";

interface Food {
  id: number;
  name: string;
  image: string;
  description: string;
  emoji: string;
}

interface FoodCardProps {
  food: Food;
  onClick: (foodId: number) => void;
}

const FoodCard = ({ food, onClick }: FoodCardProps) => {
  return (
    <Card
      className="p-4 food-border bg-card hover:bg-card/80 transition-all cursor-pointer hover:scale-105 food-rotate"
      onClick={() => onClick(food.id)}
    >
      <div className="text-center space-y-3">
        <div className="w-24 h-24 mx-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden food-image">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="text-2xl animate-spin-slow">{food.emoji}</div>

        <h3 className="text-accent font-bold food-text text-sm">{food.name}</h3>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {food.description}
        </p>
      </div>
    </Card>
  );
};

export default FoodCard;
