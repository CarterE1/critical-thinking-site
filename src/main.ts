import './style.css'
import { createApp } from './components/App'

const appRoot = document.querySelector<HTMLDivElement>('#app')
if (!appRoot) {
  throw new Error('No #app container found')
}

appRoot.appendChild(createApp())
