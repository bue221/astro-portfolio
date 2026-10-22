import { spring, stagger, timeline, type TimelineDefinition } from 'motion'
import { loaderAnimation } from '../lib/constants'

let animationRunning = false
let animationTimeout: ReturnType<typeof setTimeout> | null = null

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function revealCardsInstant() {
  document.querySelectorAll<HTMLElement>('.card-animate').forEach((el) => {
    el.style.opacity = '1'
    el.style.transform = 'none'
  })
}

function lockScroll() {
  const { documentElement, body } = document
  const prevHtml = documentElement.style.overflow
  const prevBody = body.style.overflow
  documentElement.style.overflow = 'hidden'
  body.style.overflow = 'hidden'
  window.scrollTo(0, 0)
  return () => {
    documentElement.style.overflow = prevHtml
    body.style.overflow = prevBody
  }
}

export function initHomeCardAnimations() {
  if (prefersReducedMotion()) {
    revealCardsInstant()
    return
  }

  if (animationRunning) return

  const cards = document.querySelectorAll('.card-animate')
  if (cards.length === 0) return

  if (animationTimeout) {
    clearTimeout(animationTimeout)
    animationTimeout = null
  }

  animationRunning = true
  const unlockScroll = lockScroll()

  const finish = () => {
    unlockScroll()
    animationRunning = false
  }

  // Safety: never leave cards invisible if the timeline stalls.
  const safetyTimer = window.setTimeout(() => {
    revealCardsInstant()
    finish()
  }, 2500)

  // Pixel offset (not %) so tall cards don't visually shove the page downward.
  const sequence = [
    loaderAnimation,
    [
      cards,
      { y: [28, 0], opacity: [0, 1] },
      {
        at: '-0.1',
        duration: 0.45,
        delay: stagger(0.06),
        easing: spring({ stiffness: 140, damping: 18 }),
      },
    ],
  ]

  timeline(sequence as TimelineDefinition)
    .finished.finally(() => {
      window.clearTimeout(safetyTimer)
      finish()
    })
}

export function setupHomeCardAnimations() {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  const run = () => {
    if (animationTimeout) clearTimeout(animationTimeout)
    animationTimeout = setTimeout(() => {
      initHomeCardAnimations()
    }, 80)
  }

  document.addEventListener('astro:after-swap', () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    run()
  })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true })
  } else {
    run()
  }
}
