import { useState } from 'react'

function TeamRegistrationModal({ tournament, onClose, onSubmit }) {
  const [teamName, setTeamName] = useState('')
  const [members, setMembers] = useState(['', ''])

  const handleAddMember = () => {
    setMembers([...members, ''])
  }

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index))
  }

  const handleMemberChange = (index, value) => {
    const updated = [...members]
    updated[index] = value
    setMembers(updated)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const teamData = {
      name: teamName,
      members: members.filter((m) => m.trim() !== ''),
    }
    onSubmit(teamData)
    setTeamName('')
    setMembers(['', ''])
  }

  if (!tournament) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="card w-full max-w-md border-white/20 bg-surface-2">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="text-lg font-semibold text-slate-50">
            Đăng ký tham gia giải đấu
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Tên đội *
            </label>
            <input
              type="text"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              placeholder="Nhập tên đội của bạn"
              className="w-full rounded-xl border border-white/10 bg-surface-3 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Thành viên đội *
            </label>
            <div className="space-y-2">
              {members.map((member, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    required={index < 2}
                    value={member}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                    placeholder={`Thành viên ${index + 1}`}
                    className="flex-1 rounded-xl border border-white/10 bg-surface-3 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                  {members.length > 2 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(index)}
                      className="rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-300 hover:bg-red-500/20"
                    >
                      Xóa
                    </button>
                  )}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={handleAddMember}
              className="mt-2 text-sm text-emerald-400 hover:text-emerald-300"
            >
              + Thêm thành viên
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-surface-3 p-3 text-xs text-slate-400">
            <div className="font-semibold text-slate-300">Thông tin giải đấu:</div>
            <div className="mt-1">{tournament.name}</div>
            <div className="mt-1">
              Lệ phí: {tournament.entryFee === 0 ? 'Miễn phí' : `${tournament.entryFee}.000đ`}
            </div>
            <div className="mt-1">
              Format: {tournament.formatLabel}
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="secondary-btn flex-1 text-sm"
            >
              Hủy
            </button>
            <button type="submit" className="primary-btn flex-1 text-sm">
              Xác nhận đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TeamRegistrationModal
