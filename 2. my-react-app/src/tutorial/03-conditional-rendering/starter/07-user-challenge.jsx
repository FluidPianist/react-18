import { useState } from 'react'
const UserChallenge = () => {
  const [user, setUser] = useState(null)
  const login = () => {
    setUser({ name: 'Adeeb' })
  }
  const logout = () => {
    setUser(null)
  }
  return (
    <div>
      {user ? (
        <>
          <h3> Hello there, {user.name}</h3>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>Please Login</h3>
          <button type="button" onClick={login}>
            Log In as Adeeb
          </button>
        </>
      )}
    </div>
  )
}

export default UserChallenge
