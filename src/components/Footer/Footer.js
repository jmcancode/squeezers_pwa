import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
// custom css
import "../Footer/Footer.scss"
// react-icons
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

export default function Footer() {
    return (
        <Fragment>
            <nav className="footerWrapper">
                <nav className='one'>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <p className='text-white'>Download the App</p>
                        <div
                            style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: 'space-around',
                            alignItems: 'flex-start',
                            gap: '10px'
                        }}>
                            <div>
                                <p className='text-white'>iOS</p>
                            </div>
                            <div>
                                <p className='text-white'>Android</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className='two'>

                    <div>
                        <div className='text-center'>
                            <p className='text-white'>Connect with us</p>
                        </div>
                        <div
                            style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-around"
                        }}>
                            <div>
                                <AiFillFacebook size={25} color='#fff'/>
                            </div>
                            <div>
                                <AiFillTwitterSquare size={25} color='#fff'/>
                            </div>
                            <div>
                                <AiFillInstagram size={25} color='#fff'/>
                            </div>
                        </div>
                    </div>

                </nav>

                <nav className='three'>

                    <div className="footer-container">

                        <NavLink className="footerLinks" to="/">our- story</NavLink>

                        <NavLink className="footerLinks" to="/">contact us</NavLink>

                        <NavLink className="footerLinks" to="/">legal</NavLink>

                        <NavLink className="footerLinks" to={'/search'}>search</NavLink>

                        <NavLink className="footerLinks" to="/">FAQ</NavLink>

                    </div>

                </nav>
                <nav className='four'>
                    <p>2022 All Rights Reserved Squuezers Co. || Made with
                        <span
                            style={{
                            padding: '5px'
                        }}>❤️</span>
                        by bboy-creative
                    </p>
                </nav>
            </nav>

        </Fragment>
    )
}