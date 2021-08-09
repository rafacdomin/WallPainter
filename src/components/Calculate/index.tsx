import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { ExpandableItem } from '../ExpandableItem';
import { Input } from '../Input';

import { Container, Card, Cards, ResultCard } from './styles';
import { CustomValidationError } from '../../utils/CustomValidationError';

const walls = [1, 2, 3, 4];

export const Calculate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [paints, setPaints] = useState({});
  const [liters, setLitters] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleResize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [handleResize]);

  const getPaints = useCallback((area: number) => {
    const totalLiters = area / 50000;
    const cans = [18, 3.6, 2.5, 0.5];

    let total = totalLiters;
    const acc: { [index: number]: number } = { 0.5: 0 };

    cans.forEach(can => {
      if (total >= can) {
        acc[can] = Math.floor(total / can);
        total %= can;
      }

      if (total < 0.5) {
        acc[0.5] += 1;
      }
    });

    return {
      liters: totalLiters,
      paints: acc,
    };
  }, []);

  const getWallArea = useCallback(
    (width: number, height: number, nDoors = 0, nWindows = 0, wall: number) => {
      const doorArea = 80 * 190;
      const windowArea = 200 * 120;

      if (nDoors > 0 && height < 220) {
        throw new CustomValidationError(
          `height-${wall}`,
          'Walls with doors must be at least 30cm higher than the door',
        );
      }

      const wallArea = width * height;
      const totalDoorArea = doorArea * nDoors;
      const totalWindowArea = windowArea * nWindows;

      const wallAreaPercent = 1 - (totalWindowArea + totalDoorArea) / wallArea;

      if (wallAreaPercent < 0.5) {
        throw new CustomValidationError(
          `doors-${wall}`,
          'Windows and doors must occupy a maximum of 50% of the wall area',
        );
      }

      return wallArea - totalDoorArea - totalWindowArea;
    },
    [],
  );

  const validateFields = useCallback(async data => {
    const schema = Yup.object().shape({
      'height-1': Yup.number()
        .typeError('Height must be between 100cm and 1500cm')
        .min(100, 'Height must be at least 100cm')
        .max(1500, 'Height must be less then or equal 1500cm')
        .required('Height is required'),
      'width-1': Yup.number()
        .typeError('Width must be between 100cm and 1500cm')
        .min(100, 'Width must be at least 100cm')
        .max(1500, 'Width must be less then or equal 1500cm')
        .required('Width is required'),
      'height-2': Yup.number()
        .typeError('Height must be between 100cm and 1500cm')
        .min(100, 'Height must be at least 100cm')
        .max(1500, 'Height must be less then or equal 1500cm')
        .required('Height is required'),
      'width-2': Yup.number()
        .typeError('Width must be between 100cm and 1500cm')
        .min(100, 'Width must be at least 100cm')
        .max(1500, 'Width must be less then or equal 1500cm')
        .required('Width is required'),
      'height-3': Yup.number()
        .typeError('Height must be between 100cm and 1500cm')
        .min(100, 'Height must be at least 100cm')
        .max(1500, 'Height must be less then or equal 1500cm')
        .required('Height is required'),
      'width-3': Yup.number()
        .typeError('Width must be between 100cm and 1500cm')
        .min(100, 'Width must be at least 100cm')
        .max(1500, 'Width must be less then or equal 1500cm')
        .required('Width is required'),
      'height-4': Yup.number()
        .typeError('Height must be between 100cm and 1500cm')
        .min(100, 'Height must be at least 100cm')
        .max(1500, 'Height must be less then or equal 1500cm')
        .required('Height is required'),
      'width-4': Yup.number()
        .typeError('Width must be between 100cm and 1500cm')
        .min(100, 'Width must be at least 100cm')
        .max(1500, 'Width must be less then or equal 1500cm')
        .required('Width is required'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  }, []);

  const handleSubmit = useCallback(
    async data => {
      try {
        setShowResult(false);
        formRef.current?.setErrors({});

        await validateFields(data);

        const totalArea = walls.reduce((total, wall) => {
          return (
            total +
            getWallArea(
              data[`width-${wall}`],
              data[`height-${wall}`],
              data[`doors-${wall}`],
              data[`windows-${wall}`],
              wall,
            )
          );
        }, 0);

        const result = getPaints(totalArea);

        setLitters(result.liters);
        setPaints(result.paints);
        setShowResult(true);
        resultRef.current?.scrollIntoView({ behavior: 'smooth' });
      } catch (err) {
        const validationErrors: { [index: string]: string } = {};

        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[String(error.path)] = error.message;
          });

          formRef.current?.setErrors(validationErrors);
        }

        if (err instanceof CustomValidationError) {
          validationErrors[String(err.path)] = err.message;

          formRef.current?.setErrors(validationErrors);
        }
      }
    },
    [getPaints, getWallArea, validateFields],
  );

  const wallCards = useMemo(() => {
    if (windowSize > 768) {
      return (
        <Cards>
          {walls.map(item => (
            <Card key={item}>
              <h2>Wall nº {item}</h2>

              <Input name={`width-${item}`} label="Width (cm)" type="number" />
              <Input
                name={`height-${item}`}
                label="Height (cm)"
                type="number"
              />
              <Input
                name={`windows-${item}`}
                label="Number of windows"
                type="number"
                min="0"
              />
              <Input
                name={`doors-${item}`}
                label="Number of doors"
                type="number"
                min="0"
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
            <Input name={`width-${item}`} label="Width (cm)" type="number" />
            <Input name={`height-${item}`} label="Height (cm)" type="number" />
            <Input
              name={`windows-${item}`}
              label="Number of windows"
              type="number"
              min="0"
            />
            <Input
              name={`doors-${item}`}
              label="Number of doors"
              type="number"
              min="0"
            />
          </ExpandableItem>
        ))}
      </>
    );
  }, [windowSize]);

  const resultCard = useMemo(() => {
    return !showResult ? null : (
      <ResultCard ref={resultRef}>
        <h1>Result:</h1>
        <p>
          You will need {liters.toPrecision(2)} liters of paint. You can buy:
        </p>
        <ul>
          {Object.entries(paints).map(can => (
            <li key={can[0]}>
              {can[1]} paint cans of {can[0]} liters
            </li>
          ))}
        </ul>
      </ResultCard>
    );
  }, [liters, paints, showResult]);

  return (
    <Container ref={formRef} onSubmit={handleSubmit}>
      <h1>Calculate Now</h1>
      {wallCards}

      <button type="submit">Calculate</button>

      {resultCard}
    </Container>
  );
};
