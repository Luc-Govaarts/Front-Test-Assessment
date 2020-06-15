
const initialState = {
    loading: true,
    pages: []
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "LOADING" :
        return {...state, loading: payload}
      case "STORE_PAGES" :
      return {...state, pages: [...payload], loading: false }    
      default:
        return state;
    }
  };
  