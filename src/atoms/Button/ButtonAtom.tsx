import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

const smallBase = css`
  border: 0;
  cursor: pointer;
  border-radius: 48px;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px 8px 16px;
  @media screen and (max-width: 30em) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const defaultBase = css`
  border: 0;
  cursor: pointer;
  border-radius: 48px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  padding: 25px;
  padding-top: 13px;
  padding-bottom: 13px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 30em) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const withIconBase = css`
  border-radius: 48px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  padding-top: 13px;
  line-height: 27px;
  @media screen and (max-width: 30em) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const TYPES = {
  SMALL_PRIMARY: css`
    ${smallBase}
    background: ${COLORS.PURPLE.NORMAL};
    color: #F5F7FA;
    :hover {
      background: ${COLORS.PURPLE.LIGHT};
    }
    :active {
      background: ${COLORS.PURPLE.DARKER};
    }
  `,
  SMALL_RED: css`
    ${smallBase}
    background: ${COLORS.RED.NORMAL};
    color: ${COLORS.GREY.LIGHT};
    :hover {
      background: ${COLORS.RED.DARKER};
    }
    :active {
      background: ${COLORS.RED.LIGHT};
    }
  `,
  SMALL_GREY: css`
    ${smallBase}
    background: ${COLORS.GREY.NORMAL};
    color: ${COLORS.BLACK.LIGHT};
    :hover {
      background: ${COLORS.GREY.LIGHT};
    }
  `,
  SMALL_GREEN: css`
    ${smallBase}
    background: ${COLORS.GREEN.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.GREEN.DARKER};
    }
  `,
  SMALL_WHITE: css`
    ${smallBase}
    background: ${COLORS.WHITE.NORMAL};
    color: ${COLORS.PURPLE.NORMAL};
    :hover {
      background: ${COLORS.WHITE.NORMAL};
    }
  `,
  SMALL_TRANSPARENT: css`
    ${smallBase}
    background: transparent;
    color: ${COLORS.PURPLE.NORMAL};
    :hover {
      background: transparent;
    }
  `,
  DEFAULT_CTA: css`
    ${defaultBase}
    background: ${COLORS.RED.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.RED.LIGHT};
    }
    :focus {
      background: ${COLORS.RED.LIGHT};
    }
    :active {
      background: ${COLORS.RED.DARKER};
    }
  `,
  DEFAULT_PRIMARY: css`
    ${defaultBase}
    background: ${COLORS.PURPLE.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.PURPLE.LIGHT};
    }
    :active {
      background: ${COLORS.PURPLE.DARKER};
    }
  `,
  DEFAULT_PURPLE: css`
    ${defaultBase}
    background: ${COLORS.PURPLE.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.PURPLE.LIGHT};
    }
    :active {
      background: ${COLORS.PURPLE.DARKER};
    }
  `,
  DEFAULT_PURPLE_GRADIENT: css`
    ${defaultBase}
    background: ${COLORS.PURPLE_GRADIENT.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.PURPLE.LIGHT};
    }
    :active {
      background: ${COLORS.PURPLE.DARKER};
    }
  `,
  DEFAULT_GREY: css`
    ${defaultBase}
    background: #EDF0F2;
    color: ${COLORS.BLACK.NORMAL};
    :hover {
      background: ${COLORS.GREY.LIGHT};
    }
  `,  
  DEFAULT_WHITE: css`
    ${defaultBase}
    background: ${COLORS.WHITE.NORMAL};
    color: ${COLORS.PURPLE.NORMAL};
    :hover {
      background: ${COLORS.WHITE.NORMAL};
    }
  `,
  WITH_ICON_CTA: css`
    ${withIconBase}
    background: ${COLORS.RED.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.RED.LIGHT};
    }
    :active {
      background: ${COLORS.RED.DARKER};
    }
  `,
  WITH_ICON_PRIMARY: css`
    ${withIconBase}
    background: ${COLORS.PURPLE.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    :hover {
      background: ${COLORS.PURPLE.LIGHT};
    }
    :active {
      background: ${COLORS.PURPLE.DARKER};
    }
  `,
  WITH_ICON_GREY: css`
    ${withIconBase}
    background: ${COLORS.GREY.NORMAL};
    color: ${COLORS.BLACK.NORMAL};
    :hover {
      background: ${COLORS.GREY.LIGHT};
    }
  `,
  WITH_ICON_WHITE: css`
    ${withIconBase}
    background: ${COLORS.WHITE.NORMAL};
    color: ${COLORS.PURPLE.NORMAL};
    :hover {
      background: ${COLORS.WHITE.NORMAL};
    }
  `,
  DISABLED: css`
    background: ${COLORS.GREY.NORMAL};
    color: ${COLORS.WHITE.NORMAL};
    opacity: 0.8;
    cursor: not-allowed !important;
    :hover {
      background: ${COLORS.GREY.NORMAL};
    }
  `,
  DISCUSSION_FORUM: css`
    background: ${COLORS.WHITE.NORMAL};
    color: ${COLORS.BLACK.LIGHT};
    border-width: 2px;
    border-color: ${COLORS.GREEN.DARKER};
    border-radius: 4px;
    border-style: solid;
    :hover {
      color: ${COLORS.BLACK.NORMAL}
    }
  `,
  GREY_PURPLE_HOVER: css`
    ${smallBase}
    background: #E8EDF2;
    color: ${COLORS.BLACK.NORMAL};
    :hover {
      background: ${COLORS.PURPLE.LIGHT};
      color: ${COLORS.WHITE.NORMAL};
    }
    :active {
      background: ${COLORS.PURPLE.DARKER};      
    }
  `,
};

// const disabledClass = cx('fw6 f6 pv2 ph3 pointer bw0', css`
//   ${smallBase}
// `);

const classNames = (type: string, disabled: any) =>
  type.split('_')[0] === 'SMALL'
    ? cx(
        'fw6 f6 pv2 ph3 pointer bw0',
        TYPES[type],
        disabled ? TYPES.DISABLED : ''
      )
    : type.split('_')[0] === 'DEFAULT'
    ? cx(
        'fw6 f5 pv3 ph4 pointer bw0',
        TYPES[type],
        disabled ? TYPES.DISABLED : ''
      )
    : cx(
        'fw6 f1 pv3 ph2 pointer bw0',
        TYPES[type],
        disabled ? TYPES.DISABLED : ''
      );

interface IProps {
  children: any;
  className?: any;
  'data-test'?: any;
  disabled?: boolean;
  isFormInput?: boolean;
  onClick?: any;
  type?: string;
}

class ButtonAtom extends React.PureComponent<IProps, any> {
  state = {};

  render() {
    const {
      isFormInput = false,
      disabled = false,
      type = 'SMALL_PRIMARY',
      onClick = () => {},
      className = '',
      children
    } = this.props;
    return (
      <button
        data-test={this.props['data-test']}
        type={isFormInput ? 'submit' : 'button'}
        disabled={disabled}
        onClick={disabled ? () => {} : onClick}
        className={cx('outline-0', classNames(type, disabled), className)}
      >
        {children}
      </button>
    );
  }
}

export { ButtonAtom };
