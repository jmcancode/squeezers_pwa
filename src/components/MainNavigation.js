import React, {useState, Fragment} from "react";
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../assets/SqueezersLogo.png"
import "./MainNavigation.css";
import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'

function MainNavigation(props) {

    const [navBar, setNavBar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <Fragment>
            <div
                className={navBar
                ? 'main-navigation active'
                : 'main-navigation'}>
                <nav>
                    <ul>
                        <li>

                            <Image
                                src={Logo}
                                alt="logo"
                                style={{
                                width: "140px",
                                height: "65px",
                                objectFit: "contain"
                            }}/>

                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/welcome">home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/welcome">rewards</NavLink>
                        </li>
                        <li>
                            <NavLink to="/welcome">delivery</NavLink>
                        </li>
                        <li>
                            <AiOutlineSearch/>
                            <NavLink to="/search">search</NavLink>
                        </li>
                        <li>
                            <AiOutlineUser/>
                            <NavLink to="/welcome">log-in</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">cart ({props.cartItemNumber})</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </Fragment>
    )
};


export default MainNavigation;