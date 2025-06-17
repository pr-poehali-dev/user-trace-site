import { useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import CharacterModal from "@/components/CharacterModal";
import Icon from "@/components/ui/icon";

interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
  biography: string;
  personality: string;
  abilities: string[];
  quotes: string[];
}

const Index = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );

  const characters: Character[] = [
    {
      id: 1,
      name: "Sans",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop",
      description: "Ленивый скелет с чувством юмора",
      biography:
        "Sans — скелет, который живет в Сноудине со своим братом Папирусом. Он известен своими каламбурами, ленивым характером и загадочным прошлым. Работает часовым в лесу.",
      personality:
        "Расслабленный, остроумный, но может быть серьезным когда нужно. Любит каламбуры и кетчуп. Скрывает глубокие знания о временных линиях.",
      abilities: [
        "Телепортация",
        "Кости-атаки",
        "Гравитационная магия",
        "Знание о временных линиях",
      ],
      quotes: [
        "it's a beautiful day outside...",
        "you're gonna have a bad time",
        "nah, i'm rootin' for ya, kid",
      ],
    },
    {
      id: 2,
      name: "Papyrus",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop",
      description: "Энергичный скелет-мечтатель",
      biography:
        "Папирус — младший брат Санса, полный энергии и оптимизма. Мечтает стать частью Королевской Гвардии и поймать человека. Любит готовить спагетти.",
      personality:
        "Энергичный, добрый, наивный, но решительный. Верит в лучшее в каждом. Обожает головоломки и спагетти.",
      abilities: [
        "Костяная магия",
        "Создание головоломок",
        "Синие атаки",
        "Кулинария",
      ],
      quotes: ["NYEH HEH HEH!", "I BELIEVE IN YOU!", "WOWIE!!!"],
    },
    {
      id: 3,
      name: "Undyne",
      image:
        "https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=200&h=200&fit=crop",
      description: "Капитан Королевской Гвардии",
      biography:
        "Ундайн — рыба-воин, возглавляющая Королевскую Гвардию. Яростно защищает монстров и мечтает освободить их из Подземелья. Обучена Гирсоном боевым искусствам.",
      personality:
        "Храбрая, горячая, преданная. Может быть агрессивной, но имеет доброе сердце. Любит аниме и готовить.",
      abilities: [
        "Копья энергии",
        "Невероятная сила",
        "Форма Undying",
        "Лидерство",
      ],
      quotes: [
        "NGAHHH!",
        "I'll show you how determined monsters can be!",
        "Fuhuhuhu!",
      ],
    },
    {
      id: 4,
      name: "Alphys",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop",
      description: "Королевский ученый",
      biography:
        "Альфис — желтая ящерица, работающая королевским ученым. Изучает человеческие души и детерминацию. Скрывает темные секреты своих экспериментов.",
      personality:
        "Застенчивая, умная, но неуверенная в себе. Любит аниме и научную фантастику. Страдает от чувства вины.",
      abilities: [
        "Научные знания",
        "Создание роботов",
        "Изучение душ",
        "Высокие технологии",
      ],
      quotes: [
        "Oh my god!!!",
        "I... I'm not a bad person!",
        "Anime is real, right?!",
      ],
    },
    {
      id: 5,
      name: "Toriel",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=200&h=200&fit=crop",
      description: "Хранительница Руин",
      biography:
        "Ториэль — коза-монстр, бывшая королева Подземелья. После трагедии с детьми ушла в Руины, где защищает упавших людей от опасностей Подземелья.",
      personality:
        "Материнская, добрая, защищающая. Любит печь пироги и читать. Может быть строгой когда нужно защитить.",
      abilities: [
        "Огненная магия",
        "Целительство",
        "Кулинария",
        "Защитная магия",
      ],
      quotes: [
        "My child...",
        "I will protect you!",
        "Would you like some pie?",
      ],
    },
    {
      id: 6,
      name: "Asgore",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop",
      description: "Король монстров",
      biography:
        "Асгор — король всех монстров в Подземелье. После потери детей объявил войну людям. Несмотря на грозный вид, имеет доброе сердце и сожалеет о своих решениях.",
      personality:
        "Мудрый, меланхоличный, добрый в глубине души. Любит садоводство и чай. Несет бремя тяжелых решений.",
      abilities: [
        "Огненная магия",
        "Трезубец",
        "Королевская сила",
        "Садоводство",
      ],
      quotes: [
        "Howdy!",
        "I so badly want to say, 'would you like a cup of tea?'",
        "Please... live a happy life.",
      ],
    },
    {
      id: 7,
      name: "Flowey",
      image:
        "https://images.unsplash.com/photo-1490736936276-05e53d88a8f6?w=200&h=200&fit=crop",
      description: "Говорящий цветок",
      biography:
        "Флауи — говорящий цветок, первый встреченный персонаж. Скрывает темную тайну своего происхождения и истинную природу. Способен манипулировать файлами сохранения.",
      personality:
        "Манипулятивный, садистский, но глубоко травмированный. Потерял способность чувствовать любовь. Отчаянно ищет смысл существования.",
      abilities: [
        "Контроль сохранений",
        "Пули-семена",
        "Форма Omega",
        "Манипуляции",
      ],
      quotes: [
        "Howdy! I'm Flowey!",
        "In this world, it's kill or BE killed!",
        "I don't want to let go...",
      ],
    },
    {
      id: 8,
      name: "Frisk",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=200&h=200&fit=crop",
      description: "Восьмой упавший человек",
      biography:
        "Фриск — человеческий ребенок, упавший в Подземелье. Обладает невероятной детерминацией, позволяющей возвращаться после смерти. Их выбор определяет судьбу всех монстров.",
      personality:
        "Молчаливый, решительный, сострадательный. Способен к милосердию или жестокости в зависимости от выбора игрока.",
      abilities: ["Детерминация", "Возрождение", "ACT команды", "Сила воли"],
      quotes: [
        "...",
        "*You are filled with determination*",
        "*You feel your sins crawling on your back*",
      ],
    },
  ];

  const handleCharacterClick = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Users" size={32} className="text-accent" />
            <h1 className="text-2xl pixel-text text-accent">
              * ПЕРСОНАЖИ UNDERTALE *
            </h1>
            <Icon name="Users" size={32} className="text-accent" />
          </div>
          <p className="text-sm text-muted-foreground">
            Нажмите на персонажа, чтобы узнать его историю
          </p>
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={handleCharacterClick}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground pixel-text">
            * Определение заполнено решимостью *
          </p>
        </div>
      </div>

      {/* Character Modal */}
      <CharacterModal
        character={selectedCharacter}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
