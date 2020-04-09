import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
export const Button = styled.button.attrs((props) => ({ fontSize: '1.25rem', ...props }))<TypographyProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.oceanBlue};
  ${typography}
  padding:0.5rem 2rem;
  border: none;
  box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.oceanBlue}, -2px -2px 0 ${({ theme }) => theme.colors.oceanBlue};
  font-weight: bold;
  transition: box-shadow 300ms, color 200ms;
  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 4px -4px 0 ${({ theme }) => theme.colors.oceanBlue}, -4px 4px 0 ${({ theme }) => theme.colors.oceanBlue};
    background-size: 20%;
  }
  &:active {
    box-shadow: 0 0 0 ${({ theme }) => theme.colors.oceanBlue}, 0 0 0 ${({ theme }) => theme.colors.oceanBlue},
      inset 5em 0 ${({ theme }) => theme.colors.oceanBlue}, inset -5em 0 ${({ theme }) => theme.colors.oceanBlue};
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }

  /* will remove */
  margin: 1rem;
`
