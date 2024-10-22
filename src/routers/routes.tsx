import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PropertyDetail from '../pages/PropertyDetail'
import Agent from '../pages/Agent'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/propertydetail',
    element: <PropertyDetail />
  },
  {
    path: '/agent',
    element: <Agent />
  }
])
