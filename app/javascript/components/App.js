import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import configureStore from "../configureStore";
const store = configureStore();

console.log(store)
const App = () => {
    return (
      <Provider store={store}>
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
      </Provider>
    );
}

export default App

