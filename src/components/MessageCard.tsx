import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  nickname: string;
  message: string;
  timestamp: Date;
  replyTo?: number;
}

interface MessageCardProps {
  message: Message;
  replies: Message[];
  onReply: (id: number, nickname: string) => void;
}

const MessageCard = ({ message, replies, onReply }: MessageCardProps) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-3">
      <Card className="p-4 undertale-border bg-card hover:bg-card/80 transition-colors">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="text-accent font-bold">{message.nickname}</span>
            </div>
            <span className="text-xs text-muted-foreground">
              {formatTime(message.timestamp)}
            </span>
          </div>

          <p className="text-foreground leading-relaxed pl-5">
            {message.message}
          </p>

          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onReply(message.id, message.nickname)}
              className="text-secondary hover:text-secondary/80 hover:bg-secondary/10"
            >
              <Icon name="Reply" size={14} className="mr-1" />
              Ответить
            </Button>
          </div>
        </div>
      </Card>

      {replies.length > 0 && (
        <div className="ml-8 space-y-2">
          {replies.map((reply) => (
            <Card
              key={reply.id}
              className="p-3 bg-muted/50 border-l-4 border-l-secondary"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon
                      name="ArrowRight"
                      size={12}
                      className="text-secondary"
                    />
                    <span className="text-secondary font-bold text-sm">
                      {reply.nickname}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {formatTime(reply.timestamp)}
                  </span>
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed pl-4">
                  {reply.message}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default MessageCard;
