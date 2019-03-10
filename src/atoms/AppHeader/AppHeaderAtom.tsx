import { css, cx } from "emotion";
import * as React from "react";

const headerCss = css`
  width: 100%;
  padding: 0;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 996;
  position: fixed;
  height: 48px;
  @media screen and (min-width: 30em) {
    height: 68px;
  }
`;

const AppHeaderAtom = ({ children, className }: any) => (
  <header className={cx(headerCss, className)}>{children}</header>
);

AppHeaderAtom.displayName = "AppHeaderAtom";

export { AppHeaderAtom };
