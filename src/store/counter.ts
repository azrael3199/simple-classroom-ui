import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export interface CounterState {
  value: number
  increment: () => void
  decrement: () => void
}

export const useCounter = create<CounterState>()(
  devtools(
    persist(
      set => ({
        value: 0,
        increment: () => set(state => ({ value: state.value + 1 })),
        decrement: () => set(state => ({ value: state.value - 1 })),
      }),
      {
        name: 'counter-storage',
      }
    )
  )
)
