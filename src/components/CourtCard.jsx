import { formatCurrency } from '../utils/format.js'

function CourtCard({ court }) {
  return (
    <div className="card flex flex-col gap-3 border border-white/10 bg-surface-2">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-50">{court.name}</h3>
          <p className="text-sm text-slate-400">{court.location}</p>
        </div>
        <div className="rounded-xl bg-white/10 px-3 py-2 text-right">
          <div className="text-xs uppercase text-slate-400">Giá</div>
          <div className="text-sm font-semibold text-slate-100">
            {formatCurrency(court.pricePerHour)}/giờ
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <span className="pill border-white/10 bg-white/10">{court.type}</span>
          <span className="pill border-white/10 bg-white/5">⭐ {court.rating}</span>
        </div>
        <button className="primary-btn text-xs font-semibold">Đặt sân</button>
      </div>
    </div>
  )
}

export default CourtCard

