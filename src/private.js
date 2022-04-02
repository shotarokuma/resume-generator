import React, { useContext } from 'react';
import AppContext from './context';
import { Navigate } from 'react-router-dom';


const Private = ({ children }) => {
  const { state } = useContext(AppContext);
  return (
    state.auth ? <>{children}</> : <Navigate to='/login'/>
  )
};

export default Private;