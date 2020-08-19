import React, { Component } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import SideNav from "./components/sideNav/sideNav";
import "bootstrap/js/src/collapse.js";
import 'semantic-ui-css/semantic.min.css'
import MainPage from './pages/mainPage/mainPage'



class App extends Component {


  render() {
    return (
      <div className="App">
        <SideNav />
        <MainPage  />
      </div>
    );
  }
}

export default App;
