import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import HomeCard from './components/Homecard';

function App() {
  return (
    <div className="App">
       <Switch>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/cuisine">
           <Cuisine />
         </Route>
         <Route path="/">
           <Home />
         </Route>
</Switch>
    </div>
  );
}

export default App;
