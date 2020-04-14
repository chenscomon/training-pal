import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Activities from './components/Activities';
import PNav from './components/PNav';
import LangContextProvider from './context/LangContext';
import About from './components/About';
import Movement from './atoms/Movement';
import MartialArts from './atoms/MartialArts';


function App() {
  return (
    <LangContextProvider>
      <BrowserRouter>
        <div className="App">
        <PNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/activities" component={Activities} />
          <Route path="/Movement" component={Movement} />
          <Route path="/martialarts" component={MartialArts} />
        </Switch>
        </div>
      </BrowserRouter>
    </LangContextProvider>
  );
}

export default App;
