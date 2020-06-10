import React from "react"

export default function Contacts(){
  return(
    <div className="container">
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
