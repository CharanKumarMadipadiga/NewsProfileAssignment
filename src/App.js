import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginRoute from './components/LoginRoute'
import ProfilePage from './components/LoginRoute/ProfilePage'
import Posts from './components/LoginRoute/Posts'
import Bookmarks from './components/LoginRoute/Bookmarks'
import Settings from './components/LoginRoute/Settings'
import NotFound from './components/LoginRoute/NotFound';


import './App.css'
  

const App=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginRoute}/>
            <Route exact path="/" component={ProfilePage} />
            <Route exact path="/profile/posts" component={Posts}/>
            <Route exact path="/profile/bookmarks" component={Bookmarks}/>
            <Route exact path="/settings" component={Settings} />
            <Route  component={NotFound} />

        </Switch>
    </BrowserRouter>
)

export default App
