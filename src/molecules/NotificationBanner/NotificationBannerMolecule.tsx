import { css, cx } from "emotion";
import * as React from "react";
import { Motion, spring } from "react-motion";

import { IconAtom, TextAtom } from "../../atoms";

const genBannerStyle = (type: any) => {
  let style = "color: #FFFFFF;";
  switch (type) {
    case "SUCCESS": style += "background: #1BCBD1"; break;
    case "FAILURE": style += "background: #FF6260"; break;
    case "LOADING": style += "background: #FFBA0B"; break;
    default: style += "background: #1BCBD1"; break;
  }

  return style;
};

class NotificationBannerMolecule extends React.Component<any, any> {
  public state = { isVisible: true };

  public render() {
    const { type, children } = this.props;

    return (
      <Motion
        defaultStyle={{ height: 0 }}
        style={{ height: spring(56) }}
      >
        {(value: any) => (
          <div
            className={cx("flex flex-row justify-between align-center fixed w-100 ph3 pv2", css`z-index: 997; top: 0; left: 0; ${genBannerStyle(type)}`)}
            style={{ height: value.height, display: this.state.isVisible ? "flex" : "none" }}
          >
            <div />
            {typeof children === "string" ? <TextAtom className="self-center">{children}</TextAtom> : children}
            <div className="ph3 flex flex-row self-center justify-end align-center">
              <div
                role="button"
                tabIndex={0}
                onKeyPress={() => {}}
                onClick={this.props.onClose ? this.props.onClose : () => {}}
                className="overflow-hidden outline-0"
              >
                <IconAtom
                  name="times"
                  className="white self-center"
                />
              </div>
            </div>
          </div>
        )}
      </Motion>
    );
  }
}

export { NotificationBannerMolecule };
