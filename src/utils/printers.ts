export const printDateString = (date: Date) => {
  return date.toLocaleDateString("en-US", { dateStyle: 'full', timeZone: 'America/Chicago' })
}

export const printTimeString = (date: Date) => {
  return date.toLocaleTimeString("en-US", { timeStyle: 'short', timeZone: 'America/Chicago' })
}

export const printDateTimeString = (date: Date) => {
  return date.toLocaleString("en-US", { dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Chicago' }).replace(' at ', ', ')
}