import * as React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import StartPage from './start-page/StartPage';
import Login from './login/Login';
import SignUp from './signup/SignUp';
import EventCard from './event-card/EventCard';
import Calendar from './calendar/Calendar';

function Router() {
   return(
      <BrowserRouter>
         <Routes>
            {/*Available to everyone */}
            <Route exact path="/" element={<Navigate replace to="/home"/>}/>
            <Route path="/home" element={<StartPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>} />

            {/*Only available after signing in to an active account*/}
            {/*If user is authenticated 
            <Route path="/home" element={<Navigate replace to="/calendar"/>}/>
            */}
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/calendar/:id" element={<EventCard/>} />

         </Routes>
      </BrowserRouter>
   )
}

export default Router;