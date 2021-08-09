import React from 'react';

import { Container } from './styles';

export const Info: React.FC = () => {
  return (
    <Container>
      <h1>Info</h1>
      <p>Some facts and measures used in our system by default:</p>
      <div>
        <ul>
          <li>Walls must be between 100cm and 1500cm in height and width</li>
          <li>
            Windows and doors must occupy a maximum of 50% of the wall area
          </li>
          <li>Walls with doors must be at least 30cm higher than the door</li>
          <li>Window size: 200cm x 120cm</li>
          <li>Door size: 80cm x 190cm</li>
        </ul>
      </div>
    </Container>
  );
};
