import { useState } from 'react';
// routing
import {useNavigate} from 'react-router-dom'
// custom components
import FormInput from '../../form-input/form-input-component';
import Button from '../../button/button-component';
// react-bootstrap
import {Alert} from 'react-bootstrap';
import './sign-up-form.styles.scss';
// redux
import { useDispatch } from "react-redux";
import { signUpStart } from "../../../Store/user/user.action";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('')
  const dispatch = useDispatch();


  let history = useNavigate()
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      await dispatch(signUpStart(email, password, displayName));
      resetFormFields();
      setLoading(true);
      // push to homepage
      history("/");
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error.message);
        setErr(error.message)
        setLoading(false)
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Create an account with your email and password</span>
      <form onSubmit={handleSubmit}>
      {err && <Alert variant="danger">{err}</Alert>}
        <FormInput
          label='What should we call you?'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button disabled={loading} type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;