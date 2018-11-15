import { colors, tokens } from '@carbon/colors';
import React from 'react';
import Layout from '../../components/Layout';
import { Grid, Row, Column } from '../../components/Grid';

export default function TokensPage() {
  return (
    <Layout>
      <main id="main-content">
        <Grid padding hang>
          <Row>
            <Column>
              <h1>Tokens</h1>
            </Column>
          </Row>
          <Row>
            <Column>
              <h2>Colors</h2>
            </Column>
          </Row>
          {Object.keys(tokens).map(name => (
            <Row key={name}>
              <Column breakpoint="md" span={3}>
                <p>{name}</p>
              </Column>
              <Column>
                <p>{tokens[name]}</p>
              </Column>
            </Row>
          ))}
          <Row>
            <Column>
              <h2>Type</h2>
            </Column>
          </Row>
        </Grid>
      </main>
    </Layout>
  );
}
