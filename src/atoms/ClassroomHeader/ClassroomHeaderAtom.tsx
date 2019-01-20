import * as React from 'react';
import { css, cx } from 'emotion';

const ClassroomHeaderAtom = (props: any) => (
  <header className={cx('fl w-100 flex justify-between align-center', css`
    background: #1C2229;
    color: white;
    padding: 15px 22px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 995;
    height: 68px;
    @media only screen and (max-width: 640px) {
      height: 48px;
    }
  `)}
  >
    {props.children}
  </header>
);

ClassroomHeaderAtom.displayName = 'ClassroomHeaderAtom';

export { ClassroomHeaderAtom };
