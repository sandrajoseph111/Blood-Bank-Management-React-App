import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow"
        style={{
          background: "linear-gradient(90deg, #b71c1c, #e53935)",
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            🩸 Blood Bank Management
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              

              <a className="nav-link mx-2" href="/">
                Add Donor
              </a>

              <a className="nav-link mx-2" href="/vi">
                View Donor
              </a>

              <a
                className="btn btn-light text-danger fw-bold ms-3 px-3"
                href="#"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar