import React from "react";
import { Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from "../assets/SqueezersLogo.png"
import "./MainNavigation.css";
import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'
const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <Nav.Link>
            <Image src={Logo} alt="logo" style={{width: "140px", height: "65px", objectFit: "contain"}}/>
          </Nav.Link>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink to="/welcome">menu</NavLink>
        </li>
        <li>
          <NavLink to="/welcome">rewards</NavLink>
        </li>
        <li>
          <NavLink to="/welcome">delivery</NavLink>
        </li>
        <li>
          <AiOutlineSearch />
          <NavLink to="/search">search</NavLink>
        </li>
        <li>
          <AiOutlineUser/>
          <NavLink to="/welcome">profile</NavLink>
        </li>
        <li>
          <NavLink to="/cart">cart ({props.cartItemNumber})</NavLink>
        </li>
        
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
