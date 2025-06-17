import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MessageFormProps {
  onSubmit: (nickname: string, message: string, replyTo?: number) => void;
  replyTo?: { id: number; nickname: string };
  onCancelReply?: () => void;
}

const MessageForm = ({
  onSubmit,
  replyTo,
  onCancelReply,
}: MessageFormProps) => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nickname.trim() && message.trim()) {
      onSubmit(nickname.trim(), message.trim(), replyTo?.id);
      setMessage("");
      if (!replyTo) setNickname("");
      onCancelReply?.();
    }
  };

  return (
    <Card className="p-6 undertale-border bg-card">
      <div className="space-y-4">
        <h2 className="text-lg pixel-text text-accent">
          * {replyTo ? `Ответить ${replyTo.nickname}` : "Оставить сообщение"}
        </h2>

        {replyTo && (
          <div className="flex items-center gap-2 p-2 bg-muted rounded">
            <span className="text-sm text-muted-foreground">
              Ответ для: {replyTo.nickname}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onCancelReply}
              className="h-6 w-6 p-0"
            >
              <Icon name="X" size={12} />
            </Button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Ваш никнейм"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="bg-input border-primary/50"
            required
          />

          <Textarea
            placeholder="Ваше сообщение..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-input border-primary/50 min-h-[100px] resize-none"
            required
          />

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            <Icon name="Send" size={16} className="mr-2" />
            {replyTo ? "Ответить" : "Отправить"}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default MessageForm;
