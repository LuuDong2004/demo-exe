import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { matches } from '../data/mockData.js'
import PlayerStack from '../components/PlayerStack.jsx'
import { formatCurrency, formatDate, formatTime } from '../utils/format.js'

function MatchDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const match = useMemo(() => matches.find((m) => m.id === id), [id])
  const [joined, setJoined] = useState(false)

  if (!match) {
    return (
      <div className="space-y-4">
        <p className="text-slate-300">Không tìm thấy trận.</p>
        <Link to="/app/matches" className="secondary-btn w-fit">
          Quay lại danh sách
        </Link>
      </div>
    )
  }

  const spotsLeft = Math.max(match.maxPlayers - match.players.length - (joined ? 1 : 0), 0)

  return (
    <div className="space-y-5">
      <button onClick={() => navigate(-1)} className="secondary-btn">
        ← Quay lại
      </button>

      <div className="card border-white/10 bg-surface-2">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="pill border-white/20 bg-white/10">{match.sport}</div>
            <h1 className="mt-3 text-2xl font-semibold text-slate-50">{match.title}</h1>
            <p className="text-sm text-slate-400">{match.location}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="pill border-white/10 bg-white/5">{match.level}</span>
              <span className="pill border-white/10 bg-white/5">{match.surface}</span>
              <span className="pill border-white/10 bg-white/5">Chủ trận: {match.host}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right">
            <div className="text-xs uppercase text-slate-400">Thời gian</div>
            <div className="text-base font-semibold text-slate-100">
              {formatDate(match.datetime)}
            </div>
            <div className="text-emerald-300">{formatTime(match.datetime)}</div>
            <div className="mt-2 text-xs uppercase text-slate-400">Phí</div>
            <div className="text-base font-semibold text-slate-50">
              {formatCurrency(match.price)}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3">
          <div className="flex items-center gap-3">
            <PlayerStack players={match.players} max={6} />
            <div className="text-sm text-slate-200">
              <div className="font-semibold">
                {match.players.length + (joined ? 1 : 0)}/{match.maxPlayers} đã tham gia
              </div>
              <div className="text-emerald-300">
                {spotsLeft > 0 ? `${spotsLeft} chỗ còn lại` : 'Đủ người • Nhận waitlist'}
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="secondary-btn text-sm">Nhắn cho host</button>
            <button
              onClick={() => setJoined((val) => !val)}
              className={`text-sm font-semibold ${joined ? 'secondary-btn' : 'primary-btn'}`}
            >
              {joined ? 'Rời trận' : 'Tham gia trận'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card border-white/10 bg-surface-2">
          <h3 className="text-lg font-semibold text-slate-50">Người chơi</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {match.players.map((player) => (
              <li
                key={player.id}
                className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`grid h-9 w-9 place-items-center rounded-full text-xs font-semibold text-white ${player.color}`}
                  >
                    {player.avatar}
                  </div>
                  <div>{player.name}</div>
                </div>
                <span className="text-xs text-slate-400">Sẵn sàng</span>
              </li>
            ))}
            {joined && (
              <li className="flex items-center justify-between rounded-xl bg-emerald-500/10 px-3 py-2 text-emerald-100">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 text-xs font-semibold text-slate-900">
                    YOU
                  </div>
                  <div>Bạn</div>
                </div>
                <span className="text-xs font-semibold text-emerald-200">Đã tham gia</span>
              </li>
            )}
          </ul>
        </div>
        <div className="card border-white/10 bg-surface-2">
          <h3 className="text-lg font-semibold text-slate-50">Địa điểm & lưu ý</h3>
          <p className="mt-2 text-sm text-slate-300">
            Có mặt trước 10 phút để khởi động. Mang vợt/giày riêng; bóng/shuttle được chuẩn bị. Có
            bãi xe và nước miễn phí.
          </p>
          <div className="mt-3 rounded-xl bg-white/5 p-3 text-sm text-slate-200">
            <div className="font-semibold">Gặp nhau tại quầy lễ tân</div>
            <div className="text-slate-400">Số sân sẽ gửi trước giờ chơi 30 phút.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MatchDetail

