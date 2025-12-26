import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { HeroData } from './pages/HeroData'
import NotFoundPage from './components/Error/NotFoundPage'

const router = createBrowserRouter([
  {path: '/', element: <Dashboard />, errorElement: <NotFoundPage />}, 
  {path: '/heroes/antimage', element: <HeroData />, errorElement: <NotFoundPage />}
])

function App() {

  return (
    <div className='dark'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
