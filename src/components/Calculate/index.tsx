import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';

import { ExpandableItem } from '../ExpandableItem';
import { Input } from '../Input';

import { Container, Card, Cards } from './styles';

export const Calculate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);

  const handleSubmit: SubmitHandler<FormData> = useCallback(data => {
    console.log(data);
  }, []);

  const wallCards = useMemo(() => {
    const walls = [1, 2, 3, 4];

    if (windowSize > 768) {
      return (
        <Cards>
          {walls.map(item => (
            <Card>
              <h2>Wall nº {item}</h2>

              <Input
                name={`height-${item}`}
                label="Height (cm)"
                type="number"
              />
              <Input name={`width-${item}`} label="Width (cm)" type="number" />
              <Input
                name={`windows-${item}`}
                label="Quantity of windows (cm)"
                type="number"
              />
              <Input
                name={`doors-${item}`}
                label="Quantity of doors (cm)"
                type="number"
              />
            </Card>
          ))}
        </Cards>
      );
    }

    return (
      <>
        {walls.map(item => (
          <ExpandableItem
            key={item}
            open={item === 1}
            title={`Wall nº ${item}`}
          >
            <Input name={`height-${item}`} label="Height (cm)" type="number" />
            <Input name={`width-${item}`} label="Width (cm)" type="number" />
            <Input
              name={`windows-${item}`}
              label="Quantity of windows (cm)"
              type="number"
            />
            <Input
              name={`doors-${item}`}
              label="Quantity of doors (cm)"
              type="number"
            />
          </ExpandableItem>
        ))}
      </>
    );
  }, [windowSize]);

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <h1>Calculate Now</h1>
      {wallCards}

      <button type="submit">Calculate</button>
    </Container>
  );
};
