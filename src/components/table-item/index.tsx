import React, { ReactNode, Component } from 'react';
import styledComponents from 'styled-components';

import { IProps } from './types';
import { getRandomPosition } from '../../lib';

const StyledTableItem = styledComponents.div<{column: number; row: number}>`
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: white;
  box-sizing: border-box;
`;

export class TableItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): ReactNode {
    return (
      <StyledTableItem
        column={1}
        row={2}
      >
        2
      </StyledTableItem>
    );
  }
}
