export interface IStaff {
  name: string
  positions: string[]
  description?: string
  portrait: URL
}

export interface JSONStaff {
  name: string
  positions: string[]
  description?: string
  portrait: string
}

export const toStaffArray = (staff: JSONStaff[]): IStaff[] => {
  if (staff.length > 0 && !staff.find((member) => !member)) {
    return staff.map((member) => toIStaff(member) as IStaff)
  } else return []
}

export const toIStaff = (member?: JSONStaff): IStaff | null => {
  if (member) {
    return {
      name: member.name,
      positions: member.positions,
      description: member.description,
      portrait: new URL(member.portrait)
    } as IStaff
  } else return null
}