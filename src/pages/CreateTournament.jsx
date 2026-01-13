import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sports } from '../data/mockData.js'

const formatOptions = [
  { id: 'single-elimination', label: 'Loại trực tiếp', desc: 'Thua một trận là bị loại' },
  { id: 'round-robin', label: 'Vòng tròn', desc: 'Mỗi đội gặp nhau một lần' },
  { id: 'league', label: 'Giải đấu', desc: 'Thi đấu theo bảng và vòng loại' },
]

const initial = {
  name: '',
  sport: 'Badminton',
  format: 'single-elimination',
  date: '',
  time: '',
  location: '',
  entryFee: '',
  maxTeams: '',
  description: '',
}

function CreateTournament() {
  const navigate = useNavigate()
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would save to backend/localStorage
    console.log('Tournament created:', form)
    setStatus('created')
    setTimeout(() => {
      setStatus('')
      navigate('/app/tournaments')
    }, 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-emerald-400">Tạo giải đấu</p>
          <h1 className="text-xl font-semibold text-slate-50">
            Tạo giải đấu mới
          </h1>
          <p className="text-sm text-slate-400">
            Tạo giải đấu và mời các đội tham gia.
          </p>
        </div>
        {status === 'created' && (
          <div className="pill border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
            Đã tạo! Đang chuyển hướng...
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="card grid gap-4 border-white/10 bg-surface-2 md:grid-cols-2"
      >
        <div className="space-y-3 md:col-span-2">
          <label className="text-sm text-slate-300">Tên giải đấu *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Ví dụ: Giải Cầu Lông Mùa Xuân 2026"
            className="w-full rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="space-y-3">
          <label className="text-sm text-slate-300">Môn thể thao *</label>
          <div className="grid grid-cols-2 gap-2">
            {sports.map((sport) => (
              <button
                type="button"
                key={sport.id}
                onClick={() => setForm({ ...form, sport: sport.name })}
                className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-left text-sm font-semibold transition ${
                  form.sport === sport.name
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-100'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-white/30'
                }`}
              >
                <span className="text-lg">{sport.icon}</span>
                {sport.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm text-slate-300">Format thi đấu *</label>
          <div className="space-y-2">
            {formatOptions.map((format) => (
              <button
                type="button"
                key={format.id}
                onClick={() => setForm({ ...form, format: format.id })}
                className={`w-full rounded-xl border px-3 py-2 text-left text-sm transition ${
                  form.format === format.id
                    ? 'border-emerald-400 bg-emerald-500/10 text-emerald-100'
                    : 'border-white/10 bg-white/5 text-slate-200 hover:border-white/30'
                }`}
              >
                <div className="font-semibold">{format.label}</div>
                <div className="text-xs text-slate-400">{format.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Ngày *</label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Giờ *</label>
            <input
              type="time"
              required
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-300">Địa điểm *</label>
          <input
            type="text"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            placeholder="Tên sân / địa chỉ"
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-300">Lệ phí đăng ký *</label>
          <input
            type="number"
            min={0}
            required
            value={form.entryFee}
            onChange={(e) =>
              setForm({ ...form, entryFee: e.target.valueAsNumber })
            }
            placeholder="0 nếu miễn phí"
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-300">Số đội tối đa *</label>
          <input
            type="number"
            min={2}
            required
            value={form.maxTeams}
            onChange={(e) =>
              setForm({ ...form, maxTeams: e.target.valueAsNumber })
            }
            placeholder="Ví dụ: 8, 16, 32"
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="grid gap-2 md:col-span-2">
          <label className="text-sm text-slate-300">Mô tả</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Mô tả về giải đấu, thể lệ, giải thưởng..."
            rows={4}
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="flex items-end justify-end gap-2 md:col-span-2">
          <button
            type="button"
            onClick={() => navigate('/app/tournaments')}
            className="secondary-btn px-6 py-3 text-base"
          >
            Hủy
          </button>
          <button type="submit" className="primary-btn px-6 py-3 text-base">
            Tạo giải đấu
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTournament
