import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { Button } from './button'
import { X, File, Check } from 'lucide-react'

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { name: string; email: string }) => void
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleClose = () => {
    // Reset on close so the form is fresh next time
    setName('')
    setEmail('')
    setSubmitted(false)
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return

    setIsSubmitting(true)
    await onSubmit({ name: name.trim(), email: email.trim() })
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (!isOpen || typeof document === 'undefined') return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative mx-4 w-full max-w-md rounded-lg border bg-background p-6 shadow-lg">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-start gap-3 py-2">
            <div className="flex items-center gap-2 text-primary">
              <Check size={20} />
              <h2 className="text-xl font-semibold">
                Your download is on its way
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Thanks, {name.split(' ')[0] || 'there'} — the resume should be
              downloading now. I read every lead that comes through, so if a
              role or project is on your mind, just reply to the email I'll send
              and we'll take it from there.
            </p>
            <Button onClick={handleClose} className="mt-2 w-full">
              Done
            </Button>
          </div>
        ) : (
          <>
            {/* Content */}
            <div className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Download Resume</h2>
              <p className="text-sm text-muted-foreground">
                Pop in your name and email and the download starts right away. I
                personally read every one — it's the best way for us to connect.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!name.trim() || !email.trim() || isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    'Downloading...'
                  ) : (
                    <>
                      Download Resume
                      <File size={16} />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}
