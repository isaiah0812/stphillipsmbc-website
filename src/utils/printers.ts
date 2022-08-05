export const printDateString = (date: Date) => {
  return date.toLocaleDateString("en-US", { dateStyle: 'full', timeZone: 'UTC' })
}

export const printTimeString = (date: Date) => {
  return date.toLocaleTimeString("en-US", { timeStyle: 'short', timeZone: 'UTC' })
}

export const printDateTimeString = (date: Date) => {
  return date.toLocaleString("en-US", { dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC' }).replace(' at ', ', ')
}