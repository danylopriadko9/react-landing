import styled from 'styled-components';
import { Link } from 'react-scroll';

interface IButton {
  primary?: boolean;
  big?: boolean;
  dark?: boolean;
  fontBig?: boolean;
  dark2?: boolean;
}

export const Button = styled(Link)<IButton>`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  white-space: nowrap;
  padding: ${(big) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
    color: ${({ dark2 }) => (dark2 ? '#010606' : '#fff')};
  }
`;
