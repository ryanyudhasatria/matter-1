import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

const TYPES_LIST = {
    NORMAL: css`
        background: ${COLORS.GREY.LIGHT};
        color: ${COLORS.BLACK.DARKER};
        font-weight: bold;
        padding: 10px;        
    `,
    SELECTED: css`
        background: ${COLORS.GREEN.NORMAL};
        color: ${COLORS.WHITE.NORMAL};
        font-weight: bold;
        padding: 10px;
    `,
};

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    name?: string,
}

class CheckerMolecule extends React.PureComponent<IProps, any>{
    state = {}

    render(){
        const {
            type = '',
            className = '',
            name,
        } = this.props;

        return(
               <a className={cx('f6 link dim br-pill ph3 pv2 mb2 dib white bg-black w4 tc', css``, (TYPES_LIST[type]), className)} href="#0">{name}</a>          
        )
    }
}

export { CheckerMolecule };
