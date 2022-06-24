import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  width: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: none;

  :hover{
    transform:scale(1.1);
  }
`;
