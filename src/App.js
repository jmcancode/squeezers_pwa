import React, {useState, useEffect} from 'react';
// react router
import {Route, Routes} from 'react-router-dom'
// context
import GlobalState from "./context/GlobalState"
// pages
import ProductsPage from "./Pages/Menu"
import CartPage from "./Pages/Cart"
import Search from './Pages/Search';
import WelcomePage from './Pages/Welcome';
import JuiceDetailPage from './Pages/JuiceDetail';
import FourOhFourPage from './Pages/404';
import Footer from './components/Footer/Footer';
// import Notification from './Firebase/Notifications';
import MainNavigation from './components/MainNavigation';
import SignIn from "./components/Auth/sign-in-component";


function App({context}) {

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
            {/* <Notification/> */}
            <Routes>
                <Route path="/" element={< MainNavigation />}>
                    <Route index element={< WelcomePage />}/>
                    <Route path="products" element={< ProductsPage />}>
                        <Route path=":id/*" element={< JuiceDetailPage />}/>
                    </Route>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="cart" element={< CartPage />}/>
                    <Route path="search" element={< Search />}/>
                    <Route path="*" element={< FourOhFourPage />}/>
                </Route>
            </Routes>
            <Footer/>
        </GlobalState>
    );
}

export default App;
