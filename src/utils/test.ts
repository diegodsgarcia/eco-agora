import { LocaleAPI } from 'types/Locale'
import { buildLocale, convertDate } from 'utils'

test('Should build Locale', () => {
  const mock: LocaleAPI = {
    Cameras: [
      {
        DisplayName: 'Anchieta',
        ExternalCode: 'km 102',
        Cameras: [
          {
            CameraID: 1,
            KM: 12,
            Description: 'km 102',
            LastUpdate: 'Date(1212334324)',
            Url: ''
          }
        ]
      }
    ]
  }

  expect(buildLocale(mock)).toStrictEqual([
    {
      name: mock.Cameras[0].DisplayName,
      externalCode: mock.Cameras[0].ExternalCode,
      cameras: [
        {
          id: mock.Cameras[0].Cameras[0].CameraID,
          km: mock.Cameras[0].Cameras[0].KM,
          description: mock.Cameras[0].Cameras[0].Description,
          lastUpdate: mock.Cameras[0].Cameras[0].LastUpdate,
          url: mock.Cameras[0].Cameras[0].Url
        }
      ]
    }
  ])
})

test('Should build void Locale', () => {
  const mock: LocaleAPI = {
    Cameras: []
  }

  expect(buildLocale(mock)).toStrictEqual([])
})

test('Should be convert to Date', () => {
  const mock = 'Date(1609259906000)'

  expect(convertDate(mock)).toStrictEqual('29/12/2020 13:38:26')
})
