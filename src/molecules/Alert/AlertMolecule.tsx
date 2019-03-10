import { css, cx } from "emotion";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

const alertDanger = `
    background-color: ${COLORS.RED.NORMAL};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    border-radius: 2px;
`;

const alertInfo = `
    background-color: ${COLORS.GREEN.NORMAL};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    border-radius: 2px;
`;

const TYPES_LIST = {
  ALERT_DANGER: css`
      ${alertDanger}
        color:  ${COLORS.WHITE.NORMAL};
    `,
  ALERT_INFO: css`
      ${alertInfo}
        scolor:  ${COLORS.WHITE.NORMAL};
    `,
};

interface IProps {
  className?: any;
  "data-test"?: any;
  type?: string;
  children: any;
}

class AlertMolecule extends React.PureComponent<IProps, any> {
  public state = {};

  public render() {
    const { type = "", className = "", children } = this.props;

    return (
      <div
        data-test={this.props["data-test"]}
        className={cx(TYPES_LIST[type], className)}
      >
        {children}
      </div>
    );
  }
}

export { AlertMolecule };
