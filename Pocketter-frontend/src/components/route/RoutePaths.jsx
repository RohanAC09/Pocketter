import { Route, Navigate } from 'react-router-dom'
import Login from '../login/Login'
import Register from '../login/Register'
import Profile from '../home/Profile'
import Feed from '../home/Feed'
import ProtectedRoute from './ProtectedRoute'

export default function RoutePaths() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route
        path="/profile"
        element={   <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute> } />
      <Route
        path="/feed"
        element={   <ProtectedRoute>
                        <Feed />
                    </ProtectedRoute> } />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
