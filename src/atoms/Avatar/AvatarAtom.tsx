import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';
import { TextAtom } from '../Text/TextAtom';

const avatarCircle  = 'border-radius: 100%;';

const avatarRounded = 'border-radius: .25rem;';

const generateInitial = (name = 'User') => {
    const names = name.trim().split(' ');
    if (names.length === 1) {
        return name[0];
    } else {
        return names[0][0] + (names[1][0] ? names[1][0] : '');
    }
};

const TYPES_LIST = {
    SMALL_CIRCLE: css`
      ${avatarCircle}
        background: ${COLORS.RED.NORMAL};
        width: 36px;
        height: 36px;                
    `,
    REGULAR_CIRCLE: css`
      ${avatarCircle}
        background: ${COLORS.RED.NORMAL};
        width: 48px;
        height: 48px;
    `,
    LARGE_CIRCLE: css`
      ${avatarCircle}
        background: ${COLORS.RED.NORMAL};
        width: 64px;
        height: 64px;
    `,
    SMALL_ROUNDED: css`
      ${avatarRounded}
        background: ${COLORS.RED.NORMAL};
        width: 36px;
        height: 36px;
    `,
    REGULAR_ROUNDED: css`
      ${avatarRounded}
        background: ${COLORS.RED.NORMAL};
        width: 48px;
        height: 48px;
    `,
    LARGE_ROUNDED: css`
      ${avatarRounded}
        background: ${COLORS.RED.NORMAL};
        width: 64px;
        height: 64px;
    `,
};

interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    src?: string,
    alt?: string,
    name?: string,
    children?: any,
}

class AvatarAtom extends React.PureComponent<IProps, any> {
    state = {}    

    noImage = (e: any) => {
        e.target.onerror = null;
        e.target.src = 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/avatars/placeholder_img.png';   
    }

    render(){
        const {
            type = '',
            className = '',    
            alt,
            src = this.props.src,                      
            name = 'User',
        } = this.props;        

        if (src) {
            return (
                <img            
                    onError={this.noImage.bind(this)}
                    src={src}
                    alt={alt}
                    data-test={this.props['data-test']}
                    className={cx((TYPES_LIST[type]), className)}
                />        
            )
        }
        else {
            return (
                <div
                data-test={this.props['data-test']}
                className={cx((TYPES_LIST[type]), css`
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select:none;
                user-select:none;
                -o-user-select:none;
                `, 'flex flex-column items-center justify-center'
                , className)}
                unselectable="on"
                >
                    <TextAtom size="L" className={cx('fw7', css`color: ${COLORS.WHITE.NORMAL}`)}>
                        {generateInitial(name)}
                    </TextAtom>
                </div>
            )
        }        
    }
}

export { AvatarAtom };
