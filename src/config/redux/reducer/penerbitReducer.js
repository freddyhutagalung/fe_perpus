const initialState = {
    penerbit: [],
    penerbiteDetail: [],
  };
  
  const penerbitRecuder = (state = initialState, action) => {
    if (action.type === "GET_ALL_PENERBIT") {
      return {
        ...state,
        product: action.payload,
      };
    } else if (action.type === "GET_DETAIL_PENERBIT") {
      return {
        ...state,
        productDetail: action.payload,
      };
    } else if (action.type === "CREATE_PENERBIT") {
      return state;
    } else if (action.type === "UPDATE_PENERBIT") {
      return state;
    } else if (action.type === "DELETE_PENERBIT") {
      return state;
    } else {
      return state;
    }
  };
  
  export default penerbitRecuder;
  