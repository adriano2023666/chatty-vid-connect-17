import React from 'react';
import { MessageCircle, Gift, Share, Image } from 'lucide-react';

const ChatInterface = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-1 overflow-y-auto">
        {/* Existing chat messages area code goes here */}
      </div>
      
      <div className="px-4 py-3 fixed bottom-0 left-0 right-0">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="w-full px-4 py-2 rounded-lg bg-[#3A3A3A] text-white placeholder-gray-400 focus:outline-none"
          />
          
          <div className="absolute right-2 flex items-center space-x-3">
            <MessageCircle className="w-5 h-5 text-white cursor-pointer" />
            <Gift className="w-5 h-5 text-white cursor-pointer" />
            <Share className="w-5 h-5 text-white cursor-pointer" />
            <Image className="w-5 h-5 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
