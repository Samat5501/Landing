import React from 'react';
import "./App.css";
import Content from './components/Profile/Content';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import "./index.css";
const App = () => {
  return (
    <div className="app-wrapper">
     <Header/>
      <Navbar/>
      <Content/>
    </div>
  );
}
export default App;

