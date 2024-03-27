import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
