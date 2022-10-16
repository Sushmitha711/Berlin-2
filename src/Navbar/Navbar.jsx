import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar navbar-dark expands-lg'>
            <h1 className='text-white'><i class="fa-solid fa-motorcycle"></i>Police Department of Berlin</h1>
          <div className='ml-auto'>
          <ul className='navbar nav'>
                <li><h4 className='text-white mr-3 '>Stolen Bikes</h4></li>
                <li><h4 className='mr-3' ><input type="button" value="Login"/></h4></li>
                <li><h4><input type="button" value="Registration"/></h4></li>
            </ul>
          </div>
          
        </div>
    );
}

export default Navbar;
