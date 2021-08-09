import React, { useCallback, useState } from 'react';
import Up from '../../assets/chevron-up.svg';
import Down from '../../assets/chevron-down.svg';

import { Container, Header } from './styles';

interface IProps {
  title: string;
  open?: boolean;
}

export const ExpandableItem: React.FC<IProps> = ({ title, open, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleOpen = useCallback(() => {
    setIsOpen(state => !state);
  }, []);

  return (
    <Container>
      <Header type="button" onClick={toggleOpen}>
        <h3>{title}</h3>
        {isOpen ? <img src={Up} alt="close" /> : <img src={Down} alt="open" />}
      </Header>

      <div hidden={!isOpen}>{children}</div>
    </Container>
  );
};
