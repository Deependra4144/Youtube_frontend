import { useEffect, useState } from "react"
import Navbar from "./components/layout/Navbar"
import Sidebar from "./components/layout/Sidebar"
import Hero from "./components/home/Hero"
import Register from "./pages/Register"
import Modal from "./components/common/Modal"
import { loadUser } from "./features/auth/authSlice"
import { useDispatch } from "react-redux"

function App() {
  const [sidebarToggel, setSidebarToggel] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [])


  return (
    <div className="h-screen overflow-y-scroll">

      <Navbar setSidebarToggel={setSidebarToggel} />
      <div className="flex">
        <Sidebar sidebarToggel={sidebarToggel} />
        <Hero />
      </div>
    </div>
  )
}

export default App
