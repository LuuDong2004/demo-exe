import { Link } from 'react-router-dom'

function Logo({ to = '/', compact = false }) {
  return (
    <Link to={to} className="flex items-center gap-2 text-lg font-semibold tracking-tight">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 text-slate-900 shadow-lg shadow-emerald-500/25">
        PM
      </div>
      {!compact && (
        <div className="leading-tight">
          <div className="text-sm text-slate-200">PlayMate</div>
          <div className="text-xs text-slate-400">Chơi vui hơn, cùng nhau.</div>
        </div>
      )}
    </Link>
  )
}

export default Logo

