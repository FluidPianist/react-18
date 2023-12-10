import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [people, setPeople] = useState(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    people.push({ id: data.length + 1, name: name })
    setPeople(people)
    setName('')
  }

  const removeUser = (id) => {
    const updatedUsers = people.filter((person) => person.id !== id)
    setPeople(updatedUsers)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              className="btn"
              type="button"
              onClick={() => removeUser(person.id)}
            >
              Remove User
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
