import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/routes'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import './index.scss'
function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default App
