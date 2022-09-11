import faker from "faker";
import {Entity } from './CustomMap'

export class Company implements Entity {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red'

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  
  }

  showContent(): string {
    return `
    <div>
      <h2>Name: ${this.companyName}</h2>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}

