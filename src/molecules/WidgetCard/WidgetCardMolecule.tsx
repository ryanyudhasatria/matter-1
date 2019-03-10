import { css, cx } from "emotion";
import * as React from "react";

// @ts-ignore
import COLORS from "../../constants/colors";

import {
    CardAtom,
} from "../../atoms";

class WidgetCardMolecule extends React.PureComponent<any, any> {

    public state = {};

    public render() {

      const {
        HeadingComponent = () => {},
        ContentComponent = () => {},
       } = this.props;

      return (
        <CardAtom
          type="DEFAULT"
          className={cx("w-50", css``)}
        >
          <article className={cx("pa3", css`width: 100%`)}>
          {
              (typeof HeadingComponent === "string" || HeadingComponent instanceof String)

              ?
              // HEADING IF STRING
              (
                <div className={cx("mv0 ph3 pt3", css``)}>
                  <h1 className={cx("f3 mb0 mt0", css`color: ${COLORS.BLACK.NORMAL}`)}>{HeadingComponent}</h1>
                </div>
              )
              // END HEADING IF STRING
              :
              // HEADING IF COMPONENT
              (
                 <HeadingComponent />
              )
              // END HEADING IF COMPONENT
          }

              <hr className={cx("ma3", css`border: 0.5px solid ${COLORS.BLACK.LIGHTEST}; margin-bottom: 0;`)}/>

              <div className={cx("pa3", css``)}>
              {
                   (typeof ContentComponent === "string" || ContentComponent instanceof String)

                   ?
                   // CONTENT IF STRING
                   (
                        <p className={cx("f6 f5-ns lh-copy measure mv0", css``)}>
                            {ContentComponent}
                        </p>
                   )
                   // END CONTENT IF STRING
                   :
                   // CONTENT IF COMPONENT
                   (
                        <ContentComponent />
                   )
                   // END CONTENT IF COMPONENT
              }

              </div>
          </article>
        </CardAtom>
      );
    }
  }

export { WidgetCardMolecule };
