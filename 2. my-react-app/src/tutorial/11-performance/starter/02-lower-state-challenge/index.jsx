import { useState } from 'react'
import { data } from '../../../../data'
import List from './List'
import AddPeople from './AddPeople'

const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data)
  const addPerson = (name) => {
    const fakeId = Date.now()
    const newPerson = { id: fakeId, name }
    setPeople((prevValue) => {
      return [...prevValue, newPerson]
    })
  }
  return (
    <section>
      <AddPeople addPerson={addPerson} />
      <List people={people} />
    </section>
  )
}
export default LowerStateChallenge
