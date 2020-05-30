import React from "react";
// import Logo from "../../assets/family.jpg"


export default function About(){
    return (
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
                <a className="nav-link" href="/"
                  >About <span className="sr-only">(current)</span></a
                >
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/contacts"
                  >Contact <span className="sr-only">(current)</span></a
                >
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/portfolio"
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
        <div className="row">
          <div className="col-sm-12">
            <h2>About Me</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img id="bio-image" src="/assets/images/Family.jpg" style={{width:"100%"}}/>
          </div>
          <div className="col-sm-8">
            <p>
              I am a soon to be father looking for a change in career where I can
              be there for my family without missing too many life events. I
              currently work in a fine dining restaurant as a server. I graduated
              college with a Hotel Restaurant Management Degree and it is time for
              a change.
            </p>
            <br />
            <p>
              I love to travel and try hole in the wall restaurants. I also ask
              locals for recommendations on where they would go to eat. I'm all
              for being a tourist and trying out popular places, but I also love
              putting myself in the local's shoes. I once went to San Francisco on
              Spring Break to visit some friends. I was on a very tight budget.
              One of my classmates dragged us on our first night to Hard Rock
              Cafe, a pretty well known chain and kind of new to me. We had a bad
              experience and I spent half of my budget on the first night. The
              rest of the trip I had to ration out my money and find cheap and
              good restaurants to eat at. I discovered Ike's sandwiches and El
              Favarito. Both delicious and iconic spots to eat in San Francisco.
              On a different occasion, I was visiting my cousin in New York where
              he took me to an underground restaurant that served hot dogs and the
              next room was a bar with a game room. I honestly would have never
              found it myself. Since then, I've made it a point ask the locals
              where they would go to eat. That lead to a very fun night.
            </p>
          </div>
  
          <div className="col-sm-12">
            <p>
              I am originally from Los Angeles, California. I lived in New York
              and San Francisco in my past. I've visited many states in the east
              coast and have many more states on my bucket list. I've traveled
              recently to Thailand, Laos, China and Japan. I've definitely been
              bit by the travel bug. I would love to go to South America next. You
              learn so much from traveling. You learn so much about people you
              travel with and people you meet. Theres a whole world out there, why
              not check it out. You only live once right?
            </p>
          </div>
        </div>
      </div>
    )
}

