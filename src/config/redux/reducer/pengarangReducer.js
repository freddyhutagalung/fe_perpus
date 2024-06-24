const initialState = {
    pengarang: [],
    pengarangeDetail: [],
  };
  
  const pengarangRecuder = (state = initialState, action) => {
    if (action.type === "GET_ALL_PENGARANG") {
      return {
        ...state,
        product: action.payload,
      };
    } else if (action.type === "GET_DETAIL_PENGARANG") {
      return {
        ...state,
        productDetail: action.payload,
      };
    } else if (action.type === "CREATE_PENGARANG") {
      return state;
    } else if (action.type === "UPDATE_PENGARANG") {
      return state;
    } else if (action.type === "DELETE_PENGARANG") {
      return state;
    } else {
      return state;
    }
  };
  
  export default pengarangRecuder;
  