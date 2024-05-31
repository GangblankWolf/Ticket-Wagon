import { Calendar } from '@fullcalendar/core/index.js';
import './Navbar.css';
//This is where the tabs for all the pages go//

function isLoggedIn() {
   return localStorage.getItem('loggedIn') === 'true';
}

function updateUI() {
   const loginButton = document.getElementById('login-button');
   const signupButton = document.getElementById('signup-button');
   const logoutButton = document.getElementById('logout-button');
   const specialButton = document.getElementById('special-button');

   if (isLoggedIn()) {
       loginButton.classList.add('hidden');
       signupButton.classList.add('hidden');
       logoutButton.classList.remove('hidden');
       specialButton.classList.remove('hidden');
   } else {
       loginButton.classList.remove('hidden');
       signupButton.classList.remove('hidden');
       logoutButton.classList.add('hidden');
       specialButton.classList.add('hidden');
   }
}


function Navbar() {
   return(
      <div class='nav-links'>
         <ul>
            <li><a href='/home'>Logo</a></li>
            <li class='hidden' id='Calendar'><a href='/calendar'>Calendar</a></li>
            <ul id='login-signup'>
            <button><a id='signup' href='/signup'>Sign Up</a></button>
            <button><a id='login' href='/login'>Log in</a></button>
            <button class='hidden'>Log Out</button>
            </ul>
         </ul>
      </div>
   )
}

export default Navbar;
