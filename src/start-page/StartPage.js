import './StartPage.css';
//This is the start page. It is the landing route for anyone not signed in yet.//
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
      <div class="SearchDescription">
         <h1 id="Title">Search in your area</h1>
         <p>Use the serach page by radius, area, age restrictions, event type, event price, date and time ranges. And allow you to pick the event you want to attend.</p>
      </div>
      <div class="CalenderDescription">
         <h1 id='caltitle'>Manage your events schedule</h1>
         <p>The Calender page lets you see and manage your events. See the area time and date, for the whole year.</p>
      </div>
      <div class='Events'>
         <h1 id='EVTitle'>Personized List</h1>
         <p>If instead of a calander you are able to see a list of your events. Manage your events, listed by date and time.</p>
      </div>
      </div>
   )
}

export default StartPage;