import {useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
// custom styles
import "./sign-in-form.scss"
// component styles
import FormInput from "../../form-input/form-input-component"
import Button, {BUTTON_TYPE_CLASSES} from "../../button/button-component"
import {Alert} from 'react-bootstrap';
// redux
import {
    googleSignInStart,
    emailSignInStart,
  } from '../../../Store/user/user.action';



const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields,
        setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    const [err,
        setErr] = useState("")
    const [loading,
        setLoading] = useState(false);
    let navigate = useNavigate()

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async(e) => {
        e.preventDefault();

        try {
            setErr("")
            await dispatch(googleSignInStart());
            resetFormFields();
            setLoading(true)
            navigate("/")
        } catch (error) {
            setErr(error.message)
            setLoading(false);
        }

    };

    const handleSubmit = async(event) => {
        event.preventDefault();

        try {
            setErr("")
            await dispatch(emailSignInStart(email, password));
            resetFormFields();
            setLoading(true)
            navigate("/")
        } catch (error) {
            setErr(error.message)
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({
            ...formFields,
            [name]: value
        });
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                {err && <Alert variant="danger">{err}</Alert>}
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}/>

                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}/>
                <div className='buttons-container'>
                    <Button disabled={loading} type='submit'>Sign In</Button>
                    <Button  buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;