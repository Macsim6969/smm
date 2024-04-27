export interface Users {
  activeOffers: any
  completePeyment: any
  offers: any
  profile: any
}

export interface UsersList {
  name?: string
  userID?: string
  email: string
  password: string
  address?: string
  number?: string
  image?: string
  rules?: 'manager' | 'brand' | 'afiliat'
  clicks?: number
  decommissioned?: number
  balanc?: number
}