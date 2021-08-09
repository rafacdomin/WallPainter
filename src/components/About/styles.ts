import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
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

export const Container = styled.section`
  padding: 0 1.8rem 4rem;

  img {
    width: 100%;
    position: absolute;
    opacity: 0.4;
    top: 0;
    left: 0;
    z-index: -1;
  }

  div {
    > h1 {
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
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 1120px;
    margin-bottom: 2vw;

    div {
      max-width: 45rem;
    }

    img {
      max-width: 50rem;
      width: 30vw;
      opacity: 1;
      left: unset;
      right: 15vw;
    }
  }
`;
