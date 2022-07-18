import React from 'react'
import ReactDOM from 'react-dom/client' // integrando o react para funcionar num ambiente browser
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
