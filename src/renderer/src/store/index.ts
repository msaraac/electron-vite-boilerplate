import { create } from 'zustand'
import { AuthState, createAuthSlice } from '@renderer/slices/auth'
import { createJSONStorage, persist } from 'zustand/middleware'
import { electronStorage } from '@renderer/store/storage'

export const useBoundStore = create<AuthState>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a)
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => electronStorage)
    }
  )
)
