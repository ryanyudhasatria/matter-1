import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
    AvatarAtom,
    CardAtom,    
} from '../../atoms';

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
            src,
            alt,
            name,
            instructorRole,
            description
        } = this.props;

        return(
            <CardAtom
                className="flex w-25 pa3"
                type="GREY"
                data-test={this.props['data-test']}                
            >
                <div>
                <div className="h3 db">
                <div className="fl dib v-mid tc mr3 mt2">
                        <AvatarAtom 
                            src={src}
                            alt={alt}
                            type="REGULAR_CIRCLE"
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
