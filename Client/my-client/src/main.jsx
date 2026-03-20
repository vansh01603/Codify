import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='769188610078-09ploddjd8tcke0l0jojkt9hsuruvtn5.apps.googleusercontent.com'>
    <StrictMode>
      <App />
    </StrictMode>
    </GoogleOAuthProvider>
)
