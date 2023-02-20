import React from 'react'
import { useForm } from 'react-hook-form'
import { API } from '../shared/api'
import { useNavigate } from 'react-router-dom'
import './AddProducts.css'
import { useDispatch } from 'react-redux'
import { createProduct } from '../redux/products/products.functions'
const AddProducts = () => {
  const {
    register,
    handleSubmit
  } = useForm()
  const dispatch = useDispatch()
  const navigateTo = useNavigate()

  const newProduct = async (data) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('variaciones', data.variaciones)
    formData.append('observaciones', data.observaciones)
    dispatch(createProduct(formData, navigateTo))
  }

  return (
    <div className='create-wrapper'>
      <form onSubmit={handleSubmit(newProduct)} className='create'>
        <h2>Crear Producto</h2>
        <div>
          <div>
            <p>Nombre</p>
            <input
              type='text'
              name='name'
              {...register('name')}
            />
          </div>
          <div>
            <p>Variaciones</p>
            <input
              type='text'
              name='variaciones'
              {...register('variaciones')}
            />
          </div>
        </div>
        <div>
          <div>
            <p>Observaciones</p>
            <input
              type='text'
              name='observaciones'
              {...register('observaciones')}
            />
          </div>
        </div>
        <button>Crear</button>
        <button className='edit-back-button' onClick={() => navigateTo(-1)}>
          Volver atras
        </button>
      </form>
    </div>
  )
}

export default AddProducts
