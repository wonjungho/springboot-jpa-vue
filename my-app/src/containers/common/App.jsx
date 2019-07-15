import React, {Component} from 'react';
import '../../assets/css/App.css'
import MyNavbar from '../../components/MyNavbar.jsx'




class App extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="wrapper">
      <MyNavbar/>
      </div>
    );
  }
}

export default App;
