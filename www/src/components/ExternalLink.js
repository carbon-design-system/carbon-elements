import React from 'react';

export default function ExternalLink({ children, ...rest }) {
  return <a {...rest} rel="noopener noreferrer">{children}</a>;
}
