import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Register() {
  const { register } = useAuth()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    register(form)
  }

  return (
    <div className="grid min-h-screen place-items-center bg-surface px-4 text-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-surface-2/90 p-6 shadow-card backdrop-blur">
        <h1 className="text-2xl font-semibold">Tạo tài khoản</h1>
        <p className="mt-1 text-sm text-slate-400">Gia nhập PlayMate và không bỏ lỡ trận nào.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Tên</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              placeholder="Tên của bạn"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Mật khẩu</label>
            <input
              type="password"
              required
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full rounded-xl border border-white/10 bg-surface-3 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="primary-btn w-full justify-center">
            Đăng ký
          </button>
        </form>
        <p className="mt-4 text-sm text-slate-400">
          Đã có tài khoản?{' '}
          <Link className="text-emerald-300" to="/login">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register

