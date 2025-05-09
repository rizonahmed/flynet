 
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Footer'
import Nav from './Nav'

function App() {
 
  return (
    <>
      <div>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
       
    </>
  )
}

export default App
