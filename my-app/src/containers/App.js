import React, {Component} from 'react';
import '../assets/css/App.css'
import Login from './Login'
import MyNavbar from '../components/MyNavbar'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  render(){
    return (
      <>
      <MyNavbar/>
      <Login></Login>
      </>
    );
  }
}

export default App;
