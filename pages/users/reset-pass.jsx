import React, {useState} from 'react';
import {auth, db} from '../../config/fire-config';
import Image from 'next/image';
import {FaArrowRight} from 'react-icons/fa';
import Link from 'next/link';
import {TiArrowBackOutline} from 'react-icons/ti';
import ReactTooltip from 'react-tooltip';

export default function reset() {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    setEmail(e.target.value);
  };

  const handleClick = async e => {
    e.preventDefault();
    try {
      if (email != '') {
        await auth.sendPasswordResetEmail(email);
        window.alert('Email has been sent to you, Please check and verify.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{height: '100vh'}}
    >
      <div className='card mb-3' style={{maxWidth: 700, height: 400}}>
        <div className='row no-gutters'>
          <div className='col-md-6'>
            <Image
              src='/images/forgot-pass.jpg'
              height={400}
              width={320}
              className='rounded img-fluid'
            />
          </div>
          <div className='col-md-6'>
            <div className='card-body'>
              <h4 className='card-title font-weight-bold text-center pt-3'>
                FORGOT PASSWORD?
              </h4>
              <p className='card-text text-justify pt-3'>
                Please enter your email address below and we will send you
                information to recover your account.
              </p>
              <div className='form-group'>
                <input
                  type='email'
                  value={email}
                  placeholder='E-mail address'
                  className='form-control'
                  onChange={handleChange}
                />
              </div>
              <div className='d-flex justify-content-center'>
                {' '}
                <button
                  className='btn btn-dark mt-4 rounded-0 py-2'
                  type='submit'
                  onClick={handleClick}
                >
                  Reset Password
                  <FaArrowRight className='ml-2' style={{fontSize: 14}} />
                </button>
              </div>
              <div className='d-flex justify-content-center pt-3'>
                <Link href='/users/login'>
                  <a className='back_icon' data-tip='Go back'>
                    <TiArrowBackOutline style={{fontSize: 24}} />
                    <ReactTooltip place='right' type='warning' effect='solid' />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .back_icon {
          display: flex;
          width: 45px;
          height: 45px;
          background-color: #f1f1f1;
          color: #30313a;
          text-decoration: none;
          align-items: center;
          justify-content: center;
          border-radius: 100px;
          margin: 0 20px;
        }
      `}</style>
    </div>
  );
}
