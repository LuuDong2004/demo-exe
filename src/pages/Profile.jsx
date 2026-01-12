import { useAuth } from '../context/AuthContext.jsx'
import { matches } from '../data/mockData.js'
import { formatDate } from '../utils/format.js'

function Profile() {
  const { user, logout } = useAuth()
  const joined = matches.slice(0, 3)

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-surface-2 p-5 shadow-card md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-lg font-semibold text-slate-900 shadow-lg shadow-emerald-500/20">
            {user?.name?.slice(0, 2).toUpperCase() || 'PM'}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-50">{user?.name || 'Người chơi'}</h1>
            <p className="text-sm text-slate-400">{user?.email}</p>
            <div className="mt-1 pill border-white/10 bg-white/10">Cộng đồng thể thao</div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="secondary-btn">Chỉnh sửa</button>
          <button className="primary-btn" onClick={logout}>
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          { title: 'Matches joined', value: 18 },
          { title: 'Courts booked', value: 7 },
          { title: 'Players met', value: 42 },
        ].map((stat) => (
          <div key={stat.title} className="card border-white/10 bg-surface-2">
            <div className="text-sm text-slate-400">{stat.title}</div>
            <div className="text-2xl font-semibold text-slate-50">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="card border-white/10 bg-surface-2">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-50">Trận của bạn</h3>
            <p className="text-sm text-slate-400">Theo dõi những trận đã tham gia.</p>
          </div>
          <button className="secondary-btn text-sm">Nâng cấp Pro</button>
        </div>
        <div className="mt-4 space-y-3">
          {joined.map((match) => (
            <div
              key={match.id}
              className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-3 text-sm"
            >
              <div>
                <div className="font-semibold text-slate-100">{match.title}</div>
                <div className="text-slate-400">
                  {match.sport} · {formatDate(match.datetime)}
                </div>
              </div>
              <div className="pill border-emerald-200 bg-emerald-500/10 text-xs text-emerald-200">
                Đã xác nhận
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile

