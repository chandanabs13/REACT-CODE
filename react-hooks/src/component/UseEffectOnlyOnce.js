import React,{useState,useEffect} from 'react'

function UseEffectOnlyOnce() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)
    const mousePosition = (e) => {
        console.log('mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect used')
        window.addEventListener('mousemove',mousePosition)
    },[])
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default UseEffectOnlyOnce;
