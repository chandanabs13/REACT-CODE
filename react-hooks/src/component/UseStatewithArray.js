import React,{useState} from 'react'

function UseStatewithArray() {
    const [items, setitems] = useState([])
    const Add_Number = () => {
        setitems([...items,
        {
            id : items.length,
            value : Math.floor(Math.random() * 10)+1
        }])
    }
  return (
    <div>
      <button onClick={Add_Number}>Add Random Number</button>
      <ul>
        {
            items.map(item => (<li key={item.id}>{item.value}</li>))
        }
      </ul>
    </div>
  )
}

export default UseStatewithArray
