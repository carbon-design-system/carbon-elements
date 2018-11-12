import React from 'react';
import { Router, Link } from '@reach/router';
import ExamplesPage from './ExamplesPage';
import BasicUsagePage from './BasicUsagePage';
import OffsetPage from './OffsetPage';
import PaddingPage from './PaddingPage';
import BleedPage from './BleedPage';
import CondensedPage from './CondensedPage';
import HangPage from './HangPage';

export default function App() {
  return (
    <Router>
      <ExamplesPage path="/" />
      <BasicUsagePage path="/basic" />
      <OffsetPage path="/offset" />
      <PaddingPage path="/padding" />
      <BleedPage path="/bleed" />
      <CondensedPage path="/condensed" />
      <HangPage path="/hang" />
    </Router>
  );
}
