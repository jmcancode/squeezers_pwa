import React, {Fragment} from 'react'
// custom css
import "./Welcome.css"
// custom components
import Footer from '../components/Footer/Footer'
import MainNavigation from '../components/MainNavigation'
import heroImg from "../assets/Fruits@2x.png"

export default function WelcomePage() {
    return (
        <Fragment>
            <div>
                <MainNavigation/>
            </div>
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
                        <button className='btn btn-dark'>
                            Give it a try!
                        </button>
                    </div>
                </div>
                <div className="right-side">
                    <img
                        src={heroImg}
                        alt="heroImg"
                        width={100}
                        height={100}
                        style={{
                        width: '75%',
                        height: "70%"
                    }}/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </Fragment>
    )
}
