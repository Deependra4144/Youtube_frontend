import { useState } from "react"
import Navbar from "./components/layout/Navbar"
import Sidebar from "./components/layout/Sidebar"
import Hero from "./components/home/Hero"
import Register from "./pages/Register"
import Modal from "./components/common/Modal"

function App() {
  const [sidebarToggel, setSidebarToggel] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  // console.log(sidebarToggel)
  return (
    <div className="h-screen overflow-y-scroll">
      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}></Modal>
      <Navbar setModalIsOpen={setModalIsOpen} setSidebarToggel={setSidebarToggel} />
      <div className="flex">
        <Sidebar sidebarToggel={sidebarToggel} />
        <Hero />
      </div>
    </div>
  )
}

export default App
