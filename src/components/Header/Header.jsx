import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg";
import { AuthContext } from "../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () =>{
    logOut()
    .then(result => {})
    .catch(error => console.log(error));
  }

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shop</Link>
        <Link to="/orders">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
        {user && <span className="text-white">Welcome {user.email} <button className="btn" onClick={handleLogOut}> Log Out</button></span>}
      </div>
    </nav>
  );
};

export default Header;
