import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <div className="header container-fluid bg-light d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="fs-5 fw-light text-center mb-4">{title}</h1>
      </div>
    </div>
  )
}

export default Header;