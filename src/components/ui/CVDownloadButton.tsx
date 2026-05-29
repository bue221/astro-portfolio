import React, { useState } from 'react'
import { Button } from './button'
import { File } from 'lucide-react'
import { LeadCaptureModal } from './LeadCaptureModal'

interface CVDownloadButtonProps {
  pdfUrl: string
}

export const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
  pdfUrl,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownloadClick = () => {
    setIsModalOpen(true)
  }

  const handleFormSubmit = async (data: { name: string; email: string }) => {
    try {
      // Submit to Netlify Forms
      const formData = new FormData()
      formData.append('form-name', 'resume-download')
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('timestamp', new Date().toISOString())
      formData.append('bot-field', '') // Honeypot field for spam protection

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })

      console.log('Lead captured via Netlify Forms:', data)

      // Trigger the download
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'Hunter_Brodie_Helms_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('Error capturing lead:', error)
      // Still allow download even if lead capture fails
      const link = document.createElement('a')
      link.href = pdfUrl
      link.download = 'Hunter_Brodie_Helms_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <>
      <Button onClick={handleDownloadClick}>
        Download resume
        <File />
      </Button>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
    </>
  )
}
