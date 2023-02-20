import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { API } from '../../src/shared/api'
import './EditProducts.css'
const EditProducts = () => {
  const { id } = useParams()
  const navigateTo = useNavigate()
  const [product, setProduct] = useState()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await API.get(`/product/id/${id}`)
      setProduct(data)
    }
    getProducts()
  }, [])

  const editProduct = async (data) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('variaciones', data.variaciones)
    formData.append('observaciones', data.observaciones)
    await API.put(`/product/edit/${id}`, {
      name: data.name,
      variaciones: data.variaciones,
      observaciones: data.observaciones
    })
    navigateTo(-1)
  }
  const deleteProduct = (id) => {
    try {
      API.delete(`/product/delete/${id}`)
      navigateTo(-1)
    } catch {
      console.log('error')
    }
  }

  return (
    <div className='edit-wrapper'>
      <form className='edit' onSubmit={handleSubmit(editProduct)}>
        <h3>Editar producto</h3>
        <div>
          <label>Nombre</label>
          <input
            type='text'
            name='name'
            placeholder={product?.name}
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <label>Variaciones</label>
          <input
            type='text'
            placeholder={product?.variaciones}
            name='variaciones'
            {...register('variaciones', { required: true })}
          />
        </div>
        <div>
          <label>Observaciones</label>
          <input
            type='text'
            placeholder={product?.observaciones}
            name='observaciones'
            {...register('observaciones', { required: true })}
          />
        </div>
        <button className='edit-back-button'>Editar Producto</button>
        <button
          className='delete-button'
          onClick={(e) => deleteProduct(id)}
        >
          Borrar ejercicio
        </button>
        <button className='edit-back-button' onClick={() => navigateTo(-1)}>
          Volver atras
        </button>
      </form>
      <div />
    </div>
  )
}

export default EditProducts
