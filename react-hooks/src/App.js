// import logo from './logo.svg';
import './App.css';
// import UseState from '../component/usestate-hook';
import UseStateHook from './component/UseStateHook';
import UseStateWithPreviousState from './component/UseStateWithPreviousState';
import UseStateWithObjects from './component/UseStateWithObjects';
import UseStatewithArray from './component/UseStatewithArray';
import UseEffectHook from './component/UseEffectHook';
import UseEffectConditionally from './component/UseEffectConditionally';
import UseEffectOnlyOnce from './component/UseEffectOnlyOnce';
import UseEffectToggle from './component/UseEffectToggle';
// import UseEffectToggle from './component/UseEffectToggle';
import UseEffectwithincorrectDeps from './component/UseEffectwithincorrectDeps';

function App() {
  return (
    <div className="App">
      <UseStateHook />
      <UseStateWithPreviousState />
      <UseStateWithObjects />
      <UseStatewithArray />
      <UseEffectHook />
      <UseEffectConditionally />
      <UseEffectOnlyOnce />
      <UseEffectToggle />
      <UseEffectwithincorrectDeps />
      
    </div>
  );
}

export default App;
