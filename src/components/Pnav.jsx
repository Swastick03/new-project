import React from 'react';
function Pnav(){
    return(
      <>
<nav class=" pnav navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <h6>Filter: All <i class="fa-solid fa-caret-down"></i></h6>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Disabled</a>
      </li>
    </ul>
  </div>
    
        <a class="post-btn btn btn-light nav-link " href="#">
        <i class="fa-solid fa-pen"></i>
        <span class="pnav-text">Write a Post</span>
        </a>
        <a class="join-btn nav-link btn btn-primary " href="#">
        <i class="fa-solid fa-right-to-bracket"></i>
        <span class="pnav-text">Join Group</span>
        </a>
        
        
</nav>
<hr className='hr '/>
</>
    );
}
export default Pnav;