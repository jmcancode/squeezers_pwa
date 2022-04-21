import React, {Fragment, useState, useContext} from "react";
import {NavLink, Outlet} from "react-router-dom";
import "./MainNavigation.scss";
// react-bootstrap components
import {Nav, Container, Navbar} from 'react-bootstrap'
// context
import ShopContext from "../context/ShopContext";




function MainNavigation(props) {
    const [logo,
        setLogo] = useState(false);
    const [navBar,
        setNavBar] = useState(false);

    const context = useContext(ShopContext)


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
            <Navbar
                sticky="top"
                className={navBar
                ? 'main-navigation active'
                : 'main-navigation'}
                collapseOnSelect
                expand="lg">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/">
                            <div
                                className={logo
                                ? 'logo active'
                                : 'logo'}/>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link></Nav.Link>
                        </Nav>
                        <Nav >
                            <Nav.Link>
                                <NavLink to="/products">
                                    Menu
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <NavLink to="/auth">
                                    Account
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/cart">
                                    Cart
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Outlet/>
            </div>

        </Fragment>

    )
};

export default MainNavigation;