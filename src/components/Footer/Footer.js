import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'
// custom css
import "../Footer/Footer.css"
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
                            alignItems: 'center',
                            gap: '15px'
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

                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div>
                            <p className='text-white'>Connect with us</p>
                        </div>
                        <div
                            style={{
                            display: 'flex',
                            flexDirection: "row",
                            justifyContent: "space-evenly",
                            gap: '15px'
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

                    <div
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: 'flex-start'
                    }}>
                        <li>
                            <NavLink className="footerLinks" to="/">our story</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/">contact us</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/">legal</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/">careers</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/">rewards</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to={'/search'}>search</NavLink>
                            
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/">FAQ</NavLink>
                        </li>

                    </div>

                </nav>
                <nav className='four'>
                    <p>2022 All Rights Reserved Squuezers Co.</p>
                </nav>
            </nav>

        </Fragment>
    )
}