import React from 'react'
// import {render} from 'react-dom'

function HOC() {
    const isLoggedIn = false
    const HOC = ({anotherComp}) => {
        if(isLoggedIn){
            return <anotherComp/>
        }
        return <div>please login !</div>
    }

    const sample = () => <div>
        any sample component
    </div>
  return (
    <div>
      <HOC anotherComp = {sample}/>
    </div>
  )
}

export default HOC
