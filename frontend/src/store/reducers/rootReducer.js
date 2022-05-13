import { combineReducers } from "redux";
import authReducer from "./authReducer";
import noteReducer from "./noteReducer";

const rootReducer = combineReducers({
  notes: noteReducer,
  auth: authReducer,
});

export default rootReducer;
