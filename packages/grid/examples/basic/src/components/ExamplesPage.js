import React from 'react';
import { Link } from '@reach/router';
import { Grid, Row, Column } from './Grid';
import Main from './Main';

export default function ExamplesPage() {
  return (
    <Main>
      <Grid>
        <Row>
          <Column breakpoint="md" span={4}>
            <h1>Grid Examples</h1>
            <p>
              A variety of examples to help verify the grid implementation of
              the IBM Design Language for the Carbon Design System.
            </p>
          </Column>
        </Row>
        <Row>
          <Column auto>
            <ul>
              <li>
                <Link to="/basic">Basic Usage</Link>
              </li>
              <li>
                <Link to="/offset">Offsets</Link>
              </li>
              <li>
                <Link to="/padding">Padding</Link>
              </li>
              <li>
                <Link to="/bleed">Bleed</Link>
              </li>
              <li>
                <Link to="/condensed">Condensed</Link>
              </li>
              <li>
                <Link to="/hang">Hang</Link>
              </li>
              <li>
                <Link to="/subgrid">Subgrid (TODO)</Link>
              </li>
            </ul>
          </Column>
        </Row>
      </Grid>
    </Main>
  );
}
