import styled from 'styled-components';
import { Form } from '@unform/web';

export const Container = styled(Form)`
  padding: 1.8rem;

  h1 {
    margin-bottom: 1.8rem;
  }

  > div {
    margin-bottom: 2rem;
  }

  > button {
    background-color: var(--orange);
    color: var(--white);
    padding: 1.8rem;
    font-weight: 700;
    box-shadow: 6px 4px 14px rgba(0, 0, 0, 0.4);
    border: none;
    width: 100%;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
