import React from "react";
import abtImg from "../Images/about.jpg";
import { FaFacebookSquare } from "react-icons/fa";
const AboutComponent = () => {
  return (
    <div className="about-module">
      <h1 style={{ textAlign: "center" }}>
        <b>About Me</b>
      </h1>
      <div className="card">
        <div className="card-container">
          <div>
            <img src={abtImg} alt="blog" className="abt-img" />
          </div>
          <div>
            <p>
              Hello, everyone! My name is Amrita and I'm a blogger. I currently
              live in Jaipatana,odisha. I'm really passionate about travelling
              and cooking. I started this blog to share my experience in diverse
              fields of activities namely entertainment, music, cooking,
              dancing, comedies, arts & literature and so on and so forth. I am
              sure my audience would be benefited after watching my videos. I
              would appreciate your constructive suggestion with regards to my
              presentation. so that i would be able to present a better account
              of myself in future. Now onwards, I would upload two/three videos
              or may be more based on number of views and likes because those
              things motivates me to present more videos and pls keep checking
              this website for staying tuned and updated and also I love to hear
              from my audience! Feel free to leave a comment or contact me on
              youtube. Thankyou!!
            </p>
            <a href="https://www.youtube.com/@journeymatters1701">
              {" "}
              <i class="ri-youtube-fill">
                Subscribe my channel to stay updated :){" "}
              </i>
            </a>
            <br></br>
            <a
              href="https://www.facebook.com/profile.php?id=100082860068471&mibextid=9R9pXO"
              target="_blog"
            >
              Facebook official page
              <FaFacebookSquare className="facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
