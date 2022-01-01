import React, {useState, useEffect} from 'react';
// react router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// context
import GlobalState from "./context/GlobalState"
// pages
import ProductsPage from "./Pages/Menu"
import CartPage from "./Pages/Cart"
import Search from './Pages/Search';
import WelcomePage from './Pages/Welcome';
// footer
import Footer from './components/Footer/Footer';
import JuiceDetailPage from './Pages/JuiceDetail';

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
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={< WelcomePage />}/>
                    <Route path="/products" element={< ProductsPage />}/>
                    <Route path="/product/:id" element={JuiceDetailPage}/>
                    <Route path="/cart" element={< CartPage />}/>
                    <Route path="/search" element={< Search />}/> 
                    {/* about */}
                    {/* contact us  */}
                    {/* legal  */}
                    {/* careers */}
                    {/* FAQs */}
                    {/* rewards  */}
                    {/* delivery */}
                    {/* profile */}
                    {/* 404 */}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </GlobalState>
    );
}

export default App;
