import { useMemo, useState } from 'react'
import { matches, sports } from '../data/mockData.js'
import MatchCard from '../components/MatchCard.jsx'

function Home() {
  const [filter, setFilter] = useState('all')

  const nearbyMatches = useMemo(() => {
    if (filter === 'all') return matches
    return matches.filter((m) => m.sport.toLowerCase() === filter)
  }, [filter])

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-slate-900/40 to-cyan-500/10 p-5 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase text-emerald-300">Trận gần bạn</p>
            <h2 className="text-xl font-semibold text-slate-50">Chọn môn và tham gia</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`pill ${filter === 'all' ? 'border-emerald-400 bg-emerald-500/20' : ''}`}
            >
              Tất cả
            </button>
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => setFilter(sport.id)}
                className={`pill ${filter === sport.id ? 'border-emerald-400 bg-emerald-500/20' : ''}`}
              >
                {sport.icon} {sport.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {nearbyMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </section>
    </div>
  )
}

export default Home

