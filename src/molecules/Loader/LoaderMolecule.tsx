import * as React from 'react';
import { css, cx, keyframes } from 'emotion';

const dotCss = css`
  width: 9px;
  height: 9px;
  border-radius: 100%;
`; // prev 12

const fadePurple = keyframes`
  0%   { background: #DBE4E8; }
  25% { background: #645AFF; }
  50% { background: #645AFF; }
  75% { background: #DBE4E8; }
  100% { background: #DBE4E8; }
`;

const fadeRed = keyframes`
  0%   { background: #FF6260; }
  25% { background: #DBE4E8; }
  50% { background: #DBE4E8; }
  75% { background: #FF6260; }
  100%   { background: #FF6260; }
`;

const dotPurple = css`
  background: #645aff;
  animation: ${fadePurple} 2s ease-in-out infinite;
`;

const dotRed = css`
  background: #dbe4e8;
  animation: ${fadeRed} 2s linear infinite;
`;

const colContainer = css`
  height: 50px;
`; // prev: 73
const rowContainer = css`
  width: 50px;
`; // prev: 73

const LoaderMolecule = ({ className = '' }) => (
  <div
    className={cx(
      'flex flex-column justify-between align-center',
      colContainer,
      className
    )}
  >
    <div
      className={cx('flex flex-row justify-between align-center', rowContainer)}
    >
      <div className={cx(dotCss, dotPurple)} />
      <div className={cx(dotCss, dotRed)} />
      <div className={cx(dotCss, dotPurple)} />
    </div>
    <div
      className={cx('flex flex-row justify-between align-center', rowContainer)}
    >
      <div className={cx(dotCss, dotRed)} />
      <div className={cx(dotCss, dotPurple)} />
      <div className={cx(dotCss, dotRed)} />
    </div>
    <div
      className={cx('flex flex-row justify-between align-center', rowContainer)}
    >
      <div className={cx(dotCss, dotPurple)} />
      <div className={cx(dotCss, dotRed)} />
      <div className={cx(dotCss, dotPurple)} />
    </div>
  </div>
);

export { LoaderMolecule };
