const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
]
export const convertString2LongDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
export const convert2LongDate = (s: string) => {
  const d = new Date(s)
  const month = MONTHS[d.getMonth()]
  const _date = d.getDate()
  const date =
    _date === 1 ? _date + 'st' : _date === 2 ? _date + 'nd' : _date + 'th'
  return month + ' ' + date + ', ' + d.getFullYear()
}
export const calculatePastTime = (date: string | undefined) => {
  return date
}

export const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString))
  } catch (e) {
    return false
  }
}
