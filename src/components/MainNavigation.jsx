import React, {Fragment, useState} from "react";
import { Outlet} from "react-router-dom";
import {
    NavigationContainer,
    NavLinks,
    NavLink,
    LogoContainer,
  } from './navigation.styles';

import CartIcon from '../components/cart-icon/cart-icon.component';
import CartDropdown from '../components/cart-dropdown/cart-dropdown.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen } from '../Store/cart/cart.selector';
import { selectCurrentUser } from '../Store/user/user.selector';
import { signOutStart } from '../Store/user/user.action';

import {ReactComponent as CrwnLogo} from '../assets/logo-blue.svg'

function MainNavigation(props) {
    const [logo,
        setLogo] = useState(false);
    const [navBar,
        setNavBar] = useState(false);

        const dispatch = useDispatch();
        const currentUser = useSelector(selectCurrentUser);
        // const isCartOpen = useSelector(selectIsCartOpen);
      
        const signOutUser = () => dispatch(signOutStart());


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
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='auth'>SIGN IN</NavLink>
          )}
          <NavLink to="checkout"><CartIcon/></NavLink>
        </NavLinks>
        {/* {isCartOpen && <CartDropdown />} */}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default MainNavigation;