import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { Spinner } from '@/components/ui'

interface ProtectedRouteProps {
  userType?: 'RETAILER' | 'TEAM_MEMBER' | 'BRAND_REP'
  redirectTo?: string
}

export function ProtectedRoute({ userType, redirectTo = '/login' }: ProtectedRouteProps) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }

  if (!user) {
    return <Navigate to={redirectTo} replace />
  }

  if (userType && user.userType !== userType) {
    // Redirect to appropriate dashboard based on user type
    const dashboardPath = user.userType === 'RETAILER' ? '/dashboard' : '/admin/dashboard'
    return <Navigate to={dashboardPath} replace />
  }

  return <Outlet />
}