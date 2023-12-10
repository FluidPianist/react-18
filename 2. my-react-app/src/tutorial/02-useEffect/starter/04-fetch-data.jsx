import { useCallback, useEffect, useState } from 'react'

const url = 'https://api.github.com/users'

const FetchData = () => {
  const [users, setUser] = useState([])
  const [count, setCount] = useState(0)

  const fetchData = useCallback(async () => {
    var resp = await fetch(url)
    var data = await resp.json()
    setUser(data)
  }, [count]) //count changes => fetchData is re-rendered

  useEffect(() => {
    console.log('UseEffect is running')
    fetchData()
  }, [fetchData]) //if fetchData changes => useEffect runs

  return (
    <section>
      <button className="btn m-2" onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
export default FetchData
