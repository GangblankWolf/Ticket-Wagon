import * as React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import StartPage from './start-page/StartPage';
import Login from './login/Login';
import Search from './search/Search';
import SignUp from './signup/SignUp';
import EventCard from './event-card/EventCard';
import CreateEvent from './create-event/CreateEvent';
import Calendar from './calendar/Calendar';

function Router() {
   return(
      <BrowserRouter>
         <Routes>
            {/*Available to everyone */}
            <Route exact path="/home" element={<StartPage/>}/>
              
            <Route path="/login" element={<Login/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/search/:id" element={<EventCard/>} />

            {/*Only available after signing in to an active account*/}
            {/*If user is authenticated 
            <Route path="/home" element={<Navigate replace to="/calendar"/>}/>
            */}
            <Route path="/create" element={<CreateEvent/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/calendar/:id" element={<EventCard/>} />

         </Routes>
      </BrowserRouter>
   )
}

export default Router;