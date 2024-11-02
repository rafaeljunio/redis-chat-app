import { create } from 'zustand'

import type { User } from '@/db/dummy'

type SelectedUserState = {
  selectedUser: User | null
  setSelectedUser: (user: User | null) => void
}

export const useSelectedUser = create<SelectedUserState>((set) => ({
  selectedUser: null,
  setSelectedUser: (user: User | null) => set({ selectedUser: user }),
}))
