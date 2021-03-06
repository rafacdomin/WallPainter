import React from 'react';
import Logo from '../../assets/WP.png';
import Background from '../../assets/background.jpg';

import { Container, Header } from './styles';

interface IProps {
  action: () => void;
}

export const About: React.FC<IProps> = ({ action }) => {
  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="WP" />
        </div>
      </Header>

      <Container>
        <div>
          <h1>Wall Paint Calculator</h1>
          <p>
            Find out the amount of paint needed to paint your room in a quick
            and simple way.
          </p>
          <button type="button" onClick={action}>
            GET START
          </button>
        </div>

        <img src={Background} alt="Cool Paint" />
      </Container>
    </>
  );
};
