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
            <a href="#">About us</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
