import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <div className="header container-fluid bg-light d-flex justify-content-center align-items-center">
      <div className="container">
        <h1 className="fs-5 fw-light ml-5 mb-4 text-start">{title}</h1>
      </div>
    </div>
  )
}

export default Header;