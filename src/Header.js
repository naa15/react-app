import { Link } from "react-router-dom";
import logo from "./logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
