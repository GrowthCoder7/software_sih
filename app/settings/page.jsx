"use client"
import React, { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    profilePicture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Submit logic here
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      phone: "",
      profilePicture: null,
    });
  };

  return (
    <div>
    <Navbar/>
    <div className="settings-container h-screen">
      <aside>
        <h2>Settings</h2>
        <ul>
          <li>Account Setting</li>
          <li>Add new Users</li>
          <li>Transfer Control</li>
        </ul>
      </aside>

      <main>
        <h2>Account Settings</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="profile-picture">
            <label htmlFor="profilePicture">Upload your photo</label>
            <input type="file" id="profilePicture" onChange={handleFileChange} />
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Please enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Please enter your email"
            />
          </div>

          <div className="input-group">
            <label>New Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Please enter your new password"
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+1 Please enter your phone number"
            />
          </div>

          <div className="buttons">
            <button type="submit" className="update-button">Update Profile</button>
            <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
          </div>
        </form>
      </main>
    </div>
    </div>
  );
}

export default App;
