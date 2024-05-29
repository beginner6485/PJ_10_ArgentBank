import "../style/account_style.css"
import HeaderConnected from "../components/HeaderConnected.js"
import Footer from "../components/Footer"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUserFirstName } from "../redux/reducers.js";
import ErrorType from "./ErrorType.js";

function AccountPage(){
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);
  const [firstName, setFirstName] = useState(useSelector(state => state.firstName ));
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        if (token) {
          const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method:'POST', 
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          
          const profileData = await response.json();
          dispatch(setUserFirstName(profileData.body.firstName))
        }
      } catch (error) {
        console.error('Error fetching user token:', error);
      }
    }
    fetchData();
  }, [dispatch, token]);

  if (!token) {
    return (
        <ErrorType />
    );
  }
  
  async function modifyUserInfo(firstName, lastName){
    try {  

      if (!firstName && !lastName) {
        throw new Error('First name and last name are required');
      }

      const newData = {firstName, lastName};

      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(newData)
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const data = await response.json();
      dispatch(setUserFirstName(newData.firstName))
      return data;
    } 
    catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
};
  
  function handleSave(){
    if(firstName || lastName){
      modifyUserInfo(firstName, lastName)

    }
  }
  function handleCancel() {
      setFirstName('');
      setLastName('');
      
      // Effacer le contenu des champs d'entrée
      const inputUsers = document.querySelectorAll('.inputUser');
      inputUsers.forEach(input => {
        input.value = '';
      });
  }
  return(
    <div>
      <HeaderConnected />
      <div className="bg-dark">
        <div className="header-space">
          <div className="title">Welcome back</div>
          <div className="space-text">
            <input type="text" placeholder="prénom" className="inputUser" onChange ={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="nom" className="inputUser" onChange ={(e) => setLastName(e.target.value)} />
          </div>
          <div className="edit-name">
            <button 
            className="transaction-button edit" 
            onClick={handleSave}>
              <span>Save</span>
            </button>
            <button 
            className="transaction-button edit" 
            onClick={handleCancel}>
              <span>Cancel</span>
            </button>
          </div>
        </div>
            <div className="account-space">
                <section className="account">
                  <div className="account-content-box">
                    <p className="account-title">Argent Bank Checking (x8349)</p>
                    <p className="account-amount">$2,082.79</p>
                    <p className="account-amount-description">Available Balance</p>
                  </div>
                  <div className="account-content-btn">
                    <button className="transaction-button">View transactions</button>
                  </div>
                </section>
                <section className="account">
                  <div className="account-content-box">
                    <p className="account-title">Argent Bank Savings (x6712)</p>
                    <p className="account-amount">$10,928.42</p>
                    <p className="account-amount-description">Available Balance</p>
                  </div>
                  <div className="account-content-btn">
                    <button className="transaction-button">View transactions</button>
                  </div>
                </section>
                <section className="account">
                  <div className="account-content-box">
                    <p className="account-title">Argent Bank Credit Card (x8349)</p>
                    <p className="account-amount">$184.30</p>
                    <p className="account-amount-description">Current Balance</p>
                  </div>
                  <div className="account-content-btn">
                    <button className="transaction-button">View transactions</button>
                  </div>
                </section>
              </div>
          </div>
        <Footer/>
    </div>
)
}


export default AccountPage