import React from 'react';
import "./App.css";
import Content from './components/Profile/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import { Setting } from './components/Settings/Settings';

const App = (props) => {
  const data = new Date();
  console.log(data);
  const name = "Dialogs";
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header />
      <Navbar me= {name}/>
      <div className='app-content-wrapper'>
          <Route path='/dialogs' component={Dialogs }/>
          <Route path='/profile' component={Content} />
          <Route path='/music' component={Music} />
          <Route path='/news' component={News} />
          <Route path='/setting' component={Setting} />
      </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

