import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'

export function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-light-gray">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}