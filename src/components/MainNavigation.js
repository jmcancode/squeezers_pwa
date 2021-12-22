import React, {useState, Fragment} from "react";
import {Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../assets/SqueezersLogo.png"
import "./MainNavigation.css";
// import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'

function MainNavigation(props) {

    const [navBar,
        setNavBar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50) {
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

                            <Image src={Logo} alt="logo" className="logo" width={100}/>

                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink to="/">home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu">menu</NavLink>
                        </li>

                        <li>

                            <NavLink to="/welcome">log-in</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">cart ({props.cartItemNumber})</NavLink>
                        </li>

                    </ul>
                </nav>
                <div
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: "flex-end",
                    marginRight: '15px'
                }}>
                    <div style={{
                        padding: '5px'
                    }}>
                        <button className="btn btn-dark rounded-pill m-1">
                            order pick up
                        </button>
                        <button className="btn btn-secondary rounded-pill m-1">
                            order delivery
                        </button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
};

export default MainNavigation;