import { useState } from "react";
import MessageForm from "@/components/MessageForm";
import MessageCard from "@/components/MessageCard";
import Icon from "@/components/ui/icon";

interface Message {
  id: number;
  nickname: string;
  message: string;
  timestamp: Date;
  replyTo?: number;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      nickname: "Sans",
      message:
        "добро пожаловать в доску сообщений... тут можно оставлять записки и отвечать друг другу.",
      timestamp: new Date(Date.now() - 3600000),
      replyTo: undefined,
    },
  ]);

  const [replyTo, setReplyTo] = useState<
    { id: number; nickname: string } | undefined
  >();

  const addMessage = (
    nickname: string,
    message: string,
    replyToId?: number,
  ) => {
    const newMessage: Message = {
      id: Date.now(),
      nickname,
      message,
      timestamp: new Date(),
      replyTo: replyToId,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleReply = (id: number, nickname: string) => {
    setReplyTo({ id, nickname });
  };

  const cancelReply = () => {
    setReplyTo(undefined);
  };

  const mainMessages = messages.filter((msg) => !msg.replyTo);

  const getReplies = (messageId: number) => {
    return messages.filter((msg) => msg.replyTo === messageId);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="MessageSquare" size={32} className="text-accent" />
            <h1 className="text-2xl pixel-text text-accent">
              * ДОСКА СООБЩЕНИЙ *
            </h1>
            <Icon name="MessageSquare" size={32} className="text-accent" />
          </div>
          <p className="text-sm text-muted-foreground">
            Здесь каждый может оставить своё сообщение и ответить другим
          </p>
        </div>

        {/* Message Form */}
        <div className="mb-8">
          <MessageForm
            onSubmit={addMessage}
            replyTo={replyTo}
            onCancelReply={cancelReply}
          />
        </div>

        {/* Messages List */}
        <div className="space-y-6">
          {mainMessages.length === 0 ? (
            <div className="text-center py-12">
              <Icon
                name="MessageCircle"
                size={48}
                className="text-muted-foreground mx-auto mb-4"
              />
              <p className="text-muted-foreground">
                Пока нет сообщений. Будьте первым!
              </p>
            </div>
          ) : (
            mainMessages.map((message) => (
              <MessageCard
                key={message.id}
                message={message}
                replies={getReplies(message.id)}
                onReply={handleReply}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground pixel-text">
            * Определение заполнено решимостью *
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
