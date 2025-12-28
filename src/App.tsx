import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import { HeroData } from './pages/HeroData'
import NotFoundPage from './components/Error/NotFoundPage'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'

const router = createBrowserRouter([
  {path: '/', element: <Dashboard />, errorElement: <NotFoundPage />}, 
  {path: '/heroes/:name', element: <HeroData />, errorElement: <NotFoundPage />}
])

function App() {

  return (
    <div className='dark'>
      {/*<!-- Top Navigation --> */}
      <NavBar />

      <RouterProvider router={router} />

      <Footer />
    </div>
  )
}

export default App
