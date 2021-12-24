import React, {useState, Fragment} from "react";
import {Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import "./MainNavigation.scss";
// import {AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'

function MainNavigation(props) {
    const [logo,
        setLogo] = useState(false);
    const [navBar,
        setNavBar] = useState(false);
        const [toggleState, setToggleState] = useState(false);
        const toggle = () => {
          setToggleState(toggleState === false ? true : false);
        };
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    const changeLogoColor = () => {
        if (window.scrollY >= 50) {
            setLogo(true)
        } else {
            setLogo(false)
        }
    }

    window.addEventListener('scroll', changeLogoColor)

    return (
        <Fragment>
            <header
                className={navBar
                ? 'main-navigation active'
                : 'main-navigation'}>
                <div
                    className={logo
                    ? 'logo active'
                    : 'logo'}/>
                <nav>
                <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
                    <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`}>
                        <li>
                            <NavLink activeClassName="active" onClick={toggle} to="/">home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" onClick={toggle} to="/menu">menu</NavLink>
                        </li>

                        <li>

                            <NavLink activeClassName="active" onClick={toggle} to="/">log-in</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" onClick={toggle} to="/cart">cart ({props.cartItemNumber})</NavLink>
                        </li>
                        <div
                            style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "flex-end",
                            marginRight: '15px'
                        }}>
                            <div
                                style={{
                                padding: '5px'
                            }}>
                                <Button size="sm" className="btn-dark rounded-pill m-1">
                                    order pick up
                                </Button>
                                <Button size="sm" className="btn-secondary rounded-pill m-1">
                                    order delivery
                                </Button>
                            </div>
                        </div>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
};

export default MainNavigation;