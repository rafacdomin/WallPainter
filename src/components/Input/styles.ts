import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 2rem;

  label {
    position: absolute;
    top: -1rem;
    left: 1rem;
    padding: 0 1rem;
    background-color: var(--white);
  }

  input {
    width: 100%;
    height: 5rem;
    padding: 0 1rem;
  }
`;
