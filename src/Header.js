import React from 'react'


function Header() {
  return (
    <nav className="navbar text-white navbar-expand-sm navbar-dark bg-dark py-2">
        <div className="container">
            <h2>Studenten Dashboard</h2>
            <button className="navbar-toggler btn-dark ham-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div className="navbar-toggler-icon"></div>
            </button>
        
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/Students">Studenten</a>
                </div>
            </div>
        </div>
    </nav>




    
  )
}

export default Header
