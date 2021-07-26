import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand">My Portfolio</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" >Resume</a>
                    </li>
                    <li className={`nav-link ${contactSelected && 'navActive'}`} >
                    <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;