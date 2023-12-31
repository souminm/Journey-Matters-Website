import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faHouseChimney,
  faAddressCard,
  faMusic,
  faBowlFood,
  faVideoCamera,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>J</span>ourney
            <span>M</span>atters
           <FontAwesomeIcon icon={faLeaf} style={{ color: "#e9eef7" }} />
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
              &nbsp;<FontAwesomeIcon
                icon={faHouseChimney}
                style={{ color: "#e9eef7" }}
              />
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
              &nbsp;<FontAwesomeIcon
                icon={faAddressCard}
                style={{ color: "#e9eef7" }}
              />
            </li>
            <li>
              <NavLink to="/funny">Entertainment</NavLink>
              &nbsp;<FontAwesomeIcon icon={faMusic} style={{ color: "#e9eef7" }} />
            </li>
            <li>
              <NavLink to="/cooking">Cooking</NavLink>
              &nbsp;<FontAwesomeIcon icon={faBowlFood} style={{ color: "#e9eef7" }} />
            </li>
            <li>
              <NavLink to="/lifestyle">Lifestyle</NavLink>
              &nbsp;<FontAwesomeIcon
                icon={faVideoCamera}
                style={{ color: "#e9eef7" }}
              />
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
              &nbsp;<FontAwesomeIcon icon={faLock} style={{ color: "#e9eef7" }} />
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100082860068471&mibextid=9R9pXO"
                target="_blog"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@journeymatters1701"
                target="_blog"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@journeymatters1701"
                target="_blog"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
