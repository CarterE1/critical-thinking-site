import type { ArtifactData } from './Artifact'

export function createNavigationSidebar(artifacts: ArtifactData[]): HTMLElement {
  const sidebar = document.createElement('nav')
  sidebar.className = 'navigation-sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Contents'
  sidebar.appendChild(title)

  const list = document.createElement('ul')

  // Introduction link 
  const introLi = document.createElement('li')
  const introA = document.createElement('a')
  introA.href = '#introduction'
  introA.textContent = 'Introduction'
  introLi.appendChild(introA)
  list.appendChild(introLi)

  // Artifact links
  artifacts.forEach((artifact, index) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = `#artifact-${index}`
    a.textContent = artifact.title
    li.appendChild(a)
    list.appendChild(li)
  })

  // Conclusion link
  const conclusionLi = document.createElement('li')
  const conclusionA = document.createElement('a')
  conclusionA.href = '#conclusion'
  conclusionA.textContent = 'Conclusion'
  conclusionLi.appendChild(conclusionA)
  list.appendChild(conclusionLi)

  sidebar.appendChild(list)
  return sidebar
}