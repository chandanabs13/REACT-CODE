import React,{Component} from 'react';
import Greet from '../../functional_component/src/component/Greet';
// import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet />;
      </div>
    );
  }
  
}

export default App;
