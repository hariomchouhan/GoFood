import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.js';
import Navigation from '../components/Navigation';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate = useNavigate();
  const onChange = async (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:6700/loginuser', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password
      })
    })
    const json = await response.json();
    console.log(json);

    if (json.error) {
      alert("Enter valid credentials");
    }
    else {
      localStorage.setItem("token", json.token);
      console.log(localStorage.getItem("token"));
      navigate('/');
    }
  }
  return (
    <div>
      <Navigation></Navigation>

      <div className='container m-4'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
          </div>

          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/signup" className='m-3 btn btn-danger'>SignUp</Link>
        </form>
      </div>

      <Footer></Footer>
    </div>
  )
}
