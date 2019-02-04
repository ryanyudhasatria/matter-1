import * as React from 'react';
import { css, cx } from 'emotion';

import {
    CardAtom,
    AvatarAtom,
    TextAtom,
    ButtonAtom
} from '../../atoms';

//@ts-ignore
import COLORS from '../../constants/colors';

interface IProps {
    className?: any;
    'data-test'?: any; 
    srcQuestion?: string;
    altQuestion?: string; 
    srcResponse?: string;
    altResponse?: string;  
    question?: string;
    description?: string;
    response?: string;
    username?:string;
    time?:any;
    timeDescription?:string;
}

class DiscussionForumDetailPagelets extends React.PureComponent<IProps, any> {
    render() {

        const {
            srcQuestion,
            altQuestion,
            srcResponse,
            altResponse,
            question,
            description,
            // response,
            username,
            time,
            // timeDescription,
        } = this.props;       
        
        return (
            <CardAtom type="DEFAULT" className={cx('ma2 pa4', )}>
                <div className={cx('dt dt--fixed', css``)}>
                    <div className="dtc tc pv4 w-10 v-top">
                        <AvatarAtom 
                            src={srcQuestion}
                            alt={altQuestion}
                            type="LARGE_CIRCLE"   
                            className={cx('', css`display: inline-flex;`)}                     
                        />     
                    </div>
                    <div className="dtc tl pv4 w-80 v-top">
                        <TextAtom size="L" className={cx('fw7 mb1 db', css``)}>
                            {question}
                        </TextAtom>
                        <TextAtom size="M" className={cx('mb3 db', css``)}>
                            {username} &#183; {time}                  
                            {
                                 (time >= 60) ? ' hours ' : ' minutes '                                    
                            } ago
                        </TextAtom>
                        <TextAtom size="M" className={cx('db mb4', css``)}>
                            {description}
                        </TextAtom>
                        <ButtonAtom 
                            onClick="button-click"
                            type="DISCUSSION_FORUM"
                            className={cx('db mb3', css`padding-left: 1rem; padding-right: 1rem`)} 
                        >
                           <TextAtom size="M" className={cx('db', css``)} >Follow Response</TextAtom>
                        </ButtonAtom>
                        
                        <hr className={cx('dib w-90', css`border-color: ${COLORS.BLACK.LIGHTEST}; border-width: 0.5px;`)}/>

                        <div className={cx('dt dt--fixed', css``)}>
                            <div className="dtc tl pv4 w-10 v-mid">
                                <AvatarAtom 
                                    src={srcResponse}
                                    alt={altResponse}
                                    type="LARGE_CIRCLE"   
                                    className={cx('', css`display: inline-flex;`)}                     
                                />     
                            </div>
                            <div className="dtc tl pv4 w-80 v-mid">
                                <input id="name" placeholder="Add an answer" className={cx('input-reset ba b--black-20 pa2 mb2 db w-90', css`padding: 1rem; margin: 0;`)} type="text" aria-describedby="name-desc" />
                            </div>
                        </div>
                    </div>               
                </div>
            </CardAtom>
        )
    }
}

export { DiscussionForumDetailPagelets };
