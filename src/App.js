import React from 'react';

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

function App({context}) {

    return (
        <GlobalState>
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={< WelcomePage />} exact/>
                <Route path="/menu" element={< ProductsPage />} exact/>
                <Route path="/cart" element={< CartPage />} exact/>
                <Route path="/search" element={< Search />} exact/> {/* about */}
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
    </GlobalState> );
}

export default App;
