import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'playmate_user'
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setUser(JSON.parse(saved))
    }
  }, [])

  const login = (payload) => {
    const profile = {
      name: payload?.name || payload.email.split('@')[0] || 'Player',
      email: payload.email,
      city: payload?.city || 'Near you',
      pro: payload?.pro || false,
    }
    setUser(profile)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
    navigate('/app/home')
  }

  const register = (payload) => {
    login(payload)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
    navigate('/')
  }

  const value = useMemo(
    () => ({
      user,
      isAuthed: Boolean(user),
      login,
      register,
      logout,
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

