import { matches } from '../data/mockData.js'
import MatchCard from '../components/MatchCard.jsx'

function Matches() {
  const sorted = [...matches].sort(
    (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime(),
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-emerald-300">Khám phá</p>
          <h1 className="text-xl font-semibold text-slate-50">Tất cả trận sắp diễn ra</h1>
          <p className="text-sm text-slate-400">Giữ chỗ trước khi full slot.</p>
        </div>
        <div className="pill border-white/15 bg-white/10 text-emerald-200">
          Gợi ý người chơi gần bạn
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {sorted.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  )
}

export default Matches

