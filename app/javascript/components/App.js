import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Greeting from "./Greeting";

const App = () => {
    return (
      <Router>
       <Switch>
       <Route exact path="/">
          <h1>Welcome !!</h1>
       </Route>
        <Route exact path="/hello">
          <Greeting greeting={"friend"}/>
        </Route>
       </Switch>
      </Router>
    );
}

export default App

