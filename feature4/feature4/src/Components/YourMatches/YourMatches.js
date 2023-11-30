
import React, { useState, useEffect } from 'react';
import { getMatches } from '../../Services/MatchService';
import MatchCard from './MatchCard';
import { Routes, Route, useNavigate } from "react-router-dom";
import Chat from "../Chat/Chat";
const YourMatches = () => {
  // in this page, users can see who they matched with
  // weather that be someone who needs help in the same course as them
  // someone who can help them in a specific course
  // someone they can help 
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

    useEffect(() => {
      const fetchMatches = async () => {
        const matchesData = await getMatches();
        setMatches(matchesData);
      };

      fetchMatches();
    }, []);

    const handleStartChat = (userId) => {
      navigate(`/matches/${userId}`);
    };

    return (
      <section>
        <div className="centerText">
        <h1> Buddy Chatroom </h1>
        <p> Look at your matches and chat with other students. </p>
        {matches.map((match, index) => (
            <MatchCard
            key={index}
            user={match.otherUser}
            canHelpClass={match.canHelpClass}
            needHelpClass={match.needHelpClass}
            onStartChat={handleStartChat}
            // Pass onStartChat to the MatchCard
          />
        ))}
        </div>
      <Routes>
        <Route path="/matches/:userId" element={<Chat />} />
      </Routes>
      </section>
    );
};
export default YourMatches;