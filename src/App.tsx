import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import InflacijaPage from './pages/InflacijaPage';
import ZaposlenostPage from './pages/ZaposlenostPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/inflation'>
          <InflacijaPage />
        </Route>
        <Route path='/'>
          <ZaposlenostPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
