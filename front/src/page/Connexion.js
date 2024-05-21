import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/connexion_style.css"
import {fetchUserData} from '../redux/action';
import { setUserToken } from '../redux/reducers';
import { useNavigate } from 'react-router-dom';
import ErrorValidation from '../components/ErrorValidation.js';
import ErrorType from './ErrorType.js';

function Connexion(){
    
const [username, setUsername] = useState('tony@stark.com');
const [password, setPassword] = useState('password123');
//const [LoginSuccess, setLoginSuccess] = useState(false);
const [error, setError] = useState(null); 
const [isLoading, setIsLoading] = useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();


const handleLogin = async (e) => {
    e.preventDefault();
        try {
            setIsLoading(true);
            const data = await fetchUserData(username, password);
            dispatch(setUserToken(data.body.token));
            setError(null);
            //setLoginSuccess(true);
            navigate('/AccountPage');
          } catch (error) {
            setError(error.message); 
        } finally {
            setIsLoading(false);
        }
    };
    
    return(
        <div>
            <Header/>
            {isLoading && <p>Loading...</p>}
            {error && <ErrorType status={error} />} 
           
            <div className="main-connexion">
                <div className="bg-dark">
                    <div className="flex-content">
                        <div className="sign-in-content">
                            <div className="content-title">
                                <i className="fa fa-user-circle sign-in-icon"></i>
                                <h2>Sign In</h2>
                            </div>
                            <form>
                                <div className="input-wrapper">
                                    <span className='error-validation'>{error && <ErrorValidation error={error} />}</span>
                                    <label htmlFor="username" className="label-title">Username</label>
                                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="space-label" />
                                </div>
                                <div className="input-wrapper">
                                    <label htmlFor="password" className="label-title">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="space-label" />
                                </div>
                                <div className="input-remember">
                                    <input type="checkbox" id="remember-me" />
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                                <button className={`sign-in-button`} onClick={handleLogin}>
                                    <span className="text-button">Sign In</span>
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
                </div>
            </div>
        )
    }
    
    
    export default Connexion 