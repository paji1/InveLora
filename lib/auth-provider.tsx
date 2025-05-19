"use client"

import type React from "react"

import { createContext, useEffect, useState } from "react"

type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  accountType: string
}

type AuthContextType = {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, firstName: string, lastName: string, accountType: string) => Promise<void>
  signOut: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check for stored user in localStorage on initial load
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    // This is a mock implementation
    // In a real app, you would call your authentication API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock successful authentication
        const mockUser = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          email,
          firstName: "John",
          lastName: "Doe",
          accountType: "buyer",
        }

        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        resolve()
      }, 1000)
    })
  }

  const signUp = async (email: string, password: string, firstName: string, lastName: string, accountType: string) => {
    // This is a mock implementation
    // In a real app, you would call your registration API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Mock successful registration
        const mockUser = {
          id: "user_" + Math.random().toString(36).substr(2, 9),
          email,
          firstName,
          lastName,
          accountType,
        }

        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        resolve()
      }, 1000)
    })
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}
