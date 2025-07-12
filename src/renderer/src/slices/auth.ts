import { StateCreator } from 'zustand'

export interface AuthState {
  username: string | null
  isAuthenticated: boolean
  setAuthenticated: (value: boolean) => void
}

export const createAuthSlice: StateCreator<AuthState> = (set) => ({
  username: null,
  isAuthenticated: false,
  setAuthenticated: (value: boolean) => set(() => ({ isAuthenticated: value }))
})
