import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  background: var(--white);
  color: var(--black);
  padding: 1.8rem 2.6rem;
  margin-top: 3.6rem;

  h1 {
    color: var(--orange);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2.4rem;
  }

  ul {
    margin: 0 1.8rem;

    li + li {
      margin-top: 0.4rem;
    }
  }
`;
