'use client';

import Image from 'next/image';
import React, { useState,useEffect } from 'react';
import './Login.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Preloader from '@/components/Preloader';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  if (loading) return <Preloader />;
  return (
        <div className="auth-container">
          <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
            <div className="form sign-in">
              <h2>Welcome</h2>
              <label>
                <span>Email</span>
                <input type="email" />
              </label>
              <label>
                <span>Password</span>
                <input type="password" />
              </label>
              <p className="forgot-pass">Forgot password?</p>
              <button type="button" className="submit">
                Sign In
              </button>
            </div>
    
            <div className="sub-cont">
              <div className="img">
                <div className={`img__text m--up ${isSignUp ? '' : 'active'}`}>
                  <h3>Dont have an account? Please Sign up!</h3>
                </div>
                <div className={`img__text m--in ${isSignUp ? 'active' : ''}`}>
                  <h3>If you already have an account, just sign in.</h3>
                </div>
                <div className="img relative w-full h-64"> 
                <Image
                  src="/images/logo/dl_black_icon.png" 
                  alt="Dreamland Athletics"
                  fill
                  className="object-cover rounded"
                  priority
                /></div>
                <div className="img__btn" onClick={toggleForm}>
                  <span className="m--up">Sign Up</span>
                  <span className="m--in">Sign In</span>
                </div>
              </div>
    
              <div className="form sign-up">
                <h2>Create your Account</h2>
                <label>
                  <span>Name</span>
                  <input type="text" />
                </label>
                <label>
                  <span>Email</span>
                  <input type="email" />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" />
                </label>
                <button type="button" className="submit">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
export default Login;