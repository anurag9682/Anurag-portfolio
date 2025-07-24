"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X, Bot, User, Loader } from "lucide-react";
import { chat } from "@/ai/flows/chatbot";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: "bot", text: "Hi! How can I help you learn more about Anurag's skills and projects?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollableViewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (scrollableViewport) {
        scrollableViewport.scrollTop = scrollableViewport.scrollHeight;
      }
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;

    const userMessage: Message = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const result = await chat({ query: inputValue });
      const botMessage: Message = { sender: "bot", text: result.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage: Message = {
        sender: "bot",
        text: "Sorry, I'm having trouble connecting. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-80 h-[28rem] origin-bottom-right"
            >
              <Card className="flex flex-col h-full shadow-2xl rounded-xl">
                <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg font-bold">Portfolio Bot</CardTitle>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="flex-1 p-0 overflow-hidden">
                    <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
                        <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div
                            key={index}
                            className={`flex items-start gap-3 ${
                                message.sender === "user" ? "justify-end" : ""
                            }`}
                            >
                            {message.sender === "bot" && (
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Bot className="h-5 w-5" />
                                </div>
                            )}
                            <div
                                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                                message.sender === "user"
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted"
                                }`}
                            >
                                <p className="text-sm">{message.text}</p>
                            </div>
                            {message.sender === "user" && (
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                                <User className="h-5 w-5" />
                                </div>
                            )}
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-start gap-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Loader className="h-5 w-5 animate-spin" />
                                </div>
                                <div className="rounded-lg px-3 py-2 bg-muted">
                                    <p className="text-sm">Typing...</p>
                                </div>
                            </div>
                        )}
                        </div>
                    </ScrollArea>
                </CardContent>
                <CardFooter className="p-4 border-t">
                  <div className="relative w-full">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me a question..."
                      className="pr-12"
                      disabled={isLoading}
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={handleSendMessage}
                      disabled={isLoading}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-16 w-16 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
        </Button>
      </div>
    </>
  );
}
