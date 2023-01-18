import React,{useState} from 'react'

function UseStateWithPreviousState() {
    const initial=0;
    const [Count, setCount] = useState(initial)
    const IncrementFive = () => {
        for(let i=1;i<=5;i++){
            // setCount(Count+1)  this wont worn 1 2 3 like this it will show internally 1 1 1 1 1 will print 5 times
            // 2 2 2 2 2   3 3 3 3 3 like this the numbers will print but i need 5 10 15 20 like thi so
            // use previous value here
            setCount(prevVal => prevVal+1)

            //similarly for 1 increment and decrement use the same 
        }
    }
  return (
    <div>
      COUNT : {Count}
      <button onClick={()=>setCount(prevVal => prevVal+1)}>Increment</button>
      <button onClick={()=>setCount(prevVal => prevVal-1)}>Decrement</button>
      <button onClick={()=>setCount(initial)}>Reset</button>
      <button onClick={IncrementFive}>Increment 5</button>
    </div>
  )
}

export default UseStateWithPreviousState;
