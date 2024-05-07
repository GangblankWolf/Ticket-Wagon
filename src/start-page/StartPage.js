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
         <p id="description1">Use the serach page by radius, area, age restrictions, event type, event price, date and time ranges. And allow you to pick the event you want to attend.</p>
      </div>
      <div class="CalenderDescription"></div>
      </div>
   )
}

export default StartPage;