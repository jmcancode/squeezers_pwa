import SignUpForm from "../sign-up-form/sign-up-form.component";
import SignInForm from "../sign-in-form/sign-in-component";
import "./authentication-styles.scss"
import {Fragment} from "react";
import AnimatedPage from "../../../AnimatedPage";

const Authentication = () => {
    return (
        <Fragment>
            <AnimatedPage>
                <div className="authentication-container">
                    <SignInForm/>
                    <SignUpForm/>
                </div>
            </AnimatedPage>
        </Fragment>
    )
}

export default Authentication;