import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-left: 20px;
  margin-top: 40px;
  & input {
    margin-right: 10px;
    padding-left: 15px;
    width: 250px;
    height: 30px;
    border: solid 1px #850000;
    border-radius: 4px;
    font-size: 16px;
  }
  & button {
    height: 35px;
    width: 105px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: #850000;
    border-radius: 4px;
    border: solid 1px #850000;
    background-color: white;
    &:hover {
      background-color: #850000;
      color: white;
      cursor: pointer;
    }
  }
`;
