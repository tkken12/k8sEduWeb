import { Route, Switch } from "react-router-dom"
import routePath from "route/routPath"
import "assets/css/layout.scss"
import "./App.scss"
import Sidebar from "component/sidebar/sidebar"
import Navbar from "component/navbar/navbar"
import Footer from "component/footer/footer"

const getRoutes = () => { 
  return routePath.map( route => {
    if ( !!route["path"] !== false  ) {
      if( route["component"] !== false ) {
        return (
          <Route 
            exact path = { route["path"]      }
            component  = { route["component"] }
            key        = { route["key"]       } 
          />
        )
      }
    } 
  })
}

const App = () => {
  return (
    <div className="layout">
      <Navbar /> 
      <Sidebar />
      <Switch>
        <div className="main-layout">
          { getRoutes() }
        </div>
      </Switch>
      <Footer />
      
    </div>

  )
}

export default App;
