import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue((prevValue) => {
      var newValue = prevValue
      if (prevValue === 3) newValue = 30
      else newValue = newValue + 1
      console.log(newValue) //latest value
      return newValue
    })
  }

  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha
