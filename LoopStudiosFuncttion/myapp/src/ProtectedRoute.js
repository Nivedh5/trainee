import { Navigate, Outlet } from 'react-router-dom'
import { useState } from 'react';
const PrivateRoutes = (props) => {
 
  let auth = props?.auth
return (
    auth ? <Outlet/> : <Navigate to='/'/>
  )
}
export default PrivateRoutes;