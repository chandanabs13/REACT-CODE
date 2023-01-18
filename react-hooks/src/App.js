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
// import UseEffectwithincorrectDeps from './component/UseEffectwithincorrectDeps';
import UseEffectFetchingData1 from './component/UseEffectFetchingData1';

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
      {/* <UseEffectwithincorrectDeps /> */}
      <UseEffectFetchingData1 />
      
    </div>
  );
}

export default App;
