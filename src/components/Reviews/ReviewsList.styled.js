import styled from 'styled-components';

export const StyledSection = styled.section`
  & ul {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  & li {
    padding: 20px;
    border: solid 1px #850000;
    border-radius: 4px;

    & .author {
      font-size: 26px;
      font-weight: 600;
      color: #850000;
    }
    & .content {
      font-size: 16px;
    }
    & p {
      margin-left: 0;
    }
  }
`;
