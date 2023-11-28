import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h2>You clikced {count} times</h2>
      <button className="btn" type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

export default UseStateBasics
