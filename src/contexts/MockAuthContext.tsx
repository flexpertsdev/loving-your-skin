import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, Retailer, TeamMember } from '@/types'
import { mockUsers, mockRetailers, mockTeamMembers } from '@/lib/mock/data'

interface AuthContextType {
  user: User | null
  retailer: Retailer | null
  teamMember: TeamMember | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function MockAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [retailer, setRetailer] = useState<Retailer | null>(null)
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Check for stored session on mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('mockUserId')
    if (storedUserId) {
      const foundUser = mockUsers.find(u => u.id === storedUserId)
      if (foundUser) {
        setUser(foundUser)
        loadUserDetails(foundUser)
      }
    }
    setLoading(false)
  }, [])

  const loadUserDetails = (user: User) => {
    if (user.userType === 'RETAILER') {
      const foundRetailer = mockRetailers.find(r => r.userId === user.id)
      if (foundRetailer) setRetailer(foundRetailer)
    } else if (user.userType === 'TEAM_MEMBER') {
      const foundTeamMember = mockTeamMembers.find(t => t.userId === user.id)
      if (foundTeamMember) setTeamMember(foundTeamMember)
    }
  }

  const login = async (email: string, password: string) => {
    setError(null)
    setLoading(true)

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))

    // Mock login logic - accept any password for demo purposes
    const foundUser = mockUsers.find(u => u.email === email)
    
    if (!foundUser) {
      setError('Invalid email or password')
      setLoading(false)
      return
    }

    // For demo purposes, accept these simple passwords
    const validPasswords: Record<string, string> = {
      'retailer@example.com': 'retailer123',
      'admin@lys.com': 'admin123',
      'brand@example.com': 'brand123',
    }

    if (validPasswords[email] !== password) {
      setError('Invalid email or password')
      setLoading(false)
      return
    }

    // Success
    setUser(foundUser)
    loadUserDetails(foundUser)
    localStorage.setItem('mockUserId', foundUser.id)
    setLoading(false)
  }

  const logout = async () => {
    setLoading(true)
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    setUser(null)
    setRetailer(null)
    setTeamMember(null)
    localStorage.removeItem('mockUserId')
    setLoading(false)
  }

  const value = {
    user,
    retailer,
    teamMember,
    loading,
    login,
    logout,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}