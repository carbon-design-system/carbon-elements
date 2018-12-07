/**
 * @jest-enviornment node
 */

import { fluid } from '../fluid';
import { display04 } from '../styles';

describe('fluid', () => {
  it('should return back a token if no breakpoints available', () => {
    const token = {
      fontSize: '1rem',
    };
    expect(fluid(token)).toEqual(token);
  });

  it('should include the default styles for each breakpoint as a media key', () => {
    const token = {
      fontSize: '1rem',
      letterSpacing: 0,
      breakpoints: {
        md: {
          fontSize: '1.5rem',
          letterSpacing: '100%',
        },
      },
    };
    expect(fluid(token)).toEqual(
      expect.objectContaining({
        letterSpacing: token.letterSpacing,
        '@media (min-width: 42rem)': expect.objectContaining({
          letterSpacing: token.breakpoints.md.letterSpacing,
        }),
      })
    );
  });

  it('should compute the fluid styles for a token', () => {
    expect(fluid(display04)).toMatchInlineSnapshot(`
Object {
  "@media (min-width: 42rem)": Object {
    "fontSize": "calc(4.25rem + (5.75rem - 4.25rem) * ((100vw - 42rem) / (66rem - 42rem))",
    "lineHeight": "4.875rem",
  },
  "@media (min-width: 66rem)": Object {
    "fontSize": "calc(5.75rem + (7.625rem - 5.75rem) * ((100vw - 66rem) / (82rem - 66rem))",
    "letterSpacing": "-0.64px",
    "lineHeight": "6.375rem",
  },
  "@media (min-width: 82rem)": Object {
    "fontSize": "calc(7.625rem + (9.75rem - 7.625rem) * ((100vw - 82rem) / (99rem - 82rem))",
    "letterSpacing": "-0.64px",
    "lineHeight": "8.125rem",
  },
  "@media (min-width: 99rem)": Object {
    "fontSize": "9.75rem",
    "letterSpacing": "-0.96px",
    "lineHeight": "10.25rem",
  },
  "fontFamily": "'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif",
  "fontSize": "calc(2.625rem + (4.25rem - 2.625rem) * ((100vw - 20rem) / (42rem - 20rem))",
  "fontWeight": 600,
  "letterSpacing": 0,
  "lineHeight": "3.125rem",
}
`);
  });
});
