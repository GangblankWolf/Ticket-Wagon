import './Navbar.css';
//This is where the tabs for all the pages go//
function Navbar() {
   return(
      <div class='nav-links'>
         <ul>
            <li><a href='/home'>Logo</a></li>
            <li class='logged-in'><a href='/calendar'>Calendar</a></li>
            <ul id='login-signup'>
            <div class='logged-out'><a id='signup' href='/signup'>Sign Up</a></div>
            <div class='logged-out'><a id='login' href='/login'>Log in</a></div>
            </ul>
         </ul>
      </div>
   )
}

export default Navbar;
