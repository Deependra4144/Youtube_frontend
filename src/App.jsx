import Hero from "./components/home/Hero"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Likevideo from './pages/Likevideo'
import History from './pages/History'
import Mycontent from './pages/Mycontent'
import Collection from './pages/Collection'
import Subscriber from './pages/Subscriber'
import Userdetail from './pages/Userdetail'


function App() {
  const routers = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Hero />
        },
        {
          path: '/liked-videos',
          element: <Likevideo />
        },
        {
          path: '/history',
          element: <History />
        },
        {
          path: '/my-content',
          element: <Mycontent />
        },
        {
          path: '/collection',
          element: <Collection />
        },
        {
          path: '/subscribers',
          element: <Subscriber />
        },
        {
          path: '/userdetail',
          element: <Userdetail />
        },
      ]

    }
  ])

  return (
    <RouterProvider router={routers}></RouterProvider>
  )
}

export default App
