import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 1.8rem;

  div {
    flex: 1;
    max-width: 1120px;

    img {
      height: 2.4rem;
    }
  }
`;

export const Main = styled.main`
  position: relative;
  padding: 1.8rem;
  justify-content: center;
  display: flex;

  img {
    width: 100%;
    position: absolute;
    opacity: 0.4;
    top: -7rem;
    left: 0;
    z-index: -1;
  }

  h1 {
    padding-top: 26rem;
    font-size: 2.6rem;
  }

  p {
    font-size: 1.8rem;
    margin-top: 1rem;
  }

  button {
    margin-top: 2.6rem;
    padding: 1rem 2.6rem;
    background-color: var(--darker);
    border: none;
    color: var(--white);
    box-shadow: 6px 4px 14px rgba(0, 0, 0, 0.4);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }

  @media (min-width: 560px) {
    display: flex;

    section {
      flex: 1;
      display: flex;
      max-width: 1120px;

      div {
        max-width: 44rem;
      }

      h1 {
        padding-top: 16rem;
      }

      img {
        width: 35vw;
        left: unset;
        right: 15%;
        opacity: 1;
      }
    }
  }
`;
