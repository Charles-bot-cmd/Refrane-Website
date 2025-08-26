import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface NavigationState {
  isMenuOpen: boolean
  activeSection: string
  setMenuOpen: (isOpen: boolean) => void
  setActiveSection: (section: string) => void
}

export const useNavigationStore = create<NavigationState>()(
  devtools(
    (set) => ({
      isMenuOpen: false,
      activeSection: 'home',
      setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: 'navigation-store',
    }
  )
)

interface ThemeState {
  theme: 'light' | 'dark' | 'system'
  setTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-store',
    }
  )
)