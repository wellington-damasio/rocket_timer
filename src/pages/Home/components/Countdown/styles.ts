import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 12rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 3.2rem 1.5rem;
    border-radius: 8px;
    font-weight: 700;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
`
