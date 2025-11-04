'use client'

import * as React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { languages, languageFlags } from '../i18n/ui'

interface LanguagePickerProps {
  currentLang: string
  currentRoute: string
  languagePaths: Record<string, string>
}

export function LanguagePicker({
  currentLang,
  currentRoute,
  languagePaths,
}: LanguagePickerProps) {
  const handleLanguageChange = (newLang: string) => {
    const newPath = languagePaths[newLang] || '/'
    // Use ViewTransition API if available for smoother transitions
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        window.location.href = newPath
      })
    } else {
      window.location.href = newPath
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 text-xl"
          aria-label="Select language"
        >
          <span className="leading-none">
            {languageFlags[currentLang as keyof typeof languageFlags]}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {Object.entries(languages).map(([l, label]) => (
          <DropdownMenuItem
            key={l}
            onClick={() => handleLanguageChange(l)}
            className={`flex cursor-pointer items-center gap-2 ${
              currentLang === l ? 'bg-accent font-semibold' : ''
            }`}
          >
            <span className="text-xl leading-none">
              {languageFlags[l as keyof typeof languageFlags]}
            </span>
            <span>{label}</span>
            {currentLang === l && <span className="ml-auto text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
