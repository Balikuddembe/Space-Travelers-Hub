/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Images/planet.png';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="LogoContainer">
        <img className="planet" src={Logo} alt="" />
        <h1>Space Traverlers Hub</h1>
      </div>
      <div className="NavLinks">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>Rockets</NavLink>
        <NavLink to="./Missions" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>Missions</NavLink>
        <NavLink to="./MyProfile" end className={({ isActive }) => (isActive ? 'currentPage' : undefined)}>My Profile</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
