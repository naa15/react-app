import logo from './logo.svg';

function Header () {
    return (
        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About us</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;