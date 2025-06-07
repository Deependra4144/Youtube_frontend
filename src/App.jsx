import { useState } from "react"
import Navbar from "./components/layout/Navbar"
import Sidebar from "./components/layout/Sidebar"
import Hero from "./components/home/Hero"
import Register from "./pages/Register"
import Modal from "./components/common/Modal"

function App() {
  const [sidebarToggel, setSidebarToggel] = useState(true)

  // console.log(sidebarToggel)
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
