import * as React from 'react';
import { cx, css } from 'emotion';
import * as style from './CheckBoxAtom.css';

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    id?:string,
    value?:string,
    htmlFor?:string,
    description?:string,
}

// const container = {
//     display: 'block',
//     position: 'relative',
//     paddingLeft: '35px',
//     marginBottom: '12px',
//     cursor: 'pointer',
//     fontSize: '22px',
//     userSelect: 'none',
// }
            
        

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
            <label className={style.container}>
                <input type="checkbox" id={id} value={value}/>
                <label htmlFor={htmlFor} className={cx('', css``)}>{description}</label>
            </label>
        )
    }
}

export { CheckBoxAtom }
