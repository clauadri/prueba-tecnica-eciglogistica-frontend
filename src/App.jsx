import './App.css'
import Register from './pages/register/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import AddProducts from './components/AddProducts'
import EditProducts from './components/EditProducts'
import { useSelector } from 'react-redux'

function App () {
  const { user } = useSelector(state => state.user)

  return (
    <div className='App'>
      <Routes>
        {user && <Route path='/' element={<Home />} />}
        {user && <Route path='/product/create' element={<AddProducts />} />}
        {user && <Route path='/product/edit/:id' element={<EditProducts />} />}
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
