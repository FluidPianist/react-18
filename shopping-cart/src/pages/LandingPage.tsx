import { Button } from 'react-bootstrap'
import { User, State } from '../interface'

const LandingPage = (props: State) => {
  const { setUser, setError, setLoading } = props

  const onLogin = (userval: User) => {
    // console.log(userval)
    setLoading(true)
    setTimeout(() => {
      setUser(userval)
      setLoading(false)
    }, 500)
  }

  return (
    <div>
      Please Login
      <Button onClick={() => onLogin({ name: 'Adeeb', id: 1 })}>
        Login as Adeeb
      </Button>
    </div>
  )
}
export default LandingPage
