import { useState } from "react";
import FoodCard from "@/components/FoodCard";
import Icon from "@/components/ui/icon";

interface Food {
  id: number;
  name: string;
  image: string;
  description: string;
  emoji: string;
}

const Index = () => {
  const [foodItems, setFoodItems] = useState<Food[]>([
    {
      id: 1,
      name: "Лососевые роллы",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop",
      description: "Нежные роллы с свежим лососем",
      emoji: "🍱",
    },
    {
      id: 2,
      name: "Суши сет",
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop",
      description: "Ассорти из лучших суши",
      emoji: "🍣",
    },
    {
      id: 3,
      name: "Рамен",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop",
      description: "Горячий японский суп с лапшой",
      emoji: "🍜",
    },
    {
      id: 4,
      name: "Пицца Маргарита",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      description: "Классическая итальянская пицца",
      emoji: "🍕",
    },
    {
      id: 5,
      name: "Бургер",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
      description: "Сочный бургер с картофелем фри",
      emoji: "🍔",
    },
    {
      id: 6,
      name: "Паста",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=300&fit=crop",
      description: "Домашняя паста с томатным соусом",
      emoji: "🍝",
    },
    {
      id: 7,
      name: "Тако",
      image:
        "https://images.unsplash.com/photo-1565299585323-38174c5200ed?w=300&h=300&fit=crop",
      description: "Мексиканские тако с овощами",
      emoji: "🌮",
    },
    {
      id: 8,
      name: "Димсамы",
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=300&fit=crop",
      description: "Китайские паровые пельмени",
      emoji: "🥟",
    },
  ]);

  const allFoodOptions = [
    {
      name: "Филадельфия ролл",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop",
      description: "Ролл с лососем и сыром",
      emoji: "🍱",
    },
    {
      name: "Калифорния ролл",
      image:
        "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop",
      description: "Ролл с крабом и авокадо",
      emoji: "🍣",
    },
    {
      name: "Темпура ролл",
      image:
        "https://images.unsplash.com/photo-1563612116625-3012372fccce?w=300&h=300&fit=crop",
      description: "Хрустящий ролл в темпуре",
      emoji: "🍤",
    },
    {
      name: "Том ям",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop",
      description: "Острый тайский суп",
      emoji: "🍜",
    },
    {
      name: "Фо бо",
      image:
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=300&h=300&fit=crop",
      description: "Вьетнамский суп с говядиной",
      emoji: "🥢",
    },
    {
      name: "Пепперони пицца",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop",
      description: "Пицца с пепперони",
      emoji: "🍕",
    },
    {
      name: "Четыре сыра",
      image:
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=300&fit=crop",
      description: "Пицца с четырьмя сырами",
      emoji: "🧀",
    },
    {
      name: "Чизбургер",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop",
      description: "Бургер с расплавленным сыром",
      emoji: "🍔",
    },
    {
      name: "Вегги бургер",
      image:
        "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=300&h=300&fit=crop",
      description: "Вегетарианский бургер",
      emoji: "🥗",
    },
    {
      name: "Карбонара",
      image:
        "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=300&fit=crop",
      description: "Паста с беконом и сыром",
      emoji: "🍝",
    },
    {
      name: "Болоньезе",
      image:
        "https://images.unsplash.com/photo-1572441713132-51c75654db73?w=300&h=300&fit=crop",
      description: "Паста с мясным соусом",
      emoji: "🍝",
    },
  ];

  const handleFoodClick = (foodId: number) => {
    setFoodItems((prev) =>
      prev.map((food) => {
        if (food.id === foodId) {
          const randomFood =
            allFoodOptions[Math.floor(Math.random() * allFoodOptions.length)];
          return {
            ...food,
            name: randomFood.name,
            image: randomFood.image,
            description: randomFood.description,
            emoji: randomFood.emoji,
          };
        }
        return food;
      }),
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="UtensilsCrossed" size={32} className="text-accent" />
            <h1 className="text-2xl food-text text-accent">
              🍣 ВКУСНАЯ ГАЛЕРЕЯ 🍜
            </h1>
            <Icon name="UtensilsCrossed" size={32} className="text-accent" />
          </div>
          <p className="text-sm text-muted-foreground">
            Нажмите на блюдо, чтобы оно сменилось на новое!
          </p>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {foodItems.map((food) => (
            <FoodCard key={food.id} food={food} onClick={handleFoodClick} />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground food-text">
            🌟 Приятного аппетита! 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
