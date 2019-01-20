import * as React from 'react';
import { css, cx } from 'emotion';

const h2 = css`
  font-weight: 600;
  line-height: 40px;
  font-size: 36px;
  letter-spacing: -0.1px;
  @media only screen and (max-width: 30em) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const H2Atom = (props: any) => (
  <h2 {...props} className={cx(h2, props.className)}>
    {props.children}
  </h2>
);

H2Atom.displayName = 'H2Atom';

export { H2Atom };
