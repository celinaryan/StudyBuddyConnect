import "../../chat_styles.css";

function ChatMessage(props) {
    const { text, uid, authorName, timestamp } = props.message;
    const { currentUserId } = props; // currentUserId prop here
    console.log("uid", uid, typeof uid, "currentUserId", currentUserId, typeof currentUserId);
    const messageClass = uid === currentUserId ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <p className="author-name">{authorName}:</p>
      <p className="message-text">{text}</p>
      <small className="message-timestamp">{timestamp}</small>
    </div>
  )
}
export default ChatMessage;