import * as S from './styled'

export type ErrorProps = {
  message: string
}

const Error = ({ message }: ErrorProps) => (
  <S.Wrapper>
    <S.Title>Ops! Ocorreu algum :(</S.Title>
    <S.Description>{message}</S.Description>
  </S.Wrapper>
)

export default Error
