import React from 'react'
import {NavLink} from 'react-router-dom'
// custom css
import "../Footer/Footer.css"
// react-icons
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai'

export default function Footer() {
    return (
       <>
        
        <div className="Footer-Wrapper">
            <nav>
                <ul>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <p className="text-white">Download the App</p>
                        <div style={{display: 'inherit', justifyContent: 'space-around', alignItems: 'center', gap: '15px'}}>
                            <div>
                                <p className='text-white'>iOS</p>
                            </div>
                            <div>
                                <p className='text-white'>Android</p>
                            </div>
                        </div>
                    </div>
                </ul>
                <ul>
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
                </ul>
                <ul>
                    <div
                        style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <li>
                            <NavLink className="footerLinks" to="/welcome">our story</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/welcome">contact us</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/welcome">legal</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/welcome">careers</NavLink>
                        </li>
                        <li>
                            <NavLink className="footerLinks" to="/welcome">FAQ</NavLink>
                        </li>
                    </div>
                </ul>
            </nav>
        </div></>
    )
}
