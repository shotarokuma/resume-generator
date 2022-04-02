import { 
  LOGIN
 } from "../action";
const reducer = (state,action) => {
  switch(action.type) {
    case LOGIN:
      state.user = action.user;
      state.auth = true;
      return state;
    default:
      return state;
  }
};


export default reducer;
