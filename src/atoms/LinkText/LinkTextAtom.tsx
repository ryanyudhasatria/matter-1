import * as React from 'react';
import { css, cx } from 'emotion';
import { Link } from 'react-router-dom';

//@ts-ignore
import COLORS from '../../constants/colors';

const animatedLinkText = css`
  width: auto;
  text-decoration: none;
  padding-bottom: 0;
  vertical-align: bottom;
  color: ${COLORS.PURPLE.NORMAL};
  position: relative;
  display: inline-block;
  &:after {
    display: block;
    content: '';
    border-bottom: solid 1px ${COLORS.PURPLE.NORMAL};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 100% 50%;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: 0 50%;
  }
`;

const linkText = css`
  text-decoration: none;
  color: inherit;
`;

const LinkTextAtom = ({ to, animated, className, ...props }: any) => (
  <Link
    to={to}
    {...props}
    data-test={props['data-test']}
    className={cx(animated ? animatedLinkText : linkText, className)}
  />
);

LinkTextAtom.displayName = 'LinkTextAtom';

export { LinkTextAtom };
