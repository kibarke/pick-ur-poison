//  Stolen code from 21-MERN => 01-Activities => Solved => client => src => components => thoughtform

import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { USER_SIGNUP } from '../../utils/signup';

const SignUpForm = () => {
  const [formState, setFormState] = useState({
    userName: '',
    passWord: '',
    dateOfBirth: '',
  });
  const [signUp, {error}] = useMutation(USER_SIGNUP);


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signUp({
        variables: { ...formState },
      });

      // setFormState({
      //   thoughtText: '',
      //   thoughtAuthor: '',
      // });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({...formState, [name]: value})
    // if (name === 'thoughtText' && value.length <= 280) {
    //   setFormState({ ...formState, [name]: value });
    //   setCharacterCount(value.length);
    // } else if (name !== 'thoughtText') {
    //   setFormState({ ...formState, [name]: value });
    // }
  };

  return (
    <div>
      <h3>Sign Up?</h3>

      {/* <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p> */}
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <input
            name="username"
            value={formState.userName}
            type='text'
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></input>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="password"
            placeholder="password..."
            type='password'
            value={formState.passWord}
            className="form-input w-100"
            onChange={handleChange}
          />
          <input
            name="date of bith"
            placeholder="date of birth"
            type='date of birth'
            value={formState.dateOfBirth}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Sign Up
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Sign Up failed...
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
