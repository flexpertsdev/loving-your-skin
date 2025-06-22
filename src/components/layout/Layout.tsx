import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Package, ShoppingCart, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/MockAuthContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import Button from '@/components/ui/Button';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItems = [
    { path: '/dashboard', label: t('nav.dashboard'), icon: Home },
    { path: '/brands', label: t('nav.brands'), icon: Package },
    { path: '/products', label: t('nav.products'), icon: Package },
    { path: '/orders', label: t('nav.orders'), icon: FileText },
    { path: '/cart', label: t('nav.cart'), icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between bg-white border-b border-neutral-border h-16 px-6">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-light tracking-wider text-deep-charcoal">
            {t('common.lovingYourSkin')}
          </Link>
          
          {user && (
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-neutral-dark hover:text-primary transition-colors px-3 py-2 rounded-full hover:bg-primary-light ${
                    isActive(item.path) ? 'bg-primary-light text-primary' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-secondary">
                {user.companyName || user.name}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
              >
                {t('nav.logout')}
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button size="sm">{t('nav.login')}</Button>
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      {user && (
        <nav className="fixed bottom-0 inset-x-0 bg-white border-t border-neutral-border md:hidden z-50">
          <div className="grid grid-cols-5 h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center text-neutral-medium hover:text-primary ${
                    isActive(item.path) ? 'text-primary' : ''
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={`flex-1 ${user ? 'pb-16 md:pb-0' : ''}`}>
        {children}
      </main>
    </div>
  );
};