import React from 'react';
import "./Home.css";

function Homepage() {

  return(
    <div className="container">
     <header>
      <h1> Welcome to My Homepage</h1>
      <p> This is my first Homepage </p>
</header>
<nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav> 

    </div>
  )
}
export default Homepage;