const INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: false
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'gettingProducts':
      return { ...state, isLoading: true }
    case 'getProducts':
      return { ...state, isLoading: false, products: action.payload, error: false }
    case 'errorProducts':
      return { ...state, isLoading: false, products: [], error: action.payload }
    case 'creatingProducts':
      return { ...state, loading: true }
    case 'createdProduct':
      return { ...state, loading: false, error: false }
    case 'errorCreating':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default productsReducer
