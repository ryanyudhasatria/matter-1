import { css, cx } from "emotion";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

import { ButtonAtom, IconAtom, TextAtom } from "../../atoms";

interface IProps {
  className?: any;
  "data-test"?: any;
  type?: string;
  name?: string;
  sizeIcon?: string;
  typeIcon?: string;
  description?: string;
}

class DownloadButtonMolecule extends React.PureComponent<IProps, any> {
  public state = {};

  public render() {
    const { description = "", sizeIcon = "", typeIcon = "" } = this.props;

    return (
      <ButtonAtom
        className={cx(
          "",
          css`
            padding: 0.5rem;
            width: 8rem;
            display: block;
          `,
        )}
        type="DEFAULT_PRIMARY"
      >
        <div
          className={cx(
            "fl",
            css`
              background: ${COLORS.WHITE.NORMAL};
              color: ${COLORS.PURPLE.NORMAL};
              border-radius: 100%;
              padding: 0 0.4rem 0 0.4rem;
            `,
          )}
        >
          <IconAtom name="arrow-down" size={sizeIcon} type={typeIcon} />
        </div>
        <TextAtom>{description}</TextAtom>
      </ButtonAtom>
    );
  }
}

export { DownloadButtonMolecule };
