import styled from 'styled-components';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 880px) {
    margin: 0 auto;
    padding: 15px;
    width: 100%;
    max-width: 100%;
  }
`;

export default QuizContainer;