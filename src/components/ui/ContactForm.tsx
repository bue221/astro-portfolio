import React, { useState } from 'react'
import { Button } from './button'
import { Check, Copy, Send } from 'lucide-react'

interface ContactFormProps {
  email: string
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

export const ContactForm: React.FC<ContactFormProps> = ({ email }) => {
  const [name, setName] = useState('')
  const [fromEmail, setFromEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  )
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — fail silently, the mailto link still works
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !fromEmail.trim() || !message.trim()) return

    setStatus('sending')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: name.trim(),
          email: fromEmail.trim(),
          message: message.trim(),
          'bot-field': '',
        }),
      })
      setStatus('sent')
      setName('')
      setFromEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-start gap-2 rounded-md border border-primary/40 bg-primary/5 p-4">
        <div className="flex items-center gap-2 text-primary">
          <Check size={18} />
          <span className="font-medium">Message sent — thank you!</span>
        </div>
        <p className="text-sm text-muted-foreground">
          I read every message and will get back to you shortly.
        </p>
        <Button
          variant="link"
          className="h-auto p-0 text-sm"
          onClick={() => setStatus('idle')}
        >
          Send another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Honeypot for spam */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          aria-label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your name"
        />
        <input
          type="email"
          aria-label="Your email"
          value={fromEmail}
          onChange={(e) => setFromEmail(e.target.value)}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="you@email.com"
        />
      </div>

      <textarea
        aria-label="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={3}
        className="w-full resize-none rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        placeholder="What's on your mind? A role, a project, or just hi 👋"
      />

      <div className="flex items-center gap-2">
        <Button
          type="submit"
          disabled={
            status === 'sending' ||
            !name.trim() ||
            !fromEmail.trim() ||
            !message.trim()
          }
          className="flex-1"
        >
          {status === 'sending' ? (
            'Sending…'
          ) : (
            <>
              Send message
              <Send size={15} />
            </>
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleCopy}
          aria-label="Copy email address"
          title={copied ? 'Copied!' : `Copy ${email}`}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </div>

      {status === 'error' && (
        <p className="text-sm text-destructive">
          Something went wrong. Email me directly at{' '}
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
          .
        </p>
      )}
    </form>
  )
}
