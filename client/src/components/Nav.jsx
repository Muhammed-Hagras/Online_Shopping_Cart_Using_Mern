import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadUser, logoutUser } from "../store/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Nav = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cartReducer);
  

  const dispatch = useDispatch();

  const  { isAdmin,_id } = useSelector((state) => state.authReducer);
  // console.log({isAdmin,_id })

  return (
    <nav className="nav-bar shadow sticky-top">
      <NavLink to="/">
        <h2>HagrasShop</h2>
      </NavLink>
      <div className="rest-links d-flex gap-3">
      <NavLink to="/products">
        <h4>Products</h4>
      </NavLink>
      <NavLink to="/about">
        <h4>About</h4>
      </NavLink>
      <NavLink to="/contact">
        <h4>Contact</h4>
      </NavLink>
      </div>
      
      {_id ? (
        <div className="logged-links d-flex gap-3">
        {
          isAdmin? (
            <NavLink to="/admin/summary"
            className="text-white fw-bold fs-5 "
            >Admin</NavLink>)
            : null
        }
          <div
            onClick={() => {
              dispatch(logoutUser(null));
              toast.warning("Logged out!", { position: "bottom-left" });
            }}
            className="text-white fw-bold fs-5 logut-btn"
          >
            Logout
          </div>
          <NavLink to="/cart">
        <div className="nav-cart me-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span className="cart-count">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </NavLink>
        </div>
      ) : (
        <div className="authlinks d-flex justify-content-between gap-5">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/cart">
        <div className="nav-cart me-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart4"
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          <span className="cart-count">
            <span>{cartTotalQuantity}</span>
          </span>
        </div>
      </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;

// 