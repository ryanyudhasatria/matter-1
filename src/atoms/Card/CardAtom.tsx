import { css, cx } from "emotion";
import * as React from "react";

const CARD_TYPES = {
  DEFAULT: css`
    display: inline-flex;
    background: #ffffff;
    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.15);
    border-radius: 8px;
  `,
  BORDER: css`
    display: inline-flex;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  `,
  GREY: css`
    display: inline-flex;
    background: #f5f7fa;
    border-radius: 8px;
  `,
};

interface IProps {
  type?: string;
  className?: string;
  children: React.ReactNode;
}

const CardAtom = (props: IProps) => {
  const { type = "DEFAULT", className = "", children = null } = props;

  return (
    <div {...props} className={cx(CARD_TYPES[type], className)}>
      {children}
    </div>
  );
};

CardAtom.displayName = "CardAtom";

export { CardAtom };
