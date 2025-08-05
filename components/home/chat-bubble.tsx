"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, X } from "lucide-react";
import Button from "@/components/ui/button";
import { useChat } from "@ai-sdk/react";
import { Message } from "ai";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black text-white p-4 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
      >
        <MessageSquare size={24} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-16 right-0 w-96 bg-background/95 backdrop-blur-xl border border-black/20 flex flex-col justify-between min-h-[500px] max-h-[600px]"
        >
          <div className="flex justify-between items-center p-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                talk to this guy
              </h3>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted/50 transition-all duration-200 hover:rotate-90"
            >
              <X size={18} />
            </Button>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between gap-4">
            <div className="flex flex-col flex-grow gap-3 overflow-y-auto text-sm font-light leading-relaxed max-h-80 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {messages.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-2 self-start border border-black/50"
                >
                  <div className="text-foreground">
                    Hello! How can I help you today?
                  </div>
                </motion.div>
              ) : (
                messages.map((message: Message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`px-4 py-2 border max-w-[85%] ${
                      message.role === "user"
                        ? "bg-black text-white self-end border-black/20"
                        : "text-foreground self-start border-1 border-black"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </motion.div>
                ))
              )}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-foreground self-start border border-black/50 px-4 py-2"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-primary animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <span className="ml-2">Thinking...</span>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="border-t-[0.5px] border-border/50 pt-4 bg-gradient-to-r from-background to-muted/20 -mx-6 px-6">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="flex-grow relative">
                  <input
                    ref={inputRef}
                    autoFocus
                    type="text"
                    placeholder="ask me anything..."
                    className="w-full p-4 pr-12 border-[0.5px] border-black/50 outline-none text-sm bg-background/50 backdrop-blur-sm transition-all duration-200 placeholder:text-muted-foreground/60"
                    value={input}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/80 text-white transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    disabled={isLoading || !input.trim()}
                  >
                    <Send
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
