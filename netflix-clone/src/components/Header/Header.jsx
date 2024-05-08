import React, { useState, useEffect } from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import NavSection from "./Nav";
// import DropdownMenu from "./Browse";
const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    
  }, []);
  

  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="browse">
          <NavSection />
        </div>
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            {/* <li>
              <a href="/browse">
                <div className="browse">Browse</div>
                <div className="browse">
                  <ArrowDropDownIcon />
                </div>
              </a>
            </li> */}
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/tvshows">TVShows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/new&popular">New & Popular</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
            <li>
              <Link to="/browsebylanguages">Browse by Languages</Link>
            </li>
            {/* <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/TVShows">TVShows</a>
            </li>
            <li>
              <a href="/Movies">Movies</a>
            </li>
            <li>
              <a href="/Movies"></a>
            </li>
            <li>
              <a href="/MyList">MyList</a>
            </li>
            <li>
              <a href="/Browse by Languages">Browse by Languages</a>
            </li> */}
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              {" "}
              <SearchIcon />
            </li>
            <li>
              {" "}
              <NotificationsNoneIcon />{" "}
            </li>
            <li>
              {" "}
              <AccountBoxIcon />{" "}
            </li>
            <li>
              {" "}
              <ArrowDropDownIcon />{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
