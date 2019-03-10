import { css, cx } from "emotion";
import * as React from "react";

const h3 = css`
  font-weight: 600;
  line-height: 60px;
  font-size: 24px;
  letter-spacing: -0.1px;
  @media only screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

const H3Atom = (props: any) => (
  <h3 {...props} className={cx(h3, props.className)}>
    {props.children}
  </h3>
);

H3Atom.displayName = "H3Atom";

export { H3Atom };
