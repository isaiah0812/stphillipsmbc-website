export interface IEvent {
  name: string
  description: string
  startTime: Date
  endTime: Date
  location: string
}

interface ITimedEventList {
  date: Date
  events: IEvent[]
  sortedByTime: () => IEvent[]
  addEvent: (event: IEvent) => void
  removeFirstEvent: () => void
}

export class TimedEventList implements ITimedEventList {
  date: Date
  events: IEvent[]
  
  constructor(date: Date, events: IEvent[]) {
    this.date = date
    this.events = events
  }

  sortedByTime = (): IEvent[] => sortByStart(this.events)
  addEvent = (event: IEvent): void => {
    this.events.push(event)
  }

  removeFirstEvent = (): void => {
    this.events = this.events.slice(1, this.events.length)
  }

  static copy = (other: TimedEventList): TimedEventList => {
    return new TimedEventList(other.date, other.events)
  }
}

// TODO: Figure out why addEvent replaces event instead of adds it
export const toTimedEventLists = (events: IEvent[]): TimedEventList[] => {
  let result: TimedEventList[] = []
  for (const event of events) {
    const eventList = result.find((eventList) => eventList.date.toLocaleDateString("en-US", { timeZone: 'UTC' }) === event.startTime.toLocaleDateString("en-US", { timeZone: 'UTC' }))

    if (eventList) {
      eventList?.addEvent(event)
    } else {
      result.push(new TimedEventList(event.startTime, [event]))
    }
  }

  return result
}

export const sortEventLists = (eventLists: TimedEventList[]): TimedEventList[] => {
  if (eventLists.length <= 1) return eventLists

  const partition = Math.floor(eventLists.length / 2)
  const a = sortEventLists(eventLists.slice(0, partition))
  const b = sortEventLists(eventLists.slice(partition, eventLists.length))

  return mergeEventLists(a, b)
}

const mergeEventLists = (a: TimedEventList[], b: TimedEventList[]): TimedEventList[] => {
  let aPointer = 0
  let bPointer = 0

  const result = []

  while (aPointer < a.length && bPointer < b.length) {
    if (a[aPointer].date <= b[bPointer].date) {
      result.push(a[aPointer])
      aPointer++
    } else {
      result.push(b[bPointer])
      bPointer++
    }
  }

  if (aPointer < a.length) result.push(...a.slice(aPointer, a.length))
  else result.push(...b.slice(bPointer, b.length))

  return result
}

export const sortByStart = (events: IEvent[]): IEvent[] => {
  if (events.length <= 1) return events

  const partition = Math.floor(events.length / 2)

  const a = sortByStart(events.slice(0, partition))
  const b = sortByStart(events.slice(partition, events.length))

  return merge(a, b)
}

const merge = (a: IEvent[], b: IEvent[]): IEvent[] => {
  let aPointer = 0
  let bPointer = 0

  const result = []

  while (aPointer < a.length && bPointer < b.length) {
    if (a[aPointer].startTime <= b[bPointer].startTime) {
      result.push(a[aPointer])
      aPointer++
    } else {
      result.push(b[bPointer])
      bPointer++
    }
  }

  if (aPointer < a.length) result.push(...a.slice(aPointer, a.length))
  else result.push(...b.slice(bPointer, b.length))

  return result
}