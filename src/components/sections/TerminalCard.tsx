import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { cn } from '@/lib/utils'

type CommandOutput = {
  type: 'text' | 'list' | 'link'
  content: string
  href?: string
}[]

interface CommandDef {
  description: string
  run: () => CommandOutput
}

const COMMAND_ORDER = ['help', 'whoami', 'skills', 'contact', 'clear'] as const

function buildRegistry(labels: TerminalLabels): Record<string, CommandDef> {
  return {
    help: {
      description: labels.helpDesc,
      run: () => [
        { type: 'text', content: labels.helpIntro },
        ...COMMAND_ORDER.map((cmd) => ({
          type: 'list' as const,
          content: `  ${cmd.padEnd(12)} — ${labelsFor(cmd, labels)}`,
        })),
      ],
    },
    whoami: {
      description: labels.whoamiDesc,
      run: () => [
        { type: 'text', content: '👤  Andrés Camilo Plaza (bue221)' },
        { type: 'text', content: `🌍  ${labels.whoamiLocation}` },
        { type: 'text', content: `💼  ${labels.whoamiRole}` },
        { type: 'text', content: `🎸  ${labels.whoamiHobby}` },
      ],
    },
    skills: {
      description: labels.skillsDesc,
      run: () => [
        { type: 'text', content: '⚛️   React · Next.js · Astro · Vue' },
        { type: 'text', content: '🟦  TypeScript · JavaScript · Python' },
        { type: 'text', content: '🎨  Tailwind CSS · Framer Motion' },
        { type: 'text', content: '🗄️   Node.js · MongoDB · PostgreSQL' },
        { type: 'text', content: '🤖  AI: Cursor · Claude · Codex · MCP' },
      ],
    },
    contact: {
      description: labels.contactDesc,
      run: () => [
        {
          type: 'link',
          content: '📧  camiloplaza3@gmail.com',
          href: 'mailto:camiloplaza3@gmail.com',
        },
        {
          type: 'link',
          content: '💼  linkedin.com/in/bue221',
          href: 'https://www.linkedin.com/in/bue221/',
        },
        {
          type: 'link',
          content: '🐙  github.com/bue221',
          href: 'https://github.com/bue221',
        },
      ],
    },
    clear: {
      description: labels.clearDesc,
      run: () => [],
    },
  }
}

function labelsFor(
  cmd: (typeof COMMAND_ORDER)[number],
  labels: TerminalLabels,
) {
  const map = {
    help: labels.helpDesc,
    whoami: labels.whoamiDesc,
    skills: labels.skillsDesc,
    contact: labels.contactDesc,
    clear: labels.clearDesc,
  }
  return map[cmd]
}

export interface TerminalLabels {
  placeholder: string
  greeting: string
  helpHint: string
  helpIntro: string
  helpDesc: string
  whoamiDesc: string
  whoamiLocation: string
  whoamiRole: string
  whoamiHobby: string
  skillsDesc: string
  contactDesc: string
  clearDesc: string
  notFound: string
  cardTitle: string
  suggest: string
}

interface HistoryLine {
  kind: 'input' | 'output' | 'error'
  text: string
  href?: string
}

type Suggestion = { name: string; description: string }

export function TerminalCard({ labels }: { labels: TerminalLabels }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<HistoryLine[]>([
    { kind: 'output', text: labels.greeting },
    { kind: 'output', text: labels.helpHint },
  ])
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState(-1)
  const [focused, setFocused] = useState(false)
  const [highlight, setHighlight] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const registry = useMemo(() => buildRegistry(labels), [labels])

  const suggestions = useMemo<Suggestion[]>(() => {
    const query = input.trim().toLowerCase()
    const all = COMMAND_ORDER.map((name) => ({
      name,
      description: registry[name].description,
    }))
    if (!query) return all
    return all.filter(
      (item) =>
        item.name.startsWith(query) ||
        item.name.includes(query) ||
        item.description.toLowerCase().includes(query),
    )
  }, [input, registry])

  const showSuggestions = focused && suggestions.length > 0

  useEffect(() => {
    setHighlight(0)
  }, [input, focused])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  useEffect(() => {
    return () => {
      if (blurTimer.current) clearTimeout(blurTimer.current)
    }
  }, [])

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim().toLowerCase()
      if (!cmd) return

      const newLines: HistoryLine[] = [{ kind: 'input', text: `$ ${raw}` }]

      if (cmd === 'clear') {
        setHistory([])
        setCmdHistory((prev) => [raw, ...prev])
        setCmdHistoryIdx(-1)
        setInput('')
        return
      }

      const def = registry[cmd]

      if (def) {
        def.run().forEach((line) =>
          newLines.push({
            kind: 'output',
            text: line.content,
            href: line.href,
          }),
        )
      } else {
        newLines.push({
          kind: 'error',
          text: labels.notFound.replace('{cmd}', cmd),
        })
      }

      setHistory((prev) => [...prev, ...newLines])
      setCmdHistory((prev) => [raw, ...prev])
      setCmdHistoryIdx(-1)
      setInput('')
    },
    [labels, registry],
  )

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (showSuggestions && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault()
      setHighlight((current) => {
        if (e.key === 'ArrowDown') {
          return (current + 1) % suggestions.length
        }
        return (current - 1 + suggestions.length) % suggestions.length
      })
      return
    }

    if (e.key === 'Enter') {
      e.preventDefault()
      if (
        showSuggestions &&
        suggestions[highlight] &&
        !registry[input.trim().toLowerCase()]
      ) {
        runCommand(suggestions[highlight].name)
      } else if (
        showSuggestions &&
        suggestions[highlight] &&
        input.trim() === ''
      ) {
        runCommand(suggestions[highlight].name)
      } else {
        runCommand(input)
      }
      return
    }

    if (e.key === 'Tab' && suggestions[0]) {
      e.preventDefault()
      const pick = suggestions[highlight] ?? suggestions[0]
      setInput(pick.name)
      return
    }

    if (e.key === 'Escape') {
      setFocused(false)
      inputRef.current?.blur()
      return
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(cmdHistoryIdx + 1, cmdHistory.length - 1)
      setCmdHistoryIdx(next)
      setInput(cmdHistory[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = Math.max(cmdHistoryIdx - 1, -1)
      setCmdHistoryIdx(next)
      setInput(next === -1 ? '' : cmdHistory[next])
    }
  }

  function handleFocus() {
    if (blurTimer.current) clearTimeout(blurTimer.current)
    setFocused(true)
  }

  function handleBlur() {
    blurTimer.current = setTimeout(() => setFocused(false), 120)
  }

  function focusInput() {
    handleFocus()
    inputRef.current?.focus()
  }

  function pickSuggestion(name: string) {
    if (blurTimer.current) clearTimeout(blurTimer.current)
    runCommand(name)
    inputRef.current?.focus()
  }

  return (
    <div className="flex flex-col" onClick={focusInput}>
      <div className="flex items-center gap-2 border-b px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-500" />
        <span className="text-muted-foreground ml-2 font-mono text-xs">
          {labels.cardTitle}
        </span>
      </div>

      <div className="max-h-36 overflow-y-auto p-4 font-mono text-xs leading-relaxed">
        {history.map((line, i) => (
          <div
            key={i}
            className={cn(
              'break-words whitespace-pre-wrap',
              line.kind === 'input' && 'text-primary font-semibold',
              line.kind === 'error' && 'text-destructive',
              line.kind === 'output' && 'text-foreground/80',
            )}
          >
            {line.href ? (
              <a
                href={line.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline underline-offset-2"
                onClick={(e) => e.stopPropagation()}
              >
                {line.text}
              </a>
            ) : (
              line.text
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {showSuggestions ? (
        <div
          className="border-t px-3 py-2"
          role="listbox"
          aria-label={labels.suggest}
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-muted-foreground mb-1.5 text-[10px] font-medium tracking-wider uppercase">
            {labels.suggest}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {suggestions.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="option"
                aria-selected={index === highlight}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setHighlight(index)}
                onClick={() => pickSuggestion(item.name)}
                className={cn(
                  'rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors',
                  index === highlight
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background text-foreground hover:border-primary/60',
                )}
              >
                <span className="font-semibold">{item.name}</span>
                <span className="ml-1.5 opacity-70">{item.description}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div className="flex items-center gap-2 border-t px-4 py-2.5 font-mono text-xs">
        <span className="text-primary font-bold select-none">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onClick={handleFocus}
          onBlur={handleBlur}
          placeholder={labels.placeholder}
          autoComplete="off"
          spellCheck={false}
          role="combobox"
          aria-expanded={showSuggestions}
          aria-autocomplete="list"
          className="placeholder:text-muted-foreground/50 flex-1 bg-transparent text-xs outline-none"
          aria-label="terminal input"
        />
      </div>
    </div>
  )
}
