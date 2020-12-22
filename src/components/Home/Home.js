import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div id="container">
      Hi! I am
      <div id="flip">
        <div>
          <div>TAI</div>
        </div>
        <div>
          <div>A Fullstack Developer</div>
        </div>
        <div>
          <div>Handsome</div>
        </div>
      </div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <button className="btn">Hire me</button>
      </Link>
    </div>
  );
}

export default Home;
