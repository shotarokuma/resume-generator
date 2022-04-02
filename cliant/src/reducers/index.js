import { 
  LOGIN,
  LOGOUT
 } from "../action";
const reducer = (state,action) => {
  switch(action.type) {
    case LOGIN:
      state.user = action.user;
      state.auth = true;
      return state;
    case LOGOUT:
      state.user = null;
      state.auth = false;
      return state;
    default:
      return state;
  }
};


export default reducer;
