import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "../../chat_styles.css";

const auth = firebase.auth();

function ChatMessage(props) {
    const { text, uid, authorName, timestamp } = props.message;
    const { currentUserId } = props; // currentUserId prop here
    console.log("uid", uid, "currentUserId", currentUserId);
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