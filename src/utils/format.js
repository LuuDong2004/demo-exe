export const formatDate = (iso) =>
  new Intl.DateTimeFormat('en', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  }).format(new Date(iso))

export const formatTime = (iso) =>
  new Intl.DateTimeFormat('en', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(iso))

export const formatCurrency = (value) =>
  value === 0 ? 'Miễn phí' : `${value.toFixed(0)}.000đ`

