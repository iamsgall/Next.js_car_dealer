import React, {useReducer, useState} from 'react';
import {useForm} from 'react-hook-form';
import {auth, db} from '../../config/fire-config';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {TiArrowBackOutline} from 'react-icons/ti';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

export default function login() {
  const router = useRouter();

  const [admin, setAdmin] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: '',
    }
  );

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const {register, handleSubmit, errors} = useForm();

  const onSubmit = () => {
    auth
      .signInWithEmailAndPassword(admin.email, admin.password)
      .then(user => {
        console.log(user);
        router.push('/dashboard');
      })
      .catch(err => {
        console.log(err.code, err.message);
      });
    setAdmin({
      email: '',
      password: '',
    });
  };

  const handleChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setAdmin({[name]: value});
  };

  return (
    <div className='d-flex justify-content-center py-5'>
      <div className='col-11 ' style={{height: '86vh'}}>
        {' '}
        <div className='container-fluid' style={{height: '100%'}}>
          <Image
            src='/images/car_dealer1.jpg'
            layout='fill'
            className='rounded img-fluid'
          />

          <div
            className='d-flex justify-content-center align-items-center'
            style={{height: '100%'}}
          >
            <div className='card' style={{width: '22rem', height: '27rem'}}>
              <div
                className='d-flex justify-content-center'
                style={{position: 'relative'}}
              >
                <div style={{position: 'absolute', top: 16, left: 16}}>
                  <Link href='/'>
                    <a data-tip='Go Back'>
                      {' '}
                      <ReactTooltip place='right' type='info' effect='solid' />
                      <TiArrowBackOutline style={{fontSize: 28}} />
                    </a>
                  </Link>
                </div>
                <img
                  src='/images/user_avatar.png'
                  className='card-img-top rounded-circle mt-5'
                  alt='...'
                  style={{width: 120}}
                />
              </div>
              <div className='card-body'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='mt-3'>
                    <div className='form-group'>
                      <input
                        name='email'
                        ref={register({
                          required: true,
                          pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        })}
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        placeholder='E-mail'
                        onChange={handleChange}
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <p>E-mail is required</p>
                      )}
                      {errors.email && errors.email.type === 'pattern' && (
                        <p>Email is not valid</p>
                      )}
                    </div>
                    <div className='form-group pass-wrapper'>
                      <input
                        name='password'
                        ref={register({required: true})}
                        type={passwordShown ? 'text' : 'password'}
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Password'
                        onChange={handleChange}
                        style={{position: 'relative'}}
                      />
                      {passwordShown ? (
                        <p className='eye_pass'>
                          {' '}
                          <FaEye onClick={togglePasswordVisibility} />
                        </p>
                      ) : (
                        <p className='eye_pass'>
                          {' '}
                          <FaEyeSlash onClick={togglePasswordVisibility} />
                        </p>
                      )}
                      {errors.password &&
                        errors.password.type === 'required' && (
                          <p>Password is required</p>
                        )}
                    </div>
                  </div>
                  <div className='pt-4'>
                    <button
                      type='submit'
                      className='btn btn-primary btn-block rounded-0'
                    >
                      Log in
                    </button>
                    <div className='d-flex justify-content-center py-2'>
                      <Link href='/users/reset-pass'>
                        <a>
                          {' '}
                          <small>Forgot Password?</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .eye_pass {
          position: absolute;
          top: 61.5%;
          right: 16%;
        }

        .eye_pass:hover {
          color: #f39c12;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
