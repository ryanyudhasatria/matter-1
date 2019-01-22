import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import '../../assets/fa.all.min.css';

const TYPES_LIST = {
    NORMAL: css`
        background: ${COLORS.GREY.LIGHT};
        color: ${COLORS.BLACK.DARKER};       
    `,
    SELECTED: css`
        background: ${COLORS.GREEN.NORMAL};
        color: ${COLORS.WHITE.NORMAL};
    `,
};

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: any,
    name?: string,
    description?: string,
}

const CheckerMolecule = (props: IProps = {
    name: '',
    type: '',
    className: '',
    description: '',
}) => {
    let faIconType

    return (
        <a className={cx('f6 link dim br-pill ph3 pa3 w-10 tc fw7 mb2 dib white bg-black', TYPES_LIST[props.type], props.className)}>
            {props.description} <i className={cx(`${faIconType} fa-${props.name}`, props.className)}></i>
        </a>
    )
}
export { CheckerMolecule };
