import React, { useState } from "react";
import axios from "axios";

const ChatbotFrontend: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [output, setOutput] = useState<string | null>(null);

  const apiUrl = "/api/chatbot"; // Replace with the actual URL of your backend API endpoint

  const handleSubmit = async () => {
    try {
      const response = await axios.post(apiUrl, { message: inputText });

      const newOutput = response.data.output;

      setOutput(newOutput);
      setMessages([...messages, inputText, newOutput]);
      setInputText("");
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
      {output && <div>Bot: {output}</div>}
    </div>
  );
};

export default ChatbotFrontend;
