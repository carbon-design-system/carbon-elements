import '../styles/styles.scss';

import { colors } from '@carbon/colors';
import { LogoGithub32, Search16 } from '@carbon/icons-react';
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SkipToContent,
} from 'carbon-components-react/es/components/UIShell';
import { Link } from 'gatsby';
import React from 'react';
import ExternalLink from './ExternalLink';

export default function Layout(props) {
  return (
    <>
      <Header>
        <SkipToContent />
        <HeaderName prefix="IBM" to="/" element={Link}>
          Elements
        </HeaderName>
        <HeaderNavigation>
          <HeaderMenuItem href="/getting-started">
            Getting Started
          </HeaderMenuItem>
          <HeaderMenuItem href="/docs">Docs</HeaderMenuItem>
          <HeaderMenuItem href="/guides">Guides</HeaderMenuItem>
          <HeaderMenuItem href="/blog">Blog</HeaderMenuItem>
        </HeaderNavigation>
        <div css={searchContainer}>
          <div css={search}>
            Search
            <Search16 fill="currentColor" />
          </div>
        </div>
        <HeaderGlobalBar>
          <div className="bx--header__global">
            <ExternalLink
              aria-label="Visit the carbon elements package"
              className="bx--header__action"
              href="https://github.com/IBM/carbon-elements">
              <LogoGithub32 />
            </ExternalLink>
          </div>
        </HeaderGlobalBar>
      </Header>
      <div css={content}>
        {props.children}
      </div>
    </>
  );
}

const content = {
  marginTop: '3rem',
}

const searchContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 1 0%',
  height: '100%',
  backgroundColor: colors.gray80,
  marginLeft: '3rem',
  padding: '0 2rem',
};

const search = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
};
