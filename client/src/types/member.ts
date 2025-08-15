export type Member = {
  id: string
  displayName: string
  gender: string
  dateOfBirth: string
  created: string
  lastActive: string
  description?: string
  city: string
  country: string
  imageUrl?: string
}

export type Photo = {
  id: number
  publicUrl: any
  url: string
  memberId: string
}
