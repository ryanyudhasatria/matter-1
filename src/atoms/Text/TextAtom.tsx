import * as React from 'react';
import { css, cx } from 'emotion';

const SIZES = {
  XXS: '0.6rem',
  XS: '0.8rem',
  S: '0.88rem',
  M: '1rem',
  L: '1.2rem',
  XL: '1.5rem',
  XXL: '2rem',
  XXXL: '2.3rem',
  UNDEFINED: 'inherit',
};

const SMALL_SIZES = {
  XS: '0.6rem',
  S: '0.7rem',
  M: '0.8rem',
  L: '1rem',
  XL: '1.2rem',
  XXL: '1.5rem',
  XXXL: '2rem',
  UNDEFINED: 'inherit',
};

interface IProps {
  size?: string
  className?: string
  children?: React.ReactNode
}

const textStyle = (props: { size: string }) => css`
  font-size: ${SIZES[props.size]};
  @media only screen and (max-width: 640px) {
    font-size: ${SMALL_SIZES[props.size]};
  }
`;

const TextAtom = ({ size = 'M', ...props }: IProps) => (
  <span {...props} className={cx(textStyle({ size }), props.className)}>
    {props.children}
  </span>
);

export { TextAtom };
export default React.memo(TextAtom);
