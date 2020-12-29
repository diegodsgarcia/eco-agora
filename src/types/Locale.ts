import { Camera } from './Camera'

export type Locale = {
  name: string
  externalCode: string
  cameras: Camera[]
}

export type LocaleAPI = {
  Cameras: {
    DisplayName: string
    ExternalCode: string
    Cameras: {
      CameraID: number
      Description: string
      KM: number
      Url: string
      LastUpdate: string
    }[]
  }[]
}
