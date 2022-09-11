import { User } from './User'
import { Company } from './Company'

//REFACTOR TWO (ABSTRACT ARGUMENT ANNOTATION INTO INTERFACE)
export interface Entity {
  location: {
    lat: number,
    lng: number
  }
  name?: string,
  companyName?: string,
  catchPhrase?: string,
  showContent(): string,
  color: string
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  }
  //REFACTOR ONE (COMMONIZE THE CLASS ARGUMENT BY SPECIFICITY )
  addMarkerWrong(entity: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng
      }
    })
    // entity.catchPhrase // INACCESSIBLE
  }

  //REFACTOR TWO (REQUIRE THE COMMON ATTRIBUTES (NEEDED FOR IMPLEMENTATION))
  addMarker(entity: Entity) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng
      }
    })
   entity.name ? console.log(entity.name) : null
   entity.companyName ? console.log(entity.companyName) : null

   marker.addListener('click', () => {
    const infoWindow = new google.maps.InfoWindow({
      content: entity.showContent()
    })
    infoWindow.open(this.googleMap, marker)
   })
  }

  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }
  //   })
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }
}