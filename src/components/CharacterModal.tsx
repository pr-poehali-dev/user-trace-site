import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

const CharacterModal = ({ character, onClose }: CharacterModalProps) => {
  if (!character) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto undertale-border bg-card">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl pixel-text text-accent">
              * {character.name} *
            </h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <Icon name="X" size={16} />
            </Button>
          </div>

          {/* Character Image */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover pixel-art"
              />
            </div>
          </div>

          {/* Biography */}
          <div className="space-y-3">
            <h3 className="text-secondary pixel-text">* Биография *</h3>
            <p className="text-sm leading-relaxed text-foreground">
              {character.biography}
            </p>
          </div>

          {/* Personality */}
          <div className="space-y-3">
            <h3 className="text-secondary pixel-text">* Личность *</h3>
            <p className="text-sm leading-relaxed text-foreground">
              {character.personality}
            </p>
          </div>

          {/* Abilities */}
          <div className="space-y-3">
            <h3 className="text-secondary pixel-text">* Способности *</h3>
            <ul className="space-y-2">
              {character.abilities.map((ability, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <span className="text-foreground">{ability}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quotes */}
          <div className="space-y-3">
            <h3 className="text-secondary pixel-text">* Цитаты *</h3>
            <div className="space-y-3">
              {character.quotes.map((quote, index) => (
                <div
                  key={index}
                  className="p-3 bg-muted/50 rounded border-l-2 border-l-accent"
                >
                  <p className="text-sm italic text-foreground">"{quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CharacterModal;
