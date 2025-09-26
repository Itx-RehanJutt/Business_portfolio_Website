import React, { createContext, useContext, useState } from "react";

const MessagesContext = createContext();

export const MessagesProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("messages");
    return stored ? JSON.parse(stored) : [];
  });

  const addMessage = (message) => {
    const newMessages = [...messages, message];
    setMessages(newMessages);
    localStorage.setItem("messages", JSON.stringify(newMessages));
  };

  return (
    <MessagesContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessages = () => useContext(MessagesContext);
