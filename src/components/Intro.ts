import './Artifact.css'

export function createIntroComponent(): HTMLElement {
  const section = document.createElement('section')
  section.className = 'artifact'
  section.id = 'introduction'

  const heading = document.createElement('h1')
  heading.textContent = 'Introduction'

  const text = document.createElement('p')
  text.textContent = 'My goal with this website is to display my passion for computer science and show the journey that took me to where I am now. I think it\'s interesting to see how my experiences and hobbies led me to wanting to work as a software engineer, and I want to showcase some of the project/work that I\'ve done in pursuit of this goal. On this website, I have a list of artifacts that represent my growth throughout the years. They are laid out in chronological order, but you are free to read through them in any order you like. These artifacts consist of mementos from my past, projects that I\'ve worked on, and representations of different jobs that I\'ve held in the past. All of these artifacts help to explain why I chose the path that I chose, and also why I\'m so excited to continue down this path. I also think its worth mentioning that I coded this website myself using React/HTML/CSS and hosted it through github. Thank you for visiting, and I hope you enjoy!'

  section.append(heading, text)
  return section
}