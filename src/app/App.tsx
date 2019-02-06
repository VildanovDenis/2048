import React from 'react';
import styled from 'styled-components';

import { IProps } from './types';
import { Table } from '../components/table/index';

const StyledWrapper = styled.div`
  background: gray;
`;

export class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <StyledWrapper className="App">
        <Table />
      </StyledWrapper>
    );
  }
}
