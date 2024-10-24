import React from 'react'

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#">Shoptopia</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Proudcts </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cart" href="/#">
          <i className="bi bi-bag-dash"></i>
          </a>
          </li>
      </ul>
    </div>
  </div>
  </nav>
 
    </>
  )
}
