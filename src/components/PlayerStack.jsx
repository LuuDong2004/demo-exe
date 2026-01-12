function PlayerStack({ players = [], max = 4 }) {
  const visible = players.slice(0, max)
  const remaining = Math.max(players.length - max, 0)

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((player) => (
        <div
          key={player.id}
          className={`grid h-9 w-9 place-items-center rounded-full border-2 border-surface-2 text-xs font-semibold text-white ${player.color}`}
          title={player.name}
        >
          {player.avatar || player.name.slice(0, 2).toUpperCase()}
        </div>
      ))}
      {remaining > 0 && (
        <div className="grid h-9 w-9 place-items-center rounded-full border-2 border-surface-2 bg-white/10 text-xs font-semibold text-slate-100">
          +{remaining}
        </div>
      )}
    </div>
  )
}

export default PlayerStack

