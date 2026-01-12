import { Link } from 'react-router-dom'
import PlayerStack from './PlayerStack.jsx'
import { formatCurrency, formatDate, formatTime } from '../utils/format.js'

function MatchCard({ match, onJoin, highlight = false }) {
  const joined = match.players.length
  const spotsLeft = Math.max(match.maxPlayers - joined, 0)

  return (
    <div
      className={`card relative overflow-hidden border border-white/10 transition hover:border-emerald-400/50 ${
        highlight ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-surface-2'
      }`}
    >
      <div className="absolute inset-0 bg-grid-soft opacity-30" aria-hidden />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="pill border-white/20 bg-white/10 text-emerald-200">{match.sport}</div>
            <h3 className="mt-2 text-lg font-semibold text-slate-50">{match.title}</h3>
            <p className="text-sm text-slate-400">{match.location}</p>
          </div>
          <div className="rounded-xl bg-white/5 px-3 py-2 text-right">
            <div className="text-xs uppercase text-slate-400">Thời gian</div>
            <div className="text-sm font-semibold text-slate-100">
              {formatDate(match.datetime)}
            </div>
            <div className="text-sm text-emerald-200">{formatTime(match.datetime)}</div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2">
          <div className="flex items-center gap-3">
            <PlayerStack players={match.players} />
            <div className="text-xs text-slate-300">
              <div className="font-semibold text-slate-100">
                {joined}/{match.maxPlayers} người đã tham gia
              </div>
              <div className="text-emerald-300">
                {spotsLeft > 0 ? `${spotsLeft} chỗ còn lại` : 'Đủ người • Nhận waitlist'}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-400">Phí</div>
            <div className="text-sm font-semibold text-slate-100">
              {formatCurrency(match.price)}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2 text-xs text-slate-400">
            <span className="pill border-white/5 bg-white/5">{match.level}</span>
            <span className="pill border-white/5 bg-white/5">{match.surface}</span>
            <span className="pill border-white/5 bg-white/5">Chủ trận · {match.host}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to={`/app/match/${match.id}`}
              className="secondary-btn text-xs font-semibold text-slate-100"
            >
              Chi tiết
            </Link>
            <button
              onClick={() => onJoin?.(match)}
              className="primary-btn text-xs font-semibold"
            >
              Tham gia
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchCard

