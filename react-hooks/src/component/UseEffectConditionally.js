import React,{useState,useEffect} from 'react'

function UseEffectConditionally() {
    const [Count, setCount] = useState(0)
    const [name,setname] = useState('')
    useEffect(()=>{
        console.log('use effect updating document')
        document.title=`You Clicked ${Count} Times`
    },[Count])
  return (
    <div>
        <input
        type='text'
        value={name}
        onChange={e => setname(e.target.value)}/>
      <button onClick={() => setCount(Count+1)}>Count {Count}</button>
    </div>
  )
}

export default UseEffectConditionally;
