import { NavLink } from 'react-router-dom'

const links = [
  { to: '/app/home', label: 'Trang chủ', icon: '🏠' },
  { to: '/app/matches', label: 'Trận đấu', icon: '📅' },
  { to: '/app/tournaments', label: 'Giải đấu', icon: '🏆' },
  { to: '/app/create', label: 'Tạo trận', icon: '➕' },
  { to: '/app/profile', label: 'Hồ sơ', icon: '👤' },
]

function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-3 z-40 mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/10 bg-surface-2/90 px-3 py-2 text-sm shadow-card backdrop-blur md:static md:mt-6 md:rounded-xl md:px-4 md:py-3">
      {links.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-1 flex-col items-center gap-1 rounded-xl px-3 py-2 transition ${
              isActive
                ? 'bg-white/10 text-emerald-300 border border-emerald-200/40'
                : 'text-slate-400 hover:text-slate-100'
            }`
          }
        >
          <span className="text-lg">{item.icon}</span>
          <span className="text-[11px] font-semibold">{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav

