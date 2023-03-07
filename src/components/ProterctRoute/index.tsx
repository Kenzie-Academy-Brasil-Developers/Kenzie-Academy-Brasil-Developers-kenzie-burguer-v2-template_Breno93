import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext/UserContext';

const ProtectRoute = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to='/' />;
  }
  return <Outlet />;
};
export default ProtectRoute;
