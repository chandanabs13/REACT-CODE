import React, {Component} from 'react';
import Greet from './component/functionalcomponent';
import Welcome from './component/classcomponent';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet name='Chandana' company='Awign'/>
        <Welcome name='Chandana' />
      </div>
    );
  }
  
}

export default App;
