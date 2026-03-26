import './style.css'
import { createApp } from './components/App'
import { setupCounter } from './counter'

const appRoot = document.querySelector<HTMLDivElement>('#app')
if (!appRoot) {
  throw new Error('No #app container found')
}

appRoot.appendChild(createApp())

const counterBtn = appRoot.querySelector<HTMLButtonElement>('#counter')
if (counterBtn) {
  setupCounter(counterBtn)
} else {
  console.warn('Counter button not found')
}
