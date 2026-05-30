import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [username, setUsername] = useState(() => {
    const raw = localStorage.getItem('username')
    return raw ? JSON.parse(raw) : null
  })

  useEffect(() => {
    if (token) localStorage.setItem('token', token)
    else localStorage.removeItem('token')

    if (username) localStorage.setItem('username', JSON.stringify(username))
    else localStorage.removeItem('username')
  }, [token, username])

  const login = ({ token, username }) => {
    setToken(token)
    setUsername(username)
  }
  const logout = () => {
    setToken(null)
    setUsername(null)
  }

  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
