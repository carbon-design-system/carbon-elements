import React from 'react';
import { Grid, Row, Column } from './Grid';
import Main from './Main';

export default function PaddingPage() {
  return (
    <Main>
      <Grid>
        <Row>
          <Column breakpoint="md" span={4}>
            <h1>Padding example</h1>
            <p>
              This example shows how to apply the <code>.bx--gutter</code> class
            </p>
          </Column>
        </Row>
      </Grid>
      <div className="bx--grid">
        <div className="bx--row bx--bleed-left">
          <div className="bx--col">
            <div className="outside">
              <div style={{ height: '168px' }} />
              <div className="bx--gutter-left inside">Hi</div>
            </div>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <div className="outside">
              <div className="inside">Hi</div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
