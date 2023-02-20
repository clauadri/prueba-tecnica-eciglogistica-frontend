import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../src/redux/user/user.actions'
import Products from '../../components/Products'
import './Home.css'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logoutUser(navigate))
  }
  return (
    <div className='home'>
      <div className='title-logout'>
        <div className='title'>
          <h1>Home</h1>
        </div>
        <div className='logout'>
          <button
            className='create-btn'
            onClick={() => navigate('/product/create')}
          >
            Crear Producto
          </button>
          <button className='user-btn' onClick={logOut}>
            Logout
          </button>
        </div>
      </div>

      <Products />
    </div>
  )
}

export default Home
