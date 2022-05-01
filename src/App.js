import React, {Fragment, useEffect} from 'react';
// react router
import {Route, Routes, useLocation} from 'react-router-dom'
// redux
import {useDispatch} from 'react-redux';
import { checkUserSession } from './Store/user/user.action';
// pages
// import ProductsPage from "./Pages/Menu"
import Checkout from "./routes/checkout/checkout.component"
import Search from './Pages/Search';
import WelcomePage from './Pages/Welcome';
import Shop from "./routes/shop/shop.component"
import Home from "./routes/home/home.component";
import FourOhFourPage from './Pages/404';
import Footer from './components/Footer/Footer';
import OurStory from "./Pages/out-story"
import ContactUs from "./Pages/contact-us";
import Legal from "./Pages/Legal";
import FAQ from "./Pages/FAQ"

// custom components
import MainNavigation from './components/MainNavigation';
import Authentication from './components/Auth/authentication/authentication.component'
// animated pages
import {AnimatePresence} from 'framer-motion'

function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(checkUserSession());
      
    }, []);

    return (
        <Fragment>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={< MainNavigation />}>
                        <Route index element={<WelcomePage/>}/>
                        <Route path="home" element={< Home />}/>
                        <Route path="shop/*" element={< Shop />}/>
                        <Route path="our-story" element={<OurStory/>}/>
                        <Route path="contact-us" element={<ContactUs/>}/>
                        <Route path="legal" element={<Legal/>}/>
                        <Route/>
                        <Route path="auth" element={< Authentication />}/>
                        <Route path="checkout" element={< Checkout />}/>
                        <Route path="search" element={< Search />}/>
                        <Route path="faq" element={<FAQ />}/>
                        <Route path="*" element={< FourOhFourPage />}/>
                    </Route>
                </Routes>
            </AnimatePresence>
            <Footer/>
        </Fragment>
    );
}

export default App;
