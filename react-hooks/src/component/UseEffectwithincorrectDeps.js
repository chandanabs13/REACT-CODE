import React,{useState,useEffect} from 'react'

function UseEffectwithincorrectDeps() {
    const [count, setcount] = useState(0)
    
    const tick = () => {
        setcount(prevcount => prevcount+1)
    }

    useEffect(()=> {
         const interval = setInterval(tick,1000)

         return () => {
            clearInterval(interval)
         }
    },[count])
  return (
    <div>
      Count - {count}
    </div>
  )
}

export default UseEffectwithincorrectDeps;
