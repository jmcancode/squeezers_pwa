import React, {useState, useEffect} from 'react';
// react router
import {Route, Routes, useLocation} from 'react-router-dom'
// context
import GlobalState from "./context/GlobalState"
// pages
import ProductsPage from "./Pages/Menu"
import Checkout from "./components/checkout/checkout-component"
import Search from './Pages/Search';
import WelcomePage from './Pages/Welcome';
import JuiceDetailPage from './Pages/JuiceDetail';
import FourOhFourPage from './Pages/404';
import Footer from './components/Footer/Footer';
// custom components
import MainNavigation from './components/MainNavigation';
import Authentication from './components/Auth/authentication/authentication.component.jsx'
// animated pages
import {AnimatePresence} from 'framer-motion'

function App({context}) {

    const location = useLocation();

    const [user,
        setUser] = useState(null);

    useEffect(() => {
        const u = localStorage.getItem('user');
        u && JSON.parse(u)
            ? setUser(true)
            : setUser(false);
    }, [])

    useEffect(() => {
        localStorage.setItem("user", user);
    }, [user])

    return (
        <GlobalState>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={< MainNavigation />}>
                        <Route index element={< WelcomePage />}/>
                        <Route path="products" element={< ProductsPage />}>
                            <Route path=":id/*" element={< JuiceDetailPage />}/>
                        </Route>
                        <Route path="auth" element={< Authentication />}/>
                        <Route path="cart" element={< Checkout />}/>
                        <Route path="search" element={< Search />}/>
                        <Route path="*" element={< FourOhFourPage />}/>
                    </Route>
                </Routes>
            </AnimatePresence>
            <Footer/>
        </GlobalState>
    );
}

export default App;
