import React,{useState,useEffect} from 'react'

function UseEffectHook() {
    const [Count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${Count} times`
    })
  return (
    <div>
      <button onClick={() => setCount(Count+1)}>Count {Count}</button>
    </div>
  )
}

export default UseEffectHook;
