import * as React from 'react';
import { cx, css } from 'emotion';


import * as black from './black.png'
import * as white from './white.png'
import * as betablack from './betablack.png'
import * as betawhite from './betawhite.png'


interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string, 
    src: string,       
    alt?: string,
    width?:string,
    height?:string,
}

class LogoAtom extends React.PureComponent<IProps, any>{
    state = {}

    render(){
        const {
            type = '',
            alt = '',
            width = '',
            height = '',
        } = this.props;

        let logo = null;

        if (type === 'BLACK') {
            logo = black;
        } 
        if (type === 'WHITE') {
            logo = white;
        } 
        if (type === 'BETABLACK') {
            logo = betablack;
        } 
        if (type === 'BETAWHITE') {
            logo = betawhite;
        } 

        return (            
            <img 
                src={logo}
                alt={alt}                
                data-test={this.props['data-test']}
                className={cx('', css``)}
                width={width}
                height={height}
            />
        )
    }
}

export { LogoAtom }
