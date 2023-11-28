import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Starter from './tutorial/02-useEffect/starter/05-cleanup-function.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Starter />
    </div>
  )
}

export default App
