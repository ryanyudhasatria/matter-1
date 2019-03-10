import * as React from "react";
// import { css, cx } from 'emotion';
// import * as Tooltip from 'react-simple-tooltip';
import * as ReactTooltip from "react-tooltip";

interface IProps {
  size?: string;
  className?: string;
  message?: string;
  content?: string;
  effect?: string;
  place?: string;
  type?: string;
}

class TooltipAtom extends React.PureComponent<IProps, any> {
    public render() {
        const {
            content = "",
            message = "",
            effect = "",
            place = "",
            type = "",
        } = this.props;
        return(
            <div>
                <span data-tip={message}>{content}</span>
                <ReactTooltip
                    effect={effect}
                    place={place}
                    type={type}
                />
            </div>
        );
    }
}

export { TooltipAtom };
