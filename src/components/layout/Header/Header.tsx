import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Globe, User, LogOut } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils/cn'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const location = useLocation()

  const handleLogout = async () => {
    await logout()
  }

  const isActiveRoute = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="bg-white border-b border-border-gray sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-light tracking-wider text-deep-charcoal">
            LOVING YOUR SKIN
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {user ? (
              <>
                {user.userType === 'RETAILER' && (
                  <>
                    <NavLink to="/dashboard" active={isActiveRoute('/dashboard')}>Dashboard</NavLink>
                    <NavLink to="/brands" active={isActiveRoute('/brands')}>Brands</NavLink>
                    <NavLink to="/orders" active={isActiveRoute('/orders')}>Orders</NavLink>
                    <NavLink to="/cart" active={isActiveRoute('/cart')}>Cart</NavLink>
                  </>
                )}
                {user.userType === 'TEAM_MEMBER' && (
                  <>
                    <NavLink to="/admin/dashboard" active={isActiveRoute('/admin/dashboard')}>Dashboard</NavLink>
                    <NavLink to="/admin/brands" active={isActiveRoute('/admin/brands')}>Brands</NavLink>
                    <NavLink to="/admin/orders" active={isActiveRoute('/admin/orders')}>Orders</NavLink>
                    <NavLink to="/admin/retailers" active={isActiveRoute('/admin/retailers')}>Retailers</NavLink>
                    <NavLink to="/admin/messages" active={isActiveRoute('/admin/messages')}>Messages</NavLink>
                  </>
                )}
              </>
            ) : (
              <>
                <NavLink to="/how-it-works" active={isActiveRoute('/how-it-works')}>How It Works</NavLink>
                <NavLink to="/for-retailers" active={isActiveRoute('/for-retailers')}>For Retailers</NavLink>
                <NavLink to="/for-brands" active={isActiveRoute('/for-brands')}>For Brands</NavLink>
                <NavLink to="/contact" active={isActiveRoute('/contact')}>Contact</NavLink>
              </>
            )}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center gap-2 px-3 py-1.5 border border-border-gray rounded-full text-sm hover:bg-soft-pink transition-colors"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Globe size={16} />
                <span>EN</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-border-gray rounded-lg shadow-lg py-1">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-soft-pink transition-colors">English</button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-soft-pink transition-colors">한국어</button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-soft-pink transition-colors">中文</button>
                </div>
              )}
            </div>

            {/* User Menu / Login Button */}
            {user ? (
              <div className="relative">
                <button
                  className="flex items-center gap-2 px-3 py-1.5 border border-border-gray rounded-full text-sm hover:bg-soft-pink transition-colors"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <User size={16} />
                  <span className="hidden sm:inline">{user.email.split('@')[0]}</span>
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-border-gray rounded-lg shadow-lg py-1">
                    <Link to="/settings" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-soft-pink transition-colors">
                      <User size={16} />
                      Settings
                    </Link>
                    <hr className="my-1 border-border-gray" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-soft-pink transition-colors text-left"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <Button variant="primary" size="sm">
                  Login
                </Button>
              </Link>
            )}
            
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-gray">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {user ? (
              <>
                {user.userType === 'RETAILER' && (
                  <>
                    <MobileNavLink to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</MobileNavLink>
                    <MobileNavLink to="/brands" onClick={() => setIsMenuOpen(false)}>Brands</MobileNavLink>
                    <MobileNavLink to="/orders" onClick={() => setIsMenuOpen(false)}>Orders</MobileNavLink>
                    <MobileNavLink to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</MobileNavLink>
                  </>
                )}
                {user.userType === 'TEAM_MEMBER' && (
                  <>
                    <MobileNavLink to="/admin/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</MobileNavLink>
                    <MobileNavLink to="/admin/brands" onClick={() => setIsMenuOpen(false)}>Brands</MobileNavLink>
                    <MobileNavLink to="/admin/orders" onClick={() => setIsMenuOpen(false)}>Orders</MobileNavLink>
                    <MobileNavLink to="/admin/retailers" onClick={() => setIsMenuOpen(false)}>Retailers</MobileNavLink>
                    <MobileNavLink to="/admin/messages" onClick={() => setIsMenuOpen(false)}>Messages</MobileNavLink>
                  </>
                )}
              </>
            ) : (
              <>
                <MobileNavLink to="/how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</MobileNavLink>
                <MobileNavLink to="/for-retailers" onClick={() => setIsMenuOpen(false)}>For Retailers</MobileNavLink>
                <MobileNavLink to="/for-brands" onClick={() => setIsMenuOpen(false)}>For Brands</MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "px-4 py-2 rounded-full text-sm transition-all duration-200",
        active 
          ? "bg-soft-pink text-deep-charcoal" 
          : "text-text-primary hover:bg-soft-pink hover:text-deep-charcoal"
      )}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="px-4 py-3 text-text-primary hover:bg-soft-pink rounded-lg transition-colors"
    >
      {children}
    </Link>
  )
}