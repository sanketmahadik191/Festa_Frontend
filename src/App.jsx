
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Rest from './pages/Rest.jsx'
import Profile from './pages/Profile.jsx'
import Addrestu from './pages/Addrestu.jsx'
import Home from './pages/Home.jsx'



function App() {
 
  return (
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Main />}></Route>
       <Route path='/sign-up' element={<Signup />}></Route>
       <Route path='/log-in' element={<Login />}></Route>
       <Route path='/addRest' element={<Addrestu />}></Route>
       <Route path='/profile' element={<Profile />}></Route>
       <Route path='/home/*' element={<Home />}> </Route>
     </Routes>
  
    </BrowserRouter>
  )
}

export default App
