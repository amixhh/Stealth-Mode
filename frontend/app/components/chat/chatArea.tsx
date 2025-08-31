"use client";

import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatArea = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        isUser: true,
        timestamp: new Date(),
      };

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Hey there! 👋 I’m glad you reached out. Welcome back — I’m here to make the law feel a lot less complicated and a lot more approachable for you. Whether you’re dealing with a legal doubt, looking for guidance, or just exploring how things work, you don’t have to figure it out alone. Think of me as your trusted advisor, ready to break things down into clear, simple steps. No jargon, no stress — just straightforward support when you need it. So tell me, what’s on your mind today? ⚖️",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage, aiResponse]);
      setMessage("");

      // Reset textarea height to default
      if (textareaRef.current) {
        textareaRef.current.style.height = "60px";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const lineHeight = 24; // Line height in pixels
      const minHeight = 60; // Minimum height
      const maxHeight = 200; // Maximum height

      // Reset height to calculate scroll height
      textarea.style.height = "auto";

      // Only expand if content exceeds one line
      if (textarea.scrollHeight > minHeight) {
        textarea.style.height = `${Math.min(
          textarea.scrollHeight,
          maxHeight
        )}px`;
      } else {
        textarea.style.height = `${minHeight}px`;
      }
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    adjustTextareaHeight();
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-chat-background">
      {/* Chat Header */}
      <div className="p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-foreground">Legally AI</h1>
        </div>
      </div>

      {/* Messages Area */}
      {messages.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-2 text-foreground">
              How can I help you today?
            </h2>
            <p className="text-muted-foreground">
              Start a conversation with Legally AI for legal advice, query resolution, or any other assistance you need.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto px-4">
          <div className="max-w-4xl mx-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.isUser ? "justify-end" : "justify-start"
                } mb-15`}
              >
                <div
                  className={`${
                    msg.isUser
                      ? "max-w-[50%] rounded-4xl px-4 py-2 bg-foreground text-background"
                      : "w-full px-4 py-2"
                  }`}
                >
                  <p className={`text-balance m-0 leading-loose tracking-wide`}>
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              placeholder="Ask your legal query..."
              value={message}
              onChange={handleMessageChange}
              onKeyPress={handleKeyPress}
              className="min-h-[30px] max-h-[200px] resize-none pr-12 bg-white border-black focus:border-ring text-foreground placeholder:text-muted-foreground overflow-y-auto text-base"
              style={{
                paddingTop: "12px",
                paddingBottom: "1px",
              }}
            />

            <div className="absolute bottom-3 right-3 flex items-center space-x-2">
              <Button
                onClick={handleSend}
                disabled={!message.trim()}
                className="h-8 w-8 p-0 bg-foreground text-background hover:bg-foreground/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
