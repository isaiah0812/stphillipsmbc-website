export interface IStaff {
  name: string
  positions: string[]
  description: string
  portrait: URL
}

interface JSONStaff {
  name: string
  positions: string[]
  description: string
  portrait: string
}

export const toStaffArray = (staff: JSONStaff[]): IStaff[] => {
  return staff.map((member) => {
    return {
      name: member.name,
      positions: member.positions,
      description: member.description,
      portrait: new URL(member.portrait)
    } as IStaff
  })
}