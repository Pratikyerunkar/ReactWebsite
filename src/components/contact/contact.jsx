import './contact.css';
import React, { useState , useEffect} from "react";
import {Navigation} from '../pages/navigation.js';

export const Contact =()=> {

  const  [user, setUser] = useState({
    firstName: "", lastName: "", email: "", message:""
  });

  const [records, setRecord] = useState([]);

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUser({... user, [name]: value})
  }

  const PostData = async(e)=>{
    e.preventDefault();

    const {firstName, lastName, email, message} = user;

    const res = await fetch ('http://localhost:5000/submitData',{
      method: "POST",
      headers: {"Content-Type":"application/json", "Accept": 'application/json'},
      body: JSON.stringify({firstName, lastName, email, message})
    })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      setRecord(result);
    })
    .catch((_err)=>{
      console.log(_err, 'error')
    })
    setUser({firstName:"", lastName:"", email:"", message:""});

  }


  return(
    <div className="contact-container">
      <Navigation />
      <div className="form-container">
        <h2 style={{color: "white"}}>Contact us</h2>
        <form method="POST" >

          <div className="row">
            <div className="col-sm">
              <label htmlFor="firstName" >First Name</label>
            </div>
            <div className="col-25">
              <input type="text" autoComplete="off" className="input-field"
                value={user.firstName}
                onChange={handleInput}
                name="firstName" id="firstName" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="col-25">
              <input type="text" autoComplete="off" className="input-field"
                value={user.lastName}
                onChange={handleInput}
                name="lastName" id="lastName" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-25">
              <input type="text" autoComplete="off" className="input-field"
                value={user.email}
                onChange={handleInput}
                name="email" id="email" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm">
              <label htmlFor="message">Message</label>
            </div>
            <div className="col-25">
              <textarea type="text" autoComplete="off" className="input-field"
                value={user.message}
                onChange={handleInput}
                name="message" id="message" />
            </div>
          </div>
          <div className="row">
            <div className="submitbtn col-25">
              <input type="submit" value="Submit" className="submit-button" onClick={PostData}/>
            </div>
          </div>
        </form>
      </div>
    </div>
 )
}
