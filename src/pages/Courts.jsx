import CourtCard from '../components/CourtCard.jsx'
import { courts } from '../data/mockData.js'

function Courts() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase text-emerald-300">Đặt sân</p>
        <h1 className="text-xl font-semibold text-slate-50">Sân gần bạn</h1>
        <p className="text-sm text-slate-400">
          Chọn giờ và giữ sân cho đội hoặc bạn mới.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {courts.map((court) => (
          <CourtCard key={court.id} court={court} />
        ))}
      </div>
    </div>
  )
}

export default Courts

