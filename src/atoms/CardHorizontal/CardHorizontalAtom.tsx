import * as React from 'react';
import { css, cx } from 'emotion';

const CARD_TYPES = {
  DEFAULT: css`
    display: inline-flex;
    background: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.15);
    border-radius: 8px;
  `,
  BORDER: css`
    display: inline-flex;
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 4px;
  `,
  GREY: css`
    display: inline-flex;
    background: #F5F7FA;
    border-radius: 8px;
  `,
};

interface IProps {
  type? : string
  className? : string
  children: React.ReactNode
}

const CardHorizontalAtom = (props: IProps) => {
  const {
    type = 'DEFAULT',
    className = '',
    children = null,
  } = props;

  return (
    <div {...props} className={cx(CARD_TYPES[type], className)}>
      {children}
    </div>
  );
}

CardHorizontalAtom.displayName = 'CardHorizontalAtom';

export { CardHorizontalAtom };
