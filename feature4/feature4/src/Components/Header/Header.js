import { Link } from "react-router-dom";

// Link makes it buttery smooth
const Header = () => (
  // using () instead of {} here because we are returning one line
  <header>
    <div class="nav-bar-container">
    <nav>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
        <li>
          <Link to="/yourmatches">Your Matches</Link>
        </li>
      </ul>
    </nav>
    </div>
  </header>
);

export default Header;