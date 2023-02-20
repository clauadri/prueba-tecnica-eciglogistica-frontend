import { API } from '../../shared/api'

export const getProducts = () => async (dispatch) => {
  dispatch({ type: 'gettingProducts' })

  try {
    const result = await API.get('/product')
    dispatch({ type: 'getProducts', payload: result.data })
  } catch (error) {
    dispatch({ type: 'errorProducts', payload: error.message })
  }
}
export const createProduct = (datos, navigateTo) => async (dispatch) => {
  dispatch({ type: 'creatingProducts' })
  try {
    console.log(datos)
    const result = await API.post('/product/create', datos)
    console.log(result)
    dispatch({ type: 'createdProduct' })
    localStorage.setItem('id', result.data._id)
    console.log(result.data._id)
    navigateTo('/')
  } catch (error) {
    dispatch({ type: 'errorCreating' })
  }
}
