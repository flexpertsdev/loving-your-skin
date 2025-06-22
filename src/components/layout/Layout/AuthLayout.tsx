import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-soft-pink to-white">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-light tracking-wider text-deep-charcoal">
              LOVING YOUR SKIN
            </h1>
            <p className="text-text-secondary mt-2">Korean Beauty, Simplified</p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}