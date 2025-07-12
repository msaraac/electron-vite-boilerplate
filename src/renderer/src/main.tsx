import './styles/globals.css'
import * as Sentry from '@sentry/electron/renderer'

import { HashRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { Provider } from '@renderer/provider'

Sentry.init({
  sendDefaultPii: true,
  integrations: []
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
)
