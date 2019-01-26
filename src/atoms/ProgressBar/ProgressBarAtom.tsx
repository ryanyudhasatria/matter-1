import * as React from 'react';
import { css, cx } from 'emotion';

// @ts-ignore
import COLORS from '../../constants/colors';

const ProgressBarAtom = ({ className = '', progress = 0, height = 6 }: any) => (
  <div
    className={cx(
      'relative br3 w-100',
      css`
        height: ${height}px;
        background: ${COLORS.GREY.NORMAL};
      `,
      className
    )}
  >
    <div
      className={cx(
        'absolute br3 top-0 left-0',
        css`
          width: ${Number(progress) * 100}%;
          height: ${height}px;
          background: ${COLORS.GREEN.NORMAL};
        `
      )}
    />
  </div>
);

export { ProgressBarAtom };
