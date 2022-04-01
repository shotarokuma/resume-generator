const reducer = (state = [], action) => {
  switch(action.type) {
    case "LOGIN":
      return state;
    case "LOGOUT":
      return {}
    default:
      return state;
  }
};


export default reducer;
