import faker from 'faker'
import { Entity } from './CustomMap'

export class User implements Entity {
  name: string
  location: {
    lat: number,
    lng: number
  }
  color: string = 'red'

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  showContent(): string {
    return "User Content"
  }
}


