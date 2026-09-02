type ParticleState = {
  initialized: boolean
  animationId: number
  particles: Particle[]
  mouse: { x: number; y: number; isActive: boolean }
  idleTimer: number
  observer: MutationObserver | null
}

type ShapeType = 'blade' | 'triangle' | 'cross' | 'circle'

declare global {
  interface Window {
    __bue221ParticleBg?: ParticleState
  }
}

class Particle {
  x: number
  y: number
  size: number
  length: number
  speedY: number
  angle: number
  swing: number
  swingSpeed: number
  color: string
  colorType: 'primary' | 'foreground'
  shape: ShapeType
  rotation: number
  rotationSpeed: number
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 3 + 1
    this.length = Math.random() * 10 + 5
    this.speedY = Math.random() * 1 + 0.5
    this.angle = Math.random() * 360
    this.swing = Math.random() * 1.5 + 0.5
    this.swingSpeed = Math.random() * 0.05 + 0.01
    this.rotation = Math.random() * 360
    this.rotationSpeed = (Math.random() - 0.5) * 0.05
    this.shape = 'cross'
    this.colorType = Math.random() < 0.3 ? 'primary' : 'foreground'
    this.color = ''
    this.updateColor()
  }

  updateColor() {
    const style = getComputedStyle(document.documentElement)
    const getVar = (name: string) => style.getPropertyValue(name).trim()
    const val =
      this.colorType === 'primary'
        ? getVar('--primary') || '24.6 95% 53.1%'
        : getVar('--foreground') || '20 14.3% 4.1%'
    this.color = `hsl(${val})`
  }

  update(mouse: { x: number; y: number; isActive: boolean }) {
    this.y += this.speedY
    this.angle += this.swingSpeed
    this.x += Math.cos(this.angle) * this.swing
    this.rotation += this.rotationSpeed

    if (mouse.isActive) {
      const dx = mouse.x - this.x
      const dy = mouse.y - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      if (distance < 150) {
        const force = (150 - distance) / 150
        const angle = Math.atan2(dy, dx)
        this.x -= Math.cos(angle) * force * 5
        this.y -= Math.sin(angle) * force * 5
      }
    }

    if (this.y > this.canvas.height + 20) {
      this.y = -20
      this.x = Math.random() * this.canvas.width
    }
    if (this.x > this.canvas.width + 20) this.x = -20
    if (this.x < -20) this.x = this.canvas.width + 20
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.beginPath()

    if (this.shape === 'blade') {
      ctx.ellipse(0, 0, this.size, this.length, 0, 0, Math.PI * 2)
    } else if (this.shape === 'circle') {
      ctx.arc(0, 0, this.size, 0, Math.PI * 2)
    } else if (this.shape === 'triangle') {
      const s = this.size * 2
      ctx.moveTo(0, -s)
      ctx.lineTo(s, s)
      ctx.lineTo(-s, s)
      ctx.closePath()
    } else {
      const w = this.size
      const l = this.length * 0.6
      ctx.rect(-w / 2, -l / 2, w, l)
      ctx.rect(-l / 2, -w / 2, l, w)
    }

    ctx.fill()
    ctx.restore()
  }
}

function getState(): ParticleState {
  if (!window.__bue221ParticleBg) {
    window.__bue221ParticleBg = {
      initialized: false,
      animationId: 0,
      particles: [],
      mouse: { x: -1000, y: -1000, isActive: false },
      idleTimer: 0,
      observer: null,
    }
  }
  return window.__bue221ParticleBg
}

function createParticles(canvas: HTMLCanvasElement) {
  const state = getState()
  const count = Math.max(24, Math.floor((canvas.width * canvas.height) / 15000))
  state.particles = Array.from({ length: count }, () => new Particle(canvas))
}

function animate(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  const state = getState()
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (const particle of state.particles) {
    particle.updateColor()
    particle.update(state.mouse)
    particle.draw(ctx)
  }
  state.animationId = requestAnimationFrame(() => animate(canvas, ctx))
}

function resize(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  createParticles(canvas)
}

function startParticles() {
  const canvas = document.getElementById(
    'background-canvas',
  ) as HTMLCanvasElement | null
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const state = getState()

  if (!state.initialized) {
    state.initialized = true

    window.addEventListener('mousemove', (event) => {
      state.mouse.x = event.clientX
      state.mouse.y = event.clientY
      state.mouse.isActive = true
      window.clearTimeout(state.idleTimer)
      state.idleTimer = window.setTimeout(() => {
        state.mouse.isActive = false
      }, 2000)
    })

    window.addEventListener('mouseleave', () => {
      state.mouse.isActive = false
    })

    window.addEventListener('resize', () => resize(canvas))

    state.observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          for (const particle of state.particles) {
            particle.updateColor()
          }
        }
      }
    })
    state.observer.observe(document.documentElement, { attributes: true })
  }

  if (state.animationId) {
    cancelAnimationFrame(state.animationId)
  }

  resize(canvas)
  animate(canvas, ctx)
}

startParticles()
document.addEventListener('astro:page-load', startParticles)
