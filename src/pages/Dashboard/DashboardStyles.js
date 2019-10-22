import styled, { css } from 'styled-components';

const defaultFont = css`
  color: #282a36;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;

  @media (max-width: 767px) {
    padding: 5px;
  }
`;

export const Title = styled.h2`
  ${defaultFont}
  text-align: center;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background: #f6f6f6;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

export const FilmLetter = styled.h5``;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
