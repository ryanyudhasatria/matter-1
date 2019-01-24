import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
    ButtonAtom, 
    ImageAtom,
    TextAtom
} from '../../atoms';

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    name?: string,
    src?: string,
    alt?: string,
}

class DownloadButtonMolecule extends React.PureComponent<IProps, any>{
    state = {}

    render(){
        const {
             name = '',
             src = '',
             alt = '',
        } = this.props;

        return(
           <ButtonAtom
            className={cx('', css`padding: 0.5rem;width: 8rem;display:block;`)}
            type="DEFAULT_PRIMARY"
           >
            <ImageAtom 
                className={cx('fl')}
                src={src}
                alt={alt}
            />
            <TextAtom>{name}</TextAtom>
           </ButtonAtom>
        )
    }
}

export { DownloadButtonMolecule };
