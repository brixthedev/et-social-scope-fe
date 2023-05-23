import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ModalProvider } from './shared/Modal'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ModalProvider>
            <App />
        </ModalProvider>
    </React.StrictMode>
)
