import React, { useState, useEffect } from 'react';
import { getMatches } from '../../Services/MatchService';
import MatchCard from './MatchCard';

const YourMatches = () => {
  // in this page, users can see who they matched with
  // weather that be someone who needs help in the same course as them
  // someone who can help them in a specific course
  // someone they can help 
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const matchesData = await getMatches();
      setMatches(matchesData);
    };

    fetchMatches();
  }, []);

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
        />
      ))}
        </div>
      </section>
    );
};
export default YourMatches;