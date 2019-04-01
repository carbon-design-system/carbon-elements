# IBM Plex

- Carbon by default offers support for using IBM Plex from Google Fonts
- In production cases, this will often want to be changed
- Two options:
  - Host files in CDN
  - Serve yourself
- This guide is to help you achieve one of the options above optimally

- Breaking down what's in `@ibm/plex`
- How does this translate to a CDN?
- How does this translate to a hosted service?
- Structure of font-face
  - Support for unicode ranges
  - Font faces
    - IE11 support with woff?
    - IBM Plex Sans
      - Light
        - `font-weight: 300`
        - `src: local('IBM Plex Sans Italic'), local('IBMPlexSans-Italic'), url() format('woff2')`
        - Italic
      - Regular
      - Semibold
    - IBM Plex Mono
      - Light
      - Regular
      - Semibold
    - (Optional) IBM Plex Serif

```css
@font-face {
  font-family: 'IBM Plex Sans';
  font-weight: 400;
}
```
