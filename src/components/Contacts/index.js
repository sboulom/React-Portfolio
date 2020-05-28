import React from "react"

export default function Contacts(){
  return(
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Steven Boulom</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="./index.html"
                >About <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="./contact.html"
                >Contact <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="./portfolio.html"
                >Portfolio <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/sboulom"
                >Git Hub <span className="sr-only">(current)</span></a
              >
            </li>

            <li className="nav-item active">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/steven-boulom-4a2384110/"
                >Linked In <span className="sr-only">(current)</span></a
              >
            </li>
            <br />
            <li className="nav-item active">
              <a className="nav-link" href="Steven Boulom's Resume.pdf"
                >Resume <span className="sr-only">(current)</span></a
              >
            </li>
          </ul>
        </div>
      </nav>
      <form action= "mailto:sboulom@gmail.com">
        <h2>Contact</h2>
        <hr />
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Message</label>
          <input
            type="message"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )}
