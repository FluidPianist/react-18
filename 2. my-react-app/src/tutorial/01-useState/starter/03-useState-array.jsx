import { data } from '../../../data'
import { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  const handleRemove = (id) => {
    setPeople(people.filter((people) => people.id !== id))
  }

  const handleClear = () => {
    setPeople([])
  }

  return (
    <div className="container">
      <table border="1" cellSpacing="5px">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => {
            return (
              <tr>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>
                  <button
                    className="btn"
                    type="button"
                    onClick={() => {
                      handleRemove(person.id)
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <button className="btn" type="button" onClick={handleClear}>
        Clear
      </button>
    </div>
  )
}

export default UseStateArray
