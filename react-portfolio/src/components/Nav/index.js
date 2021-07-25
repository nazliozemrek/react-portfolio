
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function Nav (){
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">My Portfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" >About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" >Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" >Resume</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Nav;