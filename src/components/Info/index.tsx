import React from 'react';

import { Container } from './styles';

export const Info: React.FC = () => {
  return (
    <Container>
      <h1>Info</h1>
      <p>Some facts and measures used in our system by default:</p>
      <div>
        <ul>
          <li>Walls must be between 1.0m and 15.0m in height or width</li>
          <li>Windows and doors occupy a maximum of 50% of the wall area</li>
          <li>
            Walls with doors are at least 0.3m beyond the height of the door
          </li>
        </ul>
        <ul>
          <li>Window size: 2.0m x 1.2m</li>
          <li>Door size: 0.8m x 1.9m</li>
        </ul>
      </div>
    </Container>
  );
};
