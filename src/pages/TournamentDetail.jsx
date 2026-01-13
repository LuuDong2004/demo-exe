import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { tournaments } from '../data/mockData.js'
import { formatCurrency, formatDate, formatTime } from '../utils/format.js'
import TeamRegistrationModal from '../components/TeamRegistrationModal.jsx'

function TournamentDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tournament = useMemo(
    () => tournaments.find((t) => t.id === id),
    [id],
  )
  const [showModal, setShowModal] = useState(false)

  if (!tournament) {
    return (
      <div className="space-y-4">
        <p className="text-slate-300">Không tìm thấy giải đấu.</p>
        <Link to="/app/tournaments" className="secondary-btn w-fit">
          Quay lại danh sách
        </Link>
      </div>
    )
  }

  const spotsLeft = tournament.maxTeams - tournament.registeredTeams
  const isFull = tournament.status === 'full'
  const isOpen = tournament.status === 'open'

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

  const handleJoin = () => {
    if (isFull) {
      alert('Giải đấu đã đầy. Vui lòng đăng ký waitlist.')
      return
    }
    setShowModal(true)
  }

  const handleSubmitRegistration = (teamData) => {
    console.log('Team registration:', teamData, tournament)
    alert(`Đã đăng ký đội "${teamData.name}" thành công!`)
    setShowModal(false)
  }

  return (
    <div className="space-y-5">
      <button onClick={() => navigate(-1)} className="secondary-btn">
        ← Quay lại
      </button>

      <div className="card border-white/10 bg-surface-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{getSportIcon(tournament.sport)}</span>
              <span className="pill border-white/10 bg-white/5">
                {tournament.sport}
              </span>
              <span className="pill border-white/10 bg-white/5">
                {tournament.formatLabel}
              </span>
              {isFull ? (
                <span className="pill border-red-400/40 bg-red-500/10 text-red-300">
                  Đã đầy
                </span>
              ) : (
                <span className="pill border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
                  Đang mở
                </span>
              )}
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-slate-50">
              {tournament.name}
            </h1>
            <p className="text-sm text-slate-400">{tournament.location}</p>
            <p className="mt-2 text-sm text-slate-300">
              {tournament.description}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-surface-3 px-4 py-3 text-right">
            <div className="text-xs uppercase text-slate-500">Ngày</div>
            <div className="text-base font-semibold text-slate-100">
              {formatDate(tournament.date)}
            </div>
            <div className="text-sm text-emerald-400">
              {formatTime(tournament.date)}
            </div>
            <div className="mt-3 text-xs uppercase text-slate-500">Lệ phí</div>
            <div className="text-base font-semibold text-emerald-400">
              {formatCurrency(tournament.entryFee)}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-surface-3 px-4 py-3">
          <div className="flex items-center gap-4 text-sm">
            <div>
              <div className="text-xs text-slate-500">Đội đã đăng ký</div>
              <div className="font-semibold text-slate-100">
                {tournament.registeredTeams}/{tournament.maxTeams}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Chỗ còn lại</div>
              <div className="font-semibold text-slate-100">
                {isFull ? '0' : spotsLeft}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-500">Ban tổ chức</div>
              <div className="font-semibold text-slate-100">
                {tournament.organizer}
              </div>
            </div>
          </div>
          {isOpen && (
            <button onClick={handleJoin} className="primary-btn text-sm">
              Đăng ký tham gia
            </button>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card border-white/10 bg-surface-2">
          <h3 className="text-lg font-semibold text-slate-50">Đội đã đăng ký</h3>
          <div className="mt-3 space-y-2">
            {tournament.teams.map((team) => (
              <div
                key={team.id}
                className="rounded-xl border border-white/10 bg-surface-3 px-3 py-2"
              >
                <div className="font-semibold text-slate-100">{team.name}</div>
                <div className="mt-1 text-xs text-slate-400">
                  {team.members.join(', ')}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  Đăng ký: {formatDate(team.registeredAt)}
                </div>
              </div>
            ))}
            {tournament.teams.length === 0 && (
              <div className="py-4 text-center text-sm text-slate-400">
                Chưa có đội nào đăng ký
              </div>
            )}
          </div>
        </div>

        <div className="card border-white/10 bg-surface-2">
          <h3 className="text-lg font-semibold text-slate-50">Thể lệ & Giải thưởng</h3>
          <div className="mt-3 space-y-4">
            <div>
              <div className="text-sm font-semibold text-slate-200">Thể lệ:</div>
              <ul className="mt-2 space-y-1 text-xs text-slate-400">
                {tournament.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3">
              <div className="text-sm font-semibold text-emerald-300">
                Giải thưởng:
              </div>
              <div className="mt-1 text-xs text-slate-300">{tournament.prize}</div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <TeamRegistrationModal
          tournament={tournament}
          onClose={() => setShowModal(false)}
          onSubmit={handleSubmitRegistration}
        />
      )}
    </div>
  )
}

export default TournamentDetail
