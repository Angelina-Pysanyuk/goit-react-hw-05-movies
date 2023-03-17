import styled from 'styled-components';

export const CastSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ActorList = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  & li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc((100% - 36px) / 4);
    min-width: 200px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);

    & h3 {
      margin: 0;
      margin-bottom: 5px;
      font-size: 22px;
    }
    & p {
      margin: 0;
      margin-bottom: 5px;
      font-size: 18px;
    }
    & img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ActorInfo = styled.div`
  box-sizing: border-box;
  padding: 20px 12px;
  text-align: center;
`;
