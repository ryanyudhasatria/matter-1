import * as React from 'react';
import { css, cx } from 'emotion';

import {
  ButtonAtom,
  TextAtom,
  IconAtom,
} from '../../atoms';

//@ts-ignore
import COLORS from '../../constants/colors';

const AnimatedButtonMolecule = ({
  className,
  icon,
  disabled,
  onClick = () => {},
  ...props
}: any) => (
  <ButtonAtom
    type="WITH_ICON_CTA"
    disabled={disabled}
    onClick={onClick}
    className={cx('flex flex-row justify-between align-center', css`
      min-width: 300px;
      .i1 {
        transition: transform 0.2s linear;
        transform: translate(5px);
        color: ${disabled ? COLORS.GREY.NORMAL : COLORS.RED.NORMAL};
      }

      .i2 {
        transition: transform 0.2s linear;
        transform: translate(-50px);
        color: ${disabled ? COLORS.GREY.NORMAL : COLORS.RED.NORMAL};
      }
      
      ${!disabled && `
        :hover {
          .i1 {
            transition: transform 0.2s linear;
            transform: translate(50px);
            color: ${COLORS.RED.LIGHT};
          }

          .i2 {
            transition: transform 0.2s linear;
            transform: translate(-5px);
            color: ${COLORS.RED.LIGHT};
          }
        }
        :active {
          .i1 {
            color: ${COLORS.RED.DARK};
          }

          .i2 {
            color: ${COLORS.RED.DARK};
          }
        }
      `}
    `, className)}
  >
    <div style={{ width: 32, height: 32 }} />
    <div className="self-center flex flex-column">
      <TextAtom size="M" className="fw6 self-center">
        {props.children}
      </TextAtom>
    </div>
    <div className="self-center ph2">
      <div
        className="br-100 flex flex-row justify-center align-center bg-white"
        style={{ width: 32, height: 32, overflow: 'hidden' }}
      >
        {<IconAtom name={icon} className={cx('i1 self-center f7', css`
          ${disabled && `color: ${COLORS.GREY.NORMAL}`}
        `)} />}
        <IconAtom name={icon} className={cx('i2 self-center f7', css`
          ${disabled && `color: ${COLORS.GREY.NORMAL}`}
        `)} />
      </div>
    </div>
  </ButtonAtom>
);

AnimatedButtonMolecule.displayName = 'AnimatedButtonMolecule';

export { AnimatedButtonMolecule };
