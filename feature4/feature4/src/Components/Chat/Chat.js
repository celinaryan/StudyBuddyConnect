import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import "../../chat_styles.css";
const Chat = () => {
    const { userId } = useParams();  // Assuming the userId here is the chat partner's name
  const navigate = useNavigate();
  const [chatThread, setChatThread] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null); // We will save user information here
 

    const fetchChatThread = async (userId) => {
      setIsLoading(true);
      // Call your API and ensure you have a valid response:
      try {
        const response = await fetch(`your-api-endpoint/${userId}`);
        if(!response.ok) throw new Error("API Fetch error");
        const data = await response.json();
        setChatThread(data);
      } catch (error) {
        console.log("API Error:", error); 
        setChatThread([]);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      fetchChatThread(userId);
    }, [userId]);
  
    const sendMessage = async (userId, message) => {
        // Implement functionality to send message
      };
    
    const handleSendMessage = async (event) => {
        if (event.key === 'Enter') {
          try {
            const message = event.target.value;
            // Save your message to the server
            await sendMessage(userId, message);
            // Then get updated chatThread from the server or add the new message directly to the chatThread
            setChatThread((prevChatThread) => [...prevChatThread, message]);
            event.target.value = '';
          } catch (error) {
            console.log("Error while sending message:", error.message);
          }
        }
      };
  
      return (
        <div className="chat-box">
            <button onClick={() => navigate(-1)}>Go Back</button>
            { user && <h2>Chat with {user.name} {user.lastName}</h2>} 
          <div className="chat-window">
            {/* Chat messages part */}
            <div>
              {
                isLoading ? "Loading..." : (
                  chatThread.map((message, index) => (
                    <div key={index}>{message}</div>)
                  )
                )
              }
            </div>
            {/* Input for new message */}
            <input 
              type="text" 
              placeholder="Enter message" 
              onKeyPress={handleSendMessage} 
              className="chat-input"
            />
          </div>
        </div>
    );
  };
  
  export default Chat;