import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Gift, Share, Image } from 'lucide-react';
import { Message } from '../types/message';
import { v4 as uuidv4 } from 'uuid';

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Add welcome message when component mounts
  useEffect(() => {
    const welcomeMessage: Message = {
      id: uuidv4(),
      content: 'Bem-vindo ao chat! 👋',
      timestamp: new Date(),
      type: 'welcome'
    };
    setMessages([welcomeMessage]);
  }, []);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (!isUserScrolling) {
      scrollToBottom();
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 50;
      setIsUserScrolling(!isAtBottom);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: uuidv4(),
        content: inputMessage,
        timestamp: new Date(),
        type: 'user'
      };
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div 
        ref={chatContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`
              transform transition-all duration-300 ease-out
              animate-slide-up
              ${message.type === 'welcome' ? 'text-center text-gray-400' : 'text-white'}
              ${message.type === 'user' ? 'ml-auto bg-blue-600 rounded-lg p-3 max-w-[80%]' : ''}
            `}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="px-4 py-3 border-t border-gray-800">
        <form onSubmit={handleSendMessage} className="relative flex items-center">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Digite uma mensagem..."
            className="w-full px-4 py-2 pr-32 rounded-lg bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none"
          />
          
          <div className="absolute right-2 flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-white cursor-pointer" />
            <Gift className="w-5 h-5 text-white cursor-pointer" />
            <Share className="w-5 h-5 text-white cursor-pointer" />
            <Image className="w-5 h-5 text-white cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;