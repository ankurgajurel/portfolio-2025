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
        className="bg-black text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
      >
        <MessageSquare size={24} />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-16 right-0 w-90 bg-background border-[0.5px] border-black shadow-xl rounded-md flex flex-col justify-between min-h-[500px]"
        >
          <div className="flex justify-between items-center p-4 border-b-[0.5px] border-black">
            <h3 className="text-lg font-medium">Chat with A(I)nkur</h3>
            <Button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </Button>
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between gap-4">
            <div className="flex flex-col flex-grow gap-2 h-48 overflow-y-auto text-sm font-light leading-relaxed">
              {messages.length === 0 ? (
                <div className="bg-gray-100 p-2 rounded-md self-start border-[0.5px] border-gray-300 text-gray-800">
                  Hello! How can I help you today?
                </div>
              ) : (
                messages.map((message: Message) => (
                  <div
                    key={message.id}
                    className={`p-2 rounded-md border-[0.5px] ${
                      message.role === "user"
                        ? "bg-black text-white self-end border-black"
                        : "bg-gray-100 text-gray-800 self-start border-gray-300"
                    }`}
                  >
                    {message.content}
                  </div>
                ))
              )}
              {isLoading && messages.length > 0 && (
                <div className="bg-gray-100 p-2 rounded-md self-start border-[0.5px] border-gray-300 text-gray-800 animate-pulse">
                  Typing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2">
              <form onSubmit={handleSubmit} className="flex-grow flex gap-2">
                <input
                  ref={inputRef}
                  autoFocus
                  type="text"
                  placeholder="Say something..."
                  className="flex-grow p-2 border-[0.5px] border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black text-sm"
                  value={input}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  className="px-4 py-2 rounded-md"
                  disabled={isLoading || !input.trim()}
                >
                  <Send size={20} />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
