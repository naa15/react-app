import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "./Content";

function Home() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
