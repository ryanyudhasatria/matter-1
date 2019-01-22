import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
    AvatarAtom,
    CardAtom,    
} from '../../atoms';

const avatarRounded = 'border-radius: .25rem;';

const CARD_TYPES = {
    GREY: css`
      display: inline-flex;
      background: ${COLORS.GREY.LIGHTER};
      border-radius: 8px;
      box-shadow: none;
      width: 25rem;
      padding: 30px;
    `,
};

const TYPES_LIST = {
    REGULAR_ROUNDED: css`
        ${avatarRounded}
        background: ${COLORS.RED.NORMAL};
        width: 48px;
        height: 48px;
    `,
};

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    typeCard?:string,
    src?: string,
    alt?: string,
    children?: any,
    name: string,
    instructorRole: string,
    rating: any,
    description?:string,
    profileImage:string,
}

class TeacherCardMolecule extends React.PureComponent<IProps, any>{
    state = {}

    render(){
        const {
            type = '',
            typeCard = '',
            className = '',
            // children,
            src,
            alt,
            name,
            instructorRole,
            description
        } = this.props;

        return(
            <CardAtom
                className={cx('', CARD_TYPES[typeCard], className)}
                data-test={this.props['data-test']}                
            >
                <div>
                <div className="h3 db">
                <div className="fl dib v-mid tc mr3 mt2">
                        <AvatarAtom 
                            src={src}
                            alt={alt}
                            className={cx('', (TYPES_LIST[type]), className)}
                        />
                    </div>
                    <div className="fl">
                        <h1 className="f5 lh-copy fw7 mb0">{name}</h1>
                        <p className={cx('f6 lh-copy', css`margin:0`)}>{instructorRole}</p>
                    </div>                        
                </div>                    
                    <div className="dib v-mid">                        
                         <p className={cx('db f6 ma0 mt3')}>
                         {description}
                         </p>
                    </div>  
                </div>                                                      
            </CardAtom>
        )
    }
}

export { TeacherCardMolecule };
