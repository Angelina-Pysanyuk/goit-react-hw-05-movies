import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-bottom: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  display: flex;
  gap: 10px;
  box-shadow: 0px 3px 3px #d6d6d6;
  & img {
    width: 300px;
    height: 100%;
  }
  & h2 {
    color: #850000;
  }
`;

export const StyledDiv = styled.div`
  margin-bottom: 10px;
  padding-left: 0;
  padding-bottom: 10px;
  display: flex;
  gap: 38px;

  & .info {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
    height: 30px;
    width: 105px;
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
