import React from 'react';
import { Grid, Row, Column } from './Grid';
import Main from './Main';
import ExampleContent from './ExampleContent';

export default function BleedPage() {
  return (
    <Main>
      <p>Default grid</p>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col">
            <div className="outside">
              <div className="inside">1/4</div>
            </div>
          </div>
          <div className="bx--col">
            <div className="outside">
              <div className="inside">1/4</div>
            </div>
          </div>
          <div className="bx--col">
            <div className="outside">
              <div className="inside">1/4</div>
            </div>
          </div>
          <div className="bx--col">
            <div className="outside">
              <div className="inside">1/4</div>
            </div>
          </div>
        </div>
      </div>

      <p>Grid with no gutter on left and text hang</p>
      <div className="bx--grid">
        <div className="bx--row bx--no-gutter--left">
          <div className="bx--col">
            <div style={{ backgroundColor: 'violet', height: '240px' }} />
            <div className="outside">
              <div className="bx--hang inside">1/4</div>
            </div>
          </div>
          <div className="bx--col">
            <div style={{ backgroundColor: 'violet', height: '240px' }} />
            <div className="outside">
              <div className="bx--hang inside">1/4</div>
            </div>
          </div>
          <div className="bx--col">
            <div style={{ backgroundColor: 'violet', height: '240px' }} />
            <div className="outside">
              <div className="bx--hang inside">1/4</div>
            </div>
          </div>
          <div className="bx--col">
            <div style={{ backgroundColor: 'violet', height: '240px' }} />
            <div className="outside">
              <div className="bx--hang inside">1/4</div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
