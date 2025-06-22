import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { ProtectedRoute } from './ProtectedRoute'
import { AdminRoute } from './AdminRoute'

// Layouts
import { PublicLayout, RetailerLayout, AdminLayout, AuthLayout } from '@/components/layout'

// Pages
import Landing from '@/pages/Landing'

// Placeholder components for now
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-light text-deep-charcoal">{title}</h1>
    <p className="text-text-secondary mt-4">This page is coming soon...</p>
  </div>
)

export function AppRoutes() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-rose-gold"></div>
          <p className="mt-4 text-text-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<PlaceholderPage title="How It Works" />} />
        <Route path="/for-retailers" element={<PlaceholderPage title="For Retailers" />} />
        <Route path="/for-brands" element={<PlaceholderPage title="For Brands" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
      </Route>

      {/* Auth routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<PlaceholderPage title="Login" />} />
        <Route path="/invite/:token" element={<PlaceholderPage title="Accept Invitation" />} />
        <Route path="/forgot-password" element={<PlaceholderPage title="Forgot Password" />} />
      </Route>

      {/* Retailer routes */}
      <Route element={<ProtectedRoute userType="RETAILER" />}>
        <Route element={<RetailerLayout />}>
          <Route path="/dashboard" element={<PlaceholderPage title="Retailer Dashboard" />} />
          <Route path="/brands" element={<PlaceholderPage title="Brand Directory" />} />
          <Route path="/brands/:slug" element={<PlaceholderPage title="Brand Shop" />} />
          <Route path="/products/:productId" element={<PlaceholderPage title="Product Detail" />} />
          <Route path="/cart" element={<PlaceholderPage title="Shopping Cart" />} />
          <Route path="/checkout" element={<PlaceholderPage title="Checkout" />} />
          <Route path="/orders" element={<PlaceholderPage title="My Orders" />} />
          <Route path="/orders/:orderId" element={<PlaceholderPage title="Order Detail" />} />
          <Route path="/orders/:orderId/messages" element={<PlaceholderPage title="Order Messages" />} />
          <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
        </Route>
      </Route>

      {/* Admin routes */}
      <Route element={<AdminRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<PlaceholderPage title="Admin Dashboard" />} />
          <Route path="/admin/brands" element={<PlaceholderPage title="Brand Management" />} />
          <Route path="/admin/brands/:brandId/edit" element={<PlaceholderPage title="Edit Brand" />} />
          <Route path="/admin/products" element={<PlaceholderPage title="Product Management" />} />
          <Route path="/admin/products/:productId/edit" element={<PlaceholderPage title="Edit Product" />} />
          <Route path="/admin/orders" element={<PlaceholderPage title="Order Management" />} />
          <Route path="/admin/orders/:orderId" element={<PlaceholderPage title="Admin Order Detail" />} />
          <Route path="/admin/retailers" element={<PlaceholderPage title="Retailer Management" />} />
          <Route path="/admin/retailers/:retailerId" element={<PlaceholderPage title="Retailer Detail" />} />
          <Route path="/admin/messages" element={<PlaceholderPage title="Message Center" />} />
          <Route path="/admin/settings" element={<PlaceholderPage title="Admin Settings" />} />
        </Route>
      </Route>

      {/* Redirect based on user type */}
      <Route 
        path="*" 
        element={
          user 
            ? <Navigate to={user.userType === 'RETAILER' ? '/dashboard' : '/admin/dashboard'} replace />
            : <Navigate to="/" replace />
        } 
      />
    </Routes>
  )
}