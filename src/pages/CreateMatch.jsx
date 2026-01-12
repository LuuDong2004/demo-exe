import { useState } from 'react'
import { sports } from '../data/mockData.js'

const initial = {
  sport: 'Badminton',
  date: '',
  time: '',
  location: '',
  price: '',
  maxPlayers: 6,
}

function CreateMatch() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('created')
    setTimeout(() => setStatus(''), 3000)
    setForm(initial)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-emerald-600">Tạo trận</p>
          <h1 className="text-xl font-semibold text-slate-900">Đăng trận của bạn</h1>
          <p className="text-sm text-slate-600">Hiển thị ngay cho người chơi quanh đây.</p>
        </div>
        {status === 'created' && (
          <div className="pill border-emerald-400 bg-emerald-500/10 text-emerald-100">
            Đã tạo! Mọi người sẽ thấy ngay.
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="card grid gap-4 border-white/10 bg-surface-2 md:grid-cols-2"
      >
        <div className="space-y-3">
          <label className="text-sm text-slate-300">Môn</label>
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

        <div className="grid gap-3">
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Ngày</label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-slate-300">Giờ</label>
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
          <label className="text-sm text-slate-300">Địa điểm</label>
          <input
            type="text"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            placeholder="Sân / công viên / sân pickleball"
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-300">Phí (mỗi người)</label>
          <input
            type="number"
            min={0}
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.valueAsNumber })}
            placeholder="0 nếu miễn phí"
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm text-slate-300">Số người tối đa</label>
          <input
            type="number"
            min={2}
            value={form.maxPlayers}
            onChange={(e) => setForm({ ...form, maxPlayers: e.target.valueAsNumber })}
            className="rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none"
          />
        </div>

        <div className="flex items-end justify-end">
          <button type="submit" className="primary-btn px-6 py-3 text-base">
            Đăng trận
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateMatch

