import React,{useState,useEffect} from 'react'

function UseEffectWithCleanUp() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const mousePos = (e) => {
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('useeffect used')
        window.addEventListener('mousemove',mousePos)

        return ()=>{
            window.removeEventListener('mousemove',mousePos)
        }
    }, [])
  return (
    <div>
      Hook X - {x}  Y - {y}
    </div>
  )
}

export default UseEffectWithCleanUp;
