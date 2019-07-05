import React, {Component} from 'react';
import '../assets/css/App.css'
import MyNavbar from '../components/MyNavbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render(){
    return (
      <div>
      <MyNavbar/>
      </div>
    );
  }
}

export default App;
