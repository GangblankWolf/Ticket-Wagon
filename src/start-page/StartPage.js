import './StartPage.css';
//This is the start page. It is the landing route for anyone not signed in yet.//
//Note: Some of the descriptions are from the original Ticket Wagon idea. Same with the CSS file.//
function StartPage() {
   return(
      <div>
      <div class="Container1">
         <div class="textposition">
        <h1 id="whatif">What IF...</h1>
        <h2>You could have your events all in one place...</h2>
        <h4>Well we came prepared!</h4>
        </div>
      </div>
      <div class='textcontainer'>
      <div class="SearchDescription">
         <h1 id="Title">Search in your area</h1>
         <p>Use the serach page by radius, area, age restrictions, event type, event price, date and time ranges. And allow you to pick the event you want to attend.</p>
      </div>

    <div class="CalendarDescription">
         <h1 id='caltitle'>Manage your events schedule</h1>
         <p id='calparacontainer'>The Calendar page lets you see and manage your events. See the area time and date, for the whole year with just one click! No need for the hard to use and uninteresting calendar, when you can have a simple, easy to use, no hassle calendar, with no extra fees. That's right it's free! and you can enjoy it by signing up and logging in. It's just that effortless!</p>
      </div>

      <div class='Events'>
         <h1 id='EVTitle'>Personized List</h1>
         <p>If instead of a calander you are able to see a list of your events. Manage your events, listed by date and time.</p>
      </div>
      </div>
      </div>
   )
}

export default StartPage;