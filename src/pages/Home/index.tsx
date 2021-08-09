import React, { useCallback, useRef } from 'react';
import { About } from '../../components/About';
import { Calculate } from '../../components/Calculate';
import { Info } from '../../components/Info';

import { Main } from './styles';

const Home: React.FC = () => {
  const calcRef = useRef<HTMLDivElement>(null);

  const scrollToCalc = useCallback(() => {
    calcRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [calcRef]);

  return (
    <>
      <Main>
        <About action={scrollToCalc} />
        <Info />
        <div ref={calcRef}>
          <Calculate />
        </div>
      </Main>
    </>
  );
};

export default Home;
