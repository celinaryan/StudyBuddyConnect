import { useNavigate } from "react-router-dom";

export default function About() {
  const history = useNavigate();

  // this will be more for feature 5 when you just want to change the route
  const buttonHandler = () => {
    history("/");
  };

  return (
    <section>
      <h1> Welcome to About Components </h1>
      <p> This is the about component </p>
      <button onClick={buttonHandler}>Home</button>
    </section>
  );
}