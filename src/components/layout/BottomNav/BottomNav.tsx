import { Link, useLocation } from 'react-router-dom'
import { Home, Store, ShoppingBag, Package, Settings } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { cn } from '@/lib/utils/cn'

export function BottomNav() {
  const { user } = useAuth()
  const location = useLocation()

  // Only show for logged-in users on mobile
  if (!user) return null

  const isActiveRoute = (path: string) => {
    return location.pathname === path
  }

  const navItems = user.userType === 'RETAILER' 
    ? [
        { path: '/dashboard', label: 'Home', icon: Home },
        { path: '/brands', label: 'Brands', icon: Store },
        { path: '/cart', label: 'Cart', icon: ShoppingBag },
        { path: '/orders', label: 'Orders', icon: Package },
        { path: '/settings', label: 'Settings', icon: Settings },
      ]
    : [
        { path: '/admin/dashboard', label: 'Home', icon: Home },
        { path: '/admin/brands', label: 'Brands', icon: Store },
        { path: '/admin/orders', label: 'Orders', icon: Package },
        { path: '/admin/retailers', label: 'Retailers', icon: ShoppingBag },
        { path: '/admin/messages', label: 'Messages', icon: Settings },
      ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border-gray px-4 py-2 z-50 md:hidden">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = isActiveRoute(item.path)
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors",
                isActive 
                  ? "text-rose-gold" 
                  : "text-medium-gray hover:text-rose-gold"
              )}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}