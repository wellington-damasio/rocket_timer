import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 3.5rem;
    width: 100%;
    max-width: 50rem;
  }
`

const BaseButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;

  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-weight: 700;

  cursor: pointer;

  color: ${(props) => props.theme['gray-100']};
`

export const StartCountdownButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['green-500']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
