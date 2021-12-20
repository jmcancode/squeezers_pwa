import React, { Fragment } from 'react'
import MainNavigation from '../components/MainNavigation'

export default function WelcomePage() {
    return (
        <Fragment>
            <div>
                <MainNavigation/>
            </div>
            <div>
                <p>Welcome to Squuezers Juice Co.</p>
            </div>
        </Fragment>
    )
}
