import React, { useReducer } from 'react';
import reducer from '../reducers';
import AppContext from '../context';
import Links from '../route';

const App = () => {
  const initialState = {
    auth: false,
    user: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Links />
    </AppContext.Provider>
  );
};


export default App;
