import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Generate Recipe App </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <NavLink className="nav-item nav-link " to="/">View Recipe</NavLink>
          <NavLink className="nav-item nav-link" to="/recipes">Create Recipe</NavLink>
     
    </div>
  </div>
</nav>

    
       </div>
    );
}
 
export default Navigation;