import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-soft-pink flex items-center justify-center">
      <Outlet />
    </div>
  );
}