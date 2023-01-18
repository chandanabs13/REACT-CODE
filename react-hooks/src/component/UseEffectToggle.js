import React,{useState} from 'react'
import UseEffectWithCleanUp from './UseEffectWithCleanUp'

function UseEffectToggle() {
    const [display, setdisplay] = useState(true)
  return (
    <div>
        {/* display initially true if we click on toggle button it shouuld not work so opposite to display means not of display */}
      <button onClick={()=>setdisplay(!display)}>Toggle display</button>
      {display && <UseEffectWithCleanUp/>}
    </div>
  )
}

export default UseEffectToggle;
