import "./../../matches_styles.css";
const MatchCard = ({ user, canHelpClass, needHelpClass }) => {
    if (!user) return <div>Error: User information is not available.</div>;
    return (
        <div className="match-card">
        <div className="match-info-container">
          <h3 className="match-card-header">User: {user.name} {user.lastname}</h3>
          {canHelpClass && <h3 className="match-card-class">Can help with class: {canHelpClass.name}</h3>}
          {needHelpClass && <h3 className="match-card-class">Needs help with class: {needHelpClass.name}</h3>}
        </div>
        <div className="button-container">
          <button className="match-card-button">Start Chatting</button>
        </div>
      </div>
    );
  };
  
  export default MatchCard;