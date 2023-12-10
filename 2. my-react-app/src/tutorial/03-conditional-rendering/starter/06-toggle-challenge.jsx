import { useState } from 'react'

const ToggleChallenge = () => {
  const [bool, setBool] = useState(false)
  return (
    <>
      {bool && <h3>hey there</h3>}
      {
        <button type="button" onClick={() => setBool(!bool)}>
          {(bool && 'Bye') || 'say Hi !!'}
        </button>
      }
    </>
  )
}

export default ToggleChallenge
