import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<'light' | 'dark' | 'system'>(
    'light',
  )

  React.useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as
      | 'light'
      | 'dark'
      | 'system'
      | null
    const initialTheme = savedTheme || 'system'
    setThemeState(initialTheme)

    // Apply initial theme
    const isDark =
      initialTheme === 'dark' ||
      (initialTheme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [])

  React.useEffect(() => {
    // Skip if theme hasn't been initialized yet
    if (theme === 'light' && !localStorage.getItem('theme')) return

    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  const onChangeTheme = (newTheme: 'light' | 'dark' | 'system') => {
    // Use ViewTransition API for smoother theme changes
    const applyTheme = () => {
      setThemeState(newTheme)
      localStorage.setItem('theme', newTheme)
      const isDark =
        newTheme === 'dark' ||
        (newTheme === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
    }

    if (document.startViewTransition) {
      document.startViewTransition(applyTheme)
    } else {
      applyTheme()
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => onChangeTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
