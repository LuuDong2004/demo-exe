import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { tournaments, sports } from '../data/mockData.js'
import TournamentCard from '../components/TournamentCard.jsx'
import TeamRegistrationModal from '../components/TeamRegistrationModal.jsx'

function Tournaments() {
  const [filter, setFilter] = useState('all')
  const [selectedTournament, setSelectedTournament] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const filteredTournaments = useMemo(() => {
    if (filter === 'all') return tournaments
    return tournaments.filter((t) => t.sport.toLowerCase() === filter)
  }, [filter])

  const handleJoinClick = (tournament) => {
    if (tournament.status === 'full') {
      alert('Giải đấu đã đầy. Vui lòng đăng ký waitlist.')
      return
    }
    setSelectedTournament(tournament)
    setShowModal(true)
  }

  const handleSubmitRegistration = (teamData) => {
    console.log('Team registration:', teamData, selectedTournament)
    alert(`Đã đăng ký đội "${teamData.name}" thành công!`)
    setShowModal(false)
    setSelectedTournament(null)
  }

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-surface-2 to-cyan-500/10 p-5 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase text-emerald-400">Giải đấu</p>
            <h2 className="text-xl font-semibold text-slate-50">
              Tham gia giải đấu thể thao
            </h2>
            <p className="text-sm text-slate-400">
              Đăng ký đội và thi đấu với các đội khác
            </p>
          </div>
          <Link to="/app/tournaments/create" className="primary-btn">
            + Tạo giải đấu
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-surface-2 p-4">
        <div className="mb-4 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`pill ${
              filter === 'all'
                ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300'
                : 'border-white/10 bg-white/5 text-slate-400'
            }`}
          >
            Tất cả
          </button>
          {sports.map((sport) => (
            <button
              key={sport.id}
              onClick={() => setFilter(sport.id)}
              className={`pill ${
                filter === sport.id
                  ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300'
                  : 'border-white/10 bg-white/5 text-slate-400'
              }`}
            >
              {sport.icon} {sport.name}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {filteredTournaments.map((tournament) => (
            <TournamentCard
              key={tournament.id}
              tournament={tournament}
              onJoin={() => handleJoinClick(tournament)}
            />
          ))}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="py-12 text-center text-slate-400">
            Không có giải đấu nào. Hãy tạo giải đấu đầu tiên!
          </div>
        )}
      </section>

      {showModal && selectedTournament && (
        <TeamRegistrationModal
          tournament={selectedTournament}
          onClose={() => {
            setShowModal(false)
            setSelectedTournament(null)
          }}
          onSubmit={handleSubmitRegistration}
        />
      )}
    </div>
  )
}

export default Tournaments
