import { Outlet } from 'react-router-dom'
import TopBar from '../components/TopBar.jsx'
import BottomNav from '../components/BottomNav.jsx'

function AppLayout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-24 pt-4 md:px-6 lg:px-10">
      <TopBar />
      <main className="mt-4 flex-1 pb-10">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}

export default AppLayout

