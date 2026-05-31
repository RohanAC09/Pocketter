import { Route, Navigate, Routes } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../login/Register'
import Profile from '../home/Profile'
import Feed from '../home/Feed'
import ProtectedRoute from './ProtectedRoute'

export default function RoutePaths({ basePath }) {
  return (
    <Routes>
      <Route path={`${basePath}/login`} element={ <Login /> } />
      <Route path={`${basePath}/register`} element={ <Register /> } />
      <Route
        path={`${basePath}/profile`}
        element={   <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute> } />
      <Route
        path={`${basePath}/feed`}
        element={   <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute> } />
      <Route path="*" element={<Navigate to={`${basePath}/login`} replace />} />
    </Routes>
  )
}
