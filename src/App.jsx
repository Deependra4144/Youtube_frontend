import { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"

function App() {
  const [sidebarToggel, setSidebarToggel] = useState(true)
  console.log(sidebarToggel)
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
