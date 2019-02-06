import React, { ReactNode, Component } from 'react';
import styledComponents from 'styled-components';

import { IProps } from './types';
import { TableItem } from '../table-item';
import { getRandomPosition } from '../../lib';
import { IState } from '../table-item/types';

const StyledTableWrapper = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  grid-template-rows: repeat(4, 100px);
  grid-template-areas:
    "00 01 02 03"
    "10 11 12 12"
    "20 21 22 23"
    "30 31 32 33";
  width: 400px;
  height: 400px;
  margin: 0 auto;
  border: 2px solid black;
  background: white;

  font-family: sans-serif;
  text-align: center;
  vertical-align: center;
  font-size: 25px;
  line-height: 100px;
`;

export class Table extends Component<IProps, IState> {
  private readonly KEYCODES = {
    up: 38,
    down: 40,
    right: 39,
    left: 37,
  };

  constructor(props: IProps) {
    super(props);

    this.state = {
      elements: [getRandomPosition()],
    };
  }

  componentWillMount() {
    window.addEventListener('keydown', this.onArrowKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onArrowKeydown);
  }

  private onArrowKeydown(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case this.KEYCODES.up: {
        break;
      }
      case this.KEYCODES.down: {
        break;
      }
      case this.KEYCODES.right: {
        break;
      }
      case this.KEYCODES.left: {
        break;
      }
      default:
        break;
    }
  }

  public render(): ReactNode {
    return (
      <StyledTableWrapper>
          {this.state.elements.map}
      </StyledTableWrapper>
    );
  }
}
