export interface User {
  name: string
  id: number
}

export interface State {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<string>>
}

export interface Item {
  id: number
  name: string
  price: number
  imgUrl: string
}
