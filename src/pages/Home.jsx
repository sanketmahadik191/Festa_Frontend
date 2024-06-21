
import Header from '../components/Header'
import {Routes,Route } from 'react-router-dom'
import Rest from './Rest'
import RestDetails from './RestDetails'
function Home() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/rest' element={<Rest />}></Route>
        <Route path='/rest/details/:id' element={<RestDetails />}></Route>
    </Routes>
    </>

  )
}

export default Home
