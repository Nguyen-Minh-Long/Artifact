import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Cryo from './Elements/Cryo';
import Pyro from './Elements/Pyro';
import Electro from './Elements/Electro/';
import Hydro from './Elements/Hydro';
import Anemo from './Elements/Anemo';
import Geo from './Elements/Geo';
import Dendro from './Elements/Dendro';
import Other from './Elements/Other';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Cryo/>
        </Route>
        <Route path="/pyro" exact>
          <Pyro/>
        </Route>
        <Route path="/electro" exact>
          <Electro/>
        </Route>
        <Route path="/hydro" exact>
          <Hydro />
        </Route>
        <Route path="/anemo" exact>
          <Anemo />
        </Route>
        <Route path="/geo" exact>
          <Geo />
        </Route>
        <Route path="/dendro" exact>
          <Dendro />
        </Route>
        <Route path="/other" exact>
          <Other />
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
   </Router>
  );
}

export default App;