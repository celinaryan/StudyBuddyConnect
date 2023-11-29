const MatchCard = ({ user, canHelpClass, needHelpClass }) => {
    if (!user) return <div>Error: User information is not available.</div>;
    return (
      <div className="match-card">
        <h3>User: {user.name} {user.lastname}</h3>
        {canHelpClass && <p>Can help with class: {canHelpClass.name}</p>}
        {needHelpClass && <p>Needs help with class: {needHelpClass.name}</p>}
        <button>Start Chatting</button>
      </div>
    );
  };
  
  export default MatchCard;