import { Route, Navigate, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../login/Register'
import Profile from '../home/Profile'
import Feed from '../home/Feed'
import ProtectedRoute from './ProtectedRoute'
import { useEffect, useState } from 'react'

export default function RoutePaths({ basePath='/Pocketter' }) {
  const [ basePathState, setBasePathState ] = useState(basePath);

  useEffect(() => {
    setBasePathState(basePath);
  }, [basePath]);

  return (
    <Routes>
      <Route path={`${basePathState}/login`} element={ <Login /> } />
      <Route path={`${basePathState}/register`} element={ <Register /> } />
      <Route
        path={`${basePathState}/profile/:userId`}
        element={   <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute> } />
      <Route
        path={`${basePathState}/feed`}
        element={   <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute> } />
      <Route path="*" element={<Navigate to={`${basePathState}/login`} replace />} />
    </Routes>
  )
}
