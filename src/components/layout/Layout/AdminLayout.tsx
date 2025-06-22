import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { BottomNav } from '../BottomNav'

export function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-light-gray">
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}