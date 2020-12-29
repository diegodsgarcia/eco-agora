import { Camera } from 'types/Camera'
import { convertDate } from 'utils'

import * as S from './styled'

export type ListCamerasProps = {
  cameras: Camera[]
}

const ListCameras = ({ cameras }: ListCamerasProps) => (
  <S.Wrapper>
    {cameras.map(({ url, description, km, lastUpdate }, i) => (
      <S.Figure key={i}>
        <S.Image src={url} alt={description} title={description} />
        <S.Description>
          <div>{description}</div>
          <div>KM {km}</div>
          <div>{convertDate(lastUpdate)}</div>
        </S.Description>
      </S.Figure>
    ))}
  </S.Wrapper>
)

export default ListCameras
