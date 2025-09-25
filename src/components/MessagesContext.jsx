import React, { createContext, useContext, useState, useEffect } from "react";

const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  // ✅ Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem('contactMessages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const addMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
    // ✅ Save to localStorage
    localStorage.setItem('contactMessages', JSON.stringify(newMessages));
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => useContext(MessagesContext);