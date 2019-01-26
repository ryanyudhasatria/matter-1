import * as React from 'react';
import { css, cx } from 'emotion';

const h1 = css`
  font-weight: 700;
  line-height: 60px;
  font-size: 48px;
  letter-spacing: -0.1px;
  @media only screen and (max-width: 640px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const H1Atom = (props: any) => (
  <h1 {...props} className={cx(h1, props.className)}>
    {props.children}
  </h1>
);

H1Atom.displayName = 'H1';

export { H1Atom };
