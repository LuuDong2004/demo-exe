import { Link } from 'react-router-dom'
import { matches, sports } from '../data/mockData.js'
import MatchCard from '../components/MatchCard.jsx'

function Landing() {
  const featured = matches.slice(0, 3)

  return (
    <div className="min-h-screen bg-surface text-slate-50">
      <div className="absolute inset-0 bg-fade-gradient opacity-70" aria-hidden />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 md:px-6 lg:px-10">
        <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-surface-2/80 p-6 shadow-card backdrop-blur md:flex-row md:items-center md:justify-between md:p-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-200">
              PlayMate · Chơi thể thao mọi lúc
            </div>
            <h1 className="text-3xl font-bold leading-tight text-slate-50 sm:text-4xl md:text-5xl">
              Tìm người chơi thể thao gần bạn
            </h1>
            <p className="text-lg text-slate-300">
              Đặt sân, tham gia trận, gặp đồng đội hoặc book huấn luyện viên. Hỗ trợ cầu lông,
              bóng đá, chạy bộ, tennis,pickleball và nhiều hơn nữa.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/app/home" className="primary-btn text-base">
                Tìm trận ngay
              </Link>
              <Link to="/app/create" className="secondary-btn text-base">
                Tạo trận mới
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="pill border-white/10 bg-white/5">Giữ chỗ</span>
              <span className="pill border-white/10 bg-white/5">Đặt sân</span>
              <span className="pill border-white/10 bg-white/5">HLV cá nhân</span>
              <span className="pill border-white/10 bg-white/5">Cộng đồng</span>
            </div>
          </div>
          <div className="glass grid w-full max-w-sm gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-semibold text-emerald-200">Môn nổi bật</div>
            <div className="grid grid-cols-2 gap-3">
              {sports.map((sport) => (
                <div
                  key={sport.id}
                  className={`rounded-xl bg-gradient-to-br ${sport.gradient} px-4 py-4 text-slate-900 shadow-soft`}
                >
                  <div className="text-2xl">{sport.icon}</div>
                  <div className="mt-2 text-sm font-semibold">{sport.name}</div>
                  <div className="text-xs text-slate-800">23 trận đang mở</div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-surface-2/70 p-6 shadow-card md:grid-cols-3">
          {[
            { title: 'Khám phá', text: 'Xem trận gần bạn, giờ chơi và giá ngay lập tức.' },
            { title: 'Giữ chỗ', text: 'Chọn slot, trò chuyện với người chơi, chuẩn bị sẵn sàng.' },
            { title: 'Ra sân', text: 'Theo dõi ai tham gia, đặt sân hoặc đặt HLV.' },
          ].map((step, idx) => (
            <div key={step.title} className="card border-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-semibold text-emerald-200">
                {idx + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-slate-50">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.text}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-50">Trận sắp diễn ra</h2>
              <p className="text-sm text-slate-400">Tham gia nhanh trước khi hết chỗ</p>
            </div>
            <Link to="/app/home" className="secondary-btn">
              Xem tất cả
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((match) => (
              <MatchCard key={match.id} match={match} highlight />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Landing

