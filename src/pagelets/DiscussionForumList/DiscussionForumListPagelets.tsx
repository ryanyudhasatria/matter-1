import { css, cx } from "emotion";
import * as React from "react";

import {
    AvatarAtom,
    CardAtom,
    TextAtom,
} from "../../atoms";

interface IProps {
    className?: any;
    "data-test"?: any;
    src?: string;
    alt?: string;
    question?: string;
    description?: string;
    response?: string;
}

class DiscussionForumListPagelets extends React.PureComponent<IProps, any> {
    public render() {

        const {
            src,
            alt,
            question,
            description,
            response,
        } = this.props;

        return (
            <CardAtom type="DEFAULT" className={cx("ma2" )}>
                <div className={cx("dt dt--fixed", css``)}>
                <div className="dtc tc pv4 w-10 v-mid">
                    <AvatarAtom
                        src={src}
                        alt={alt}
                        type="LARGE_CIRCLE"
                        className={cx("", css`display: inline-flex;`)}
                    />
                </div>
                <div className="dtc tl pv4 w-80 v-mid">
                    <TextAtom size="L" className={cx("fw7 db mb2", css``)}>
                        {question}
                    </TextAtom>
                    <TextAtom className={cx("db", css``)}>
                        {description}
                    </TextAtom>
                </div>
                <div className="dtc tc pv4 w-10 v-mid">
                    <TextAtom size="L" className={cx("db mb2 fw7 tc", css``)}>
                        {response}
                    </TextAtom>
                    <TextAtom className={cx("tc db", css``)}>
                        Respon
                    </TextAtom>
                </div>
                </div>
            </CardAtom>
        );
    }
}

export { DiscussionForumListPagelets };
