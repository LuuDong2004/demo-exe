import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { useAuth } from '../context/AuthContext.jsx'

function TopBar() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const showSearch = location.pathname.startsWith('/app')

  return (
    <header className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-surface-2/80 px-4 py-3 shadow-card backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <Logo compact />
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-200 md:flex">
          <span className="text-emerald-300">Live</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>34 trận đang diễn ra gần bạn</span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/app/create"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:brightness-110 md:flex"
          >
            + Tạo trận
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 border border-white/10">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-sm font-semibold text-slate-900 grid place-items-center shadow">
              {user?.name?.slice(0, 2)?.toUpperCase() || 'ME'}
            </div>
            <div className="hidden leading-tight sm:block text-slate-100">
              <div className="text-sm font-semibold">{user?.name || 'Khách'}</div>
              <div className="text-xs text-slate-400">{user?.email || 'Chưa đăng nhập'}</div>
            </div>
            {user && (
              <button
                onClick={logout}
                className="text-xs font-semibold text-emerald-300 underline-offset-2 hover:underline"
              >
                Đăng xuất
              </button>
            )}
          </div>
        </div>
      </div>
      {showSearch && (
        <div className="flex flex-wrap gap-2 rounded-xl bg-white/5 p-2 border border-white/10">
          <input
            placeholder="Tìm trận, môn, người chơi..."
            className="min-w-[240px] flex-1 rounded-xl border border-white/10 bg-surface-3 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
          <div className="flex flex-wrap gap-2">
            {['Ngay', 'Tối nay', 'Cuối tuần', 'Mới chơi'].map((chip) => (
              <span
                key={chip}
                className="pill cursor-pointer border-white/20 bg-white/10 text-slate-200 hover:border-white/40"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default TopBar

