import { css, cx } from "emotion";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

interface IProps {
  children: any;
  className?: any;
  "data-test"?: any;
  type?: string;
}

class FooterMolecule extends React.PureComponent<IProps, any> {
  public state = {};

  public render() {
    const { className = "", children } = this.props;
    return (
      <footer
        data-test={this.props["data-test"]}
        className={cx(
          css`
            background: ${COLORS.BLACK.DARKER};
          `,
          className,
        )}
      >
        {children}
      </footer>
    );
  }
}

export { FooterMolecule };
