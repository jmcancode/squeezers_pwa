import React from 'react';

// react router
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// context
import GlobalState from "./context/GlobalState"
// pages
import ProductsPage from "./Pages/Menu"
import CartPage from "./Pages/Cart"
import Search from './Pages/Search';


function App() {
    return (
        <GlobalState>
            <BrowserRouter>
                <Routes>
                    <Route path="/welcome" element={< ProductsPage />} exact/>
                    <Route path="/cart" element={< CartPage />} exact/>
                    <Route path="/search" element={< Search />} exact/>
                </Routes>
            </BrowserRouter>
        </GlobalState>
    );
}

export default App;
