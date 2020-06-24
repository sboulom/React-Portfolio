import React from 'react'

function NavBar() {
  return (
    <div className='NavBar'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          Steven Boulom
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='/'>
                About <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='/contacts'>
                Contact <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='/portfolio'>
                Portfolio <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='https://github.com/sboulom'>
                Git Hub <span className='sr-only'>(current)</span>
              </a>
            </li>

            <li className='nav-item active'>
              <a
                className='nav-link'
                href='https://www.linkedin.com/in/steven-boulom-4a2384110/'
              >
                Linked In <span className='sr-only'>(current)</span>
              </a>
            </li>
            <br />
            <li className='nav-item active'>
              <a className='nav-link' href="https://bit.ly/2ZvVsIj">
                Resume <span className='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
