import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {firestore} from './firebase';
import firebase from "firebase/compat/app";
import ChatMessage from "./ChatMessage.js";
import "../../chat_styles.css";
import Parse from "parse";
const Chat = () => {
  const { userId } = useParams();  // userId of the chat partner
  const currentUser = Parse.User.current(); // You need to get the current user Id here, replace ... with your corresponding code
  const navigate = useNavigate();

  const chatId = currentUser.id < userId ? currentUser.id + userId : userId + currentUser.id;

  const dummy = useRef();
  const messagesRef = firestore.collection('messages').doc(chatId).collection('chatMessages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState('');
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch user data from Back4App using userId
    const query = new Parse.Query("User");
    query.get(userId)
      .then((user) => {
        const userData = {
          id: user.id, 
          name: user.get('firstName'), 
          lastname: user.get('lastName')
        };
        setUser(userData);
      })
      .catch((error) => {
        console.error('Error while fetching user: ', error);
      });
  }, [userId]);

  const sendMessage = async (e) => {
    e.preventDefault();

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid: currentUser.id,
      authorName: currentUser.get('username'), // Replace 'username' with your actual field for user's name
      timestamp: new Date().toLocaleString() // This will save actual timestamp in string format
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className="chat-box">
      <button onClick={() => navigate(-1)}>Go Back</button>
      { user && <h2>Chat with {user.name} {user.lastName}</h2>}
      <div className="chat-window">
  <main className="messages-container"> {/* Added a class here */}

  {messages && messages.map(msg => msg ? (<ChatMessage key={msg.id} message={msg} currentUserId={currentUser.id} />) : '')}
      <span ref={dummy}></span>
  </main>

  <form onSubmit={sendMessage} className="chat-input-form"> {/* Added a class here */}
  <input className="input-field" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder=" send message" />
    <button type="submit" disabled={!formValue}>Send</button>
  </form>
</div>
    </div>
  )};

export default Chat;