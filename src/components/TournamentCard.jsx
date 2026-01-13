import { Link } from 'react-router-dom'
import { formatCurrency, formatDate, formatTime } from '../utils/format.js'

function TournamentCard({ tournament, onJoin }) {
  const spotsLeft = tournament.maxTeams - tournament.registeredTeams
  const isFull = tournament.status === 'full'
  const isOpen = tournament.status === 'open'

  const getStatusBadge = () => {
    if (isFull) {
      return (
        <span className="pill border-red-400/40 bg-red-500/10 text-red-300">
          Đã đầy
        </span>
      )
    }
    if (isOpen) {
      return (
        <span className="pill border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
          Đang mở
        </span>
      )
    }
    return (
      <span className="pill border-slate-400/40 bg-slate-500/10 text-slate-300">
        Đã đóng
      </span>
    )
  }

  const getSportIcon = (sport) => {
    const icons = {
      Badminton: '🏸',
      Football: '⚽',
      Tennis: '🎾',
      Pickleball: '🏓',
      Running: '🏃',
    }
    return icons[sport] || '🏆'
  }

  return (
    <div className="card relative overflow-hidden border-white/10 bg-surface-2 transition hover:border-emerald-400/40">
      <div className="absolute inset-0 bg-grid-soft opacity-10" aria-hidden />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xl">{getSportIcon(tournament.sport)}</span>
              <span className="pill border-white/10 bg-white/5 text-xs">
                {tournament.sport}
              </span>
              {getStatusBadge()}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-slate-50">
              {tournament.name}
            </h3>
            <p className="text-sm text-slate-400">{tournament.location}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-surface-3 px-3 py-2 text-right">
            <div className="text-xs uppercase text-slate-500">Ngày</div>
            <div className="text-sm font-semibold text-slate-100">
              {formatDate(tournament.date)}
            </div>
            <div className="text-xs text-emerald-400">
              {formatTime(tournament.date)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-surface-3 px-3 py-2">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <div className="text-xs text-slate-500">Đội đã đăng ký</div>
              <div className="font-semibold text-slate-100">
                {tournament.registeredTeams}/{tournament.maxTeams}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Format</div>
              <div className="font-semibold text-slate-100">
                {tournament.formatLabel}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Lệ phí</div>
            <div className="text-sm font-semibold text-emerald-400">
              {formatCurrency(tournament.entryFee)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-slate-400">
            {isFull
              ? 'Đã đầy • Nhận waitlist'
              : `${spotsLeft} chỗ còn lại`}
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={`/app/tournament/${tournament.id}`}
              className="secondary-btn text-xs font-semibold"
            >
              Chi tiết
            </Link>
            {isOpen && (
              <button
                onClick={() => onJoin?.(tournament)}
                className="primary-btn text-xs font-semibold"
              >
                Đăng ký
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentCard
