import React from 'react';
import Layout from '../../components/Layout';
import { Grid, Row, Column } from '../../components/Grid';

export default function Docs() {
  return (
    <Layout>
      <main id="main-content">
        <Grid>
          <Row>
            <Column>
              <h1>Docs</h1>
            </Column>
          </Row>
        </Grid>
      </main>
    </Layout>
  );
}
