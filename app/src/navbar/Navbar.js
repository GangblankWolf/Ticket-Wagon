import './Navbar.css';
//This is where the tabs for all the pages go//
function Navbar() {
   return(
      <div class='nav-links'>
         <ul>
            <li><a href='/home'>Logo</a></li>
            <li class='logged-in'><a href='/calendar'>Calendar</a></li>
         </ul>
         <div class='logged-out'>
            <div id='login'><a href='/login'>Log in</a></div>
            <div id='signup'><a href='/signup'>Sign Up</a></div>
            </div>
      </div>
   )
}

export default Navbar;
