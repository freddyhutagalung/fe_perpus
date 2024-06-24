const initialState = {
  anggota: [],
  anggotaeDetail: [],
};

const anggotaReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_ANGGOTA") {
    return {
      ...state,
      product: action.payload,
    };
  } else if (action.type === "GET_DETAIL_ANGGOTA") {
    return {
      ...state,
      productDetail: action.payload,
    };
  } else if (action.type === "CREATE_ANGGOTA") {
    return state;
  } else if (action.type === "UPDATE_ANGGOTA") {
    return state;
  } else if (action.type === "DELETE_ANGGOTA") {
    return state;
  } else {
    return state;
  }
};

export default anggotaReducer;
