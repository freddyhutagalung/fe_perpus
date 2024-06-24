import { combineReducers } from "redux";
import userReducer from "./userReducer";
import anggotaReducer from "./anggotaReducer";
import pengarangRecuder from "./pengarangReducer";
import penerbitRecuder from "./penerbitReducer";
import rakReducer from "./rakReducer,js";

const rootReducer = combineReducers({
  user: userReducer,
  anggota: anggotaReducer,
  pengarang: pengarangRecuder,
  penerbit : penerbitRecuder,
  rak: rakReducer,
});

export default rootReducer;
