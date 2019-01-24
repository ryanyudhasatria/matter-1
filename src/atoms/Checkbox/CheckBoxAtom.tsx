import * as React from 'react';
import { cx, css } from 'emotion';

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    id?:string,
    value?:string,
    htmlFor?:string,
    description?:string,
}

class CheckBoxAtom extends React.PureComponent<IProps, any>{
    state = {}

    render(){
        const {
            id = '',
            value = '',
            htmlFor = '',
            description = '',
        } = this.props;
         
        return (            
            <div className={cx('flex items-center mb2', css``)}>
                <input className={cx('mr2', css``)} type="checkbox" id={id} value={value} />
                <label htmlFor={htmlFor} className={cx('lh-copy', css``)}>{description}</label>
            </div>  
        )
    }
}

export { CheckBoxAtom }
