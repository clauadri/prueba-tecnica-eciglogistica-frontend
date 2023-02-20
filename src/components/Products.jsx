import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../redux/products/products.functions'
import './Products.css'
import { FaEdit } from 'react-icons/fa'
const Products = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const navigateTo = useNavigate()

  return (
    <div className='cont'>
      <div className='title-products'>
        <h3>Lista de productos</h3>
      </div>
      <div className='cont-table'>
        <table className='table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Variaciones</th>
              <th>Observaciones</th>
              <th>Editar Producto</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              console.log('product', products)
              return (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.variaciones}</td>
                  <td>{product.observaciones}</td>
                  <button
                    className='edit-btn'
                    onClick={() => navigateTo(`/product/edit/${product?._id}`)}
                  >
                    <FaEdit />
                  </button>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
