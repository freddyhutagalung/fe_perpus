import { combineReducers } from "redux";
import userReducer from "./userReducer";
import anggotaReducer from "./anggotaReducer";
import pengarangRecuder from "./pengarangReducer";

const rootReducer = combineReducers({
  user: userReducer,
  anggota: anggotaReducer,
  pengarang: pengarangRecuder,
});

export default rootReducer;
