import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* Top Navigation */}
      <header className="nav">
        <h1 className="logo">NoteMyWords</h1>
        <Link className="nav-book" to="/browse">Book Now</Link>
      </header>

      {/* Main Singer Section */}
      <section className="singer-section">
        <img src="/homepagesinger.jpg" alt="Singer" className="singer-image" />

        <div className="singer-box">
          <h2>Book a singer to elevate your wedding!</h2>
          <Link className="singer-button" to="/browse">Book Now</Link>
        </div>
      </section>

      {/* Footer Text */}
      <footer className="footer">
        <p>Contacts: xxxxxx</p>
        <p>Email: xxx</p>
        <p>Created by YiYau Wong, David Chen, Zilin Liu</p>
      </footer>

    </div>
  );
}