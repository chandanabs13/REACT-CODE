// import logo from './logo.svg';
import './App.css';
// import UseState from '../component/usestate-hook';
import UseStateHook from './component/UseStateHook';
import UseStateWithPreviousState from './component/UseStateWithPreviousState';
import UseStateWithObjects from './component/UseStateWithObjects';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseStateWithPreviousState />
      <UseStateWithObjects />

    </div>
  );
}

export default App;
