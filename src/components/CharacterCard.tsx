import { Card } from "@/components/ui/card";

interface Character {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <Card
      className="p-4 undertale-border bg-card hover:bg-card/80 transition-all cursor-pointer hover:scale-105"
      onClick={() => onClick(character)}
    >
      <div className="text-center space-y-3">
        <div className="w-24 h-24 mx-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover pixel-art"
          />
        </div>

        <h3 className="text-accent font-bold pixel-text text-sm">
          {character.name}
        </h3>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {character.description}
        </p>
      </div>
    </Card>
  );
};

export default CharacterCard;
