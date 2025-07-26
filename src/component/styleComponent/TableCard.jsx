import React from 'react';
import styled from 'styled-components';
import StyleCard from './StyleCard';

const StyledTableCard = styled(StyleCard)`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  min-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;

  li {
    list-style-type: none;
  }
`;

const TableCard = React.forwardRef((props, ref) => <StyledTableCard ref={ref} {...props} />);

TableCard.displayName = 'TableCard';

export default TableCard;
