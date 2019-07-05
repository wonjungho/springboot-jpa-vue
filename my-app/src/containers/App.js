import React, {Component} from 'react';
import './App.css'
import Hello from '../components/Hello'
import MyNavbar from '../components/MyNavbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <>
      <MyNavbar></MyNavbar>
        <Hello name='길동'></Hello>
    </>
    );
  }
}

export default App;
