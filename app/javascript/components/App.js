import React from "react"
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Greeting from "./Greeting";

class App extends React.Component {
  render () {
    return (
      <Router>
       <Routes>
         <Route exact path="/">
          <Greeting greeting={"friend"}/>
         </Route>
       </Routes>
      </Router>
    );
  }
}

export default App

