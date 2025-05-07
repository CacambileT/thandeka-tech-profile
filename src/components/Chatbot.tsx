
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hi I'm Thandeka, how can I make your day better?" }
  ]);
  const [userInput, setUserInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userInput.trim()) return;
    
    // Add user message
    setMessages([...messages, { role: 'user', content: userInput }]);
    
    // Clear input
    setUserInput('');
    
    // Simulate response after a short delay
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages, 
        { 
          role: 'bot', 
          content: "Thanks for your message! This is a demo chatbot. I'll get back to you via email soon!"
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-brand-red text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all z-50"
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 w-80 md:w-96 h-96 z-50 flex flex-col shadow-xl border border-gray-200 dark:border-gray-700">
          {/* Chat Header */}
          <div className="bg-brand-red text-white p-3 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">Chat with Thandeka</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-red-700 h-8 w-8 p-0">
              <X size={18} />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-white dark:bg-gray-800 space-y-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${
                  msg.role === 'user' 
                    ? 'ml-auto bg-brand-red text-white' 
                    : 'mr-auto bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                } rounded-lg p-2 max-w-[80%]`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-brand-red"
              />
              <Button type="submit" className="bg-brand-red hover:bg-red-700 text-white rounded-l-none">
                Send
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
