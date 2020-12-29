import { Locale, LocaleAPI } from 'types/Locale'

export const buildLocale = (result: LocaleAPI) => {
  const { Cameras } = result

  return Cameras.map(({ DisplayName, ExternalCode, Cameras }) => ({
    name: DisplayName,
    externalCode: ExternalCode,
    cameras: Cameras.map(({ CameraID, Description, KM, Url, LastUpdate }) => ({
      id: CameraID,
      description: Description,
      km: KM,
      url: Url,
      lastUpdate: LastUpdate
    }))
  })) as Locale[]
}

export const convertDate = (date: string) => {
  const result = date.match(/\d+/i)
  return result?.length
    ? new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format(new Date(Number(result[0])))
    : null
}
