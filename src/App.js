
import GoogleBtn from './GoogleBtn';

import React from 'react'

import { Route, Switch } from 'react-router-dom'

// We will create these two pages in a moment

import HomePage from './pages/HomePage'

import UserPage from './pages/UserPage'

export default function App() {

  return (

    <Switch>

      <Route exact path="/" component={HomePage} />

      <Route path="/:id" component={UserPage} />

    </Switch>

  )

}
function app() {
  return (
    <div>
      ...
      <GoogleBtn/>
    </div>
  );
}

