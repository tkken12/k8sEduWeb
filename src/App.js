import { Router, Route, Switch } from "react-router-dom";
import "./App.css"
import routePath from "route/routPath";

const getRoutes = () => { 
  routePath.map( route => {
    if ( !!route["route"] !== false ) {
      return (
        <Route exact path={route["route"]} component={ route["component"]} key={route["key"]} />
      )
    } 
      return null
    
  })
}

const App = () => {
  return (
    <Router>
      <Switch>
        { getRoutes() }
      </Switch>
    </Router>
  )
}

export default App;
