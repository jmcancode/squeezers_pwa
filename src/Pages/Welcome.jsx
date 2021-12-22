import React, {Fragment, useContext} from 'react'
// custom css
import "./Welcome.css"
// custom components
// import Footer from '../components/Footer/Footer'
import MainNavigation from '../components/MainNavigation'
import heroImg from "../assets/Fruits@2x.png"
import {NavLink} from 'react-router-dom'
import ShopContext from '../context/ShopContext'

function WelcomePage(props) {
    const context = useContext(ShopContext)

    return (
        <Fragment>
            <MainNavigation cartItemNumber={context.cart.reduce((count, curItem) => {
                return count + curItem.quantity
            }, 0)}/>
            <div className="hero">
                <div className='left-side text-center'>
                    <div>
                        <h3
                            style={{
                            color: "#A26038",
                            fontSize: '20px'
                        }}>New Autumn Flavors</h3>
                        <h1
                            style={{
                            color: "#F4BE59",
                            fontSize: '90px'
                        }}>In-Season</h1>
                    </div>
                    <div
                        style={{
                        padding: '5px',
                        paddingBottom: '15px'
                    }}>
                        <small
                            style={{
                            fontSize: '12px',
                            color: "#1c2450"
                        }}>Try our new flavors made from the season's most delicious produce!</small>
                    </div>
                    <div className='d-grid gap-2'>
                        <NavLink to="/menu" style={{backgroundColor: "#1c2450", textDecoration: "none", color: "#fff", padding: '15px', borderRadius: "35px"}}>
                            Give it a try!
                        </NavLink>
                    </div>
                </div>
                <div className="right-side">
                    <img
                        src={heroImg}
                        alt="heroImg"
                       className="right-image"
                       width={100}
                       height={100}
                       />
                </div>
            </div>
            {/* <div>
                <Footer/>
            </div> */}
        </Fragment>
    )
}
export default WelcomePage;