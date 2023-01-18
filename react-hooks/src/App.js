// import logo from './logo.svg';
import './App.css';
// import UseState from '../component/usestate-hook';
import UseStateHook from './component/UseStateHook';
import UseStateWithPreviousState from './component/UseStateWithPreviousState';
import UseStateWithObjects from './component/UseStateWithObjects';
import UseStatewithArray from './component/UseStatewithArray';
import UseEffectHook from './component/UseEffectHook';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseStateWithPreviousState />
      <UseStateWithObjects />
      <UseStatewithArray />
      <UseEffectHook />
    </div>
  );
}

export default App;
