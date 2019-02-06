import React, { ReactNode, Component } from 'react';
import styledComponents from 'styled-components';

import { IProps, IState } from './types';
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

export class TableItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      position: getRandomPosition(),
    };
  }

  render(): ReactNode {
    const { position } = this.state;

    const [row, column] = position;

    return (
      <StyledTableItem
        column={column}
        row={row}
      >
        2
      </StyledTableItem>
    );
  }
}
