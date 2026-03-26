import './Artifact.css'

export interface ArtifactData {
  title: string
  images: string[]
  summary: string
  reasoning: string
  connectionToWorldview: string
}

function createSection(title: string, text: string): HTMLElement {
  const section = document.createElement('section')
  section.className = 'artifact-text-section'

  const h3 = document.createElement('h3')
  h3.textContent = title

  const p = document.createElement('p')
  p.textContent = text

  section.append(h3, p)
  return section
}

function createCarousel(images: string[]): HTMLElement {
  const carousel = document.createElement('div')
  carousel.className = 'artifact-carousel'

  if (images.length === 0) {
    const message = document.createElement('p')
    message.textContent = '(Images W.I.P.)'
    carousel.appendChild(message)
    return carousel
  }

  const imageContainer = document.createElement('div')
  imageContainer.className = 'artifact-carousel-images'

  images.forEach((src, idx) => {
    const img = document.createElement('img')
    img.className = 'artifact-image'
    img.src = src
    img.alt = `Artifact image ${idx + 1}`
    img.style.display = idx === 0 ? 'block' : 'none'
    imageContainer.appendChild(img)
  })

  carousel.appendChild(imageContainer)

  if (images.length > 1) {
    const controls = document.createElement('div')
    controls.className = 'artifact-carousel-controls'

    let current = 0
    const show = (nextIndex: number) => {
      const imgs = Array.from(imageContainer.children) as HTMLElement[]
      current = (nextIndex + imgs.length) % imgs.length
      imgs.forEach((img, i) => {
        img.style.display = i === current ? 'block' : 'none'
      })
    }

    const prevButton = document.createElement('button')
    prevButton.type = 'button'
    prevButton.textContent = '◀'
    prevButton.addEventListener('click', () => show(current - 1))

    const nextButton = document.createElement('button')
    nextButton.type = 'button'
    nextButton.textContent = '▶'
    nextButton.addEventListener('click', () => show(current + 1))

    controls.append(prevButton, nextButton)
    carousel.appendChild(controls)
  }

  return carousel
}

export function createArtifactComponent(data: ArtifactData): HTMLElement {
  const section = document.createElement('section')
  section.className = 'artifact'

  const heading = document.createElement('h1')
  heading.textContent = data.title

  const carousel = createCarousel(data.images)
  const summarySection = createSection('Summary', data.summary)
  const reasoningSection = createSection('Reasoning', data.reasoning)
  const worldviewSection = createSection('Connection to Worldview', data.connectionToWorldview)

  section.append(heading, carousel, summarySection, reasoningSection, worldviewSection)

  return section
}
