import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from "../../style/App.css";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <h1>Contact Us</h1>
        <div>
          <h2>Location</h2>
          <p>123 Main Street, City, Country</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>info@example.com</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>+1234567890</p>
        </div>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
