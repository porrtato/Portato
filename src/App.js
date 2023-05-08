

import { SkinMainPage } from "./SkinMainPage";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AquaTheWaterGoddess from "./skinPage/AquaTheWaterGoddess";


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <SkinMainPage />
      </Route>
      <Route exact path="/AquaTheWaterGoddess">
        <AquaTheWaterGoddess />
      </Route>
    </Switch>
    </Router> 
  )
}

export default App;
