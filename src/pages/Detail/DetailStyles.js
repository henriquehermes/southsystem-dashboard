import styled, { keyframes } from 'styled-components';

const defaultAnimation = keyframes`
from {
  opacity: 0;
}

to{
  opacity: 1;
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  animation: ${defaultAnimation} 0.5s forwards;
`;

export const Button = styled.button`
  cursor: pointer;
  border-width: 0px;
  background: transparent;
  margin-right: 15px;

  & > img {
    width: 35px;
    height: 35px;
  }
`;

export const Title = styled.h2`
  color: #440099;
  text-transform: uppercase;
`;

export const Body = styled.div``;

export const BodyTitle = styled.h4`
  color: #440099;
  margin: 5px 0px;
  animation: ${defaultAnimation} 0.5s backwards;
  animation-delay: 0.5s;
`;

export const BodyDescription = styled.h5`
  font-weight: normal;
  animation: ${defaultAnimation} 0.5s backwards;
  animation-delay: 1s;
  max-width: 700px;
`;
