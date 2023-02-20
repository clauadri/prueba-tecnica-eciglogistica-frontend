import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import './Login.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../src/redux/user/user.actions'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit
  } = useForm()
  const send = async (formData) => {
    dispatch(loginUser(formData, navigate))
    navigate('/')
  }

  const goToRegister = () => {
    navigate('/register')
  }

  return (
    <div className='login-wrapper'>
      <form onSubmit={handleSubmit(send)} className='login'>
        <h2 className='login-title'>Login</h2>
        <div className='inputs-wrapper'>
          <div>
            <input
              placeholder='Email'
              type='email'
              name='user'
              {...register('email', {
                required: 'Introduce tu email, por favor',
                minLength: {
                  value: 2,
                  message: 'el email tiene que ser mas largo'
                }
              })}
            />
          </div>
          <div>
            <input
              placeholder='Contraseña'
              type='password'
              name='password'
              {...register('password', {
                required: 'El password tiene que existir'
              })}
            />
          </div>
        </div>
        <button>Login</button>
      </form>
      <div>
        <a onClick={goToRegister}>No tienes una cuenta?</a>
      </div>
    </div>
  )
}

export default Login
