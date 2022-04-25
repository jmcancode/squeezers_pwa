import React, {Fragment} from 'react'
// custom css
import "./Welcome.scss"
import heroImg from "../assets/Fruits@2x.png"
import {NavLink} from 'react-router-dom'
// animated pages
import AnimatedPage from "../AnimatedPage"

function WelcomePage(props) {

    return (
        <Fragment>
            <AnimatedPage>
                <div className="hero">
                    <div className='left-side text-center'>
                        <div>
                            <h3 className='hero-title'>New Spring Flavors</h3>
                            <h1 className='hero-bigTitle'>In-Season</h1>
                        </div>
                        <div
                            style={{
                            padding: '5px',
                            paddingBottom: '15px'
                        }}>
                            <small
                                style={{
                                fontSize: '16px',
                                color: "#1c2450"
                            }}>Try our new flavors made from the season's most delicious produce!</small>
                        </div>
                        <div className='d-grid gap-2'>
                            <NavLink
                                to="/products"
                                style={{
                                backgroundColor: "#1c2450",
                                textDecoration: "none",
                                color: "#fff",
                                padding: '15px',
                                borderRadius: "35px"
                            }}>
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
                            height={100}/>
                    </div>
                </div>
            </AnimatedPage>

        </Fragment>
    )
}
export default WelcomePage;