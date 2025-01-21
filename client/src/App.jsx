import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer'
function App() {


  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/doctors' element={<Doctor />} />
          <Route path='/doctors/:specialty' element={<Doctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/my-appointment' element={<MyAppointments />} />
          <Route path='/my-profile' element={<Profile />} />
          <Route path='/appointment/:docId' element={<Appointment />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App


// SQOOUSH for changing png to webp