import * as React from 'react';
import { cx, css } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';
import { TextAtom } from '../Text/TextAtom';

const avatarCircle = 'border-radius: 100%;';

const avatarRounded = 'border-radius: .25rem;';

const generateInitial = (name = 'User') => {
  const names = name.trim().split(' ');
  if (names.length === 1) {
    return name[0];    
  }
  else if (names[0][0] != null && names[1][0] != null ) {
    return names[0][0] + ((names[1][0] != null )? names[1][0] : '');    
  }
  else {
    return names[0][0] + ((names[1][0] == null )? names[2][0] : '');    
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
    `
};

interface IProps {
  className?: any;
  'data-test'?: any;
  type?: string;
  src?: string;
  alt?: string;
  name?: string;
  children?: any;
  textColor?:any;
}

class AvatarAtom extends React.PureComponent<IProps, any> {
  state = {};

  noImage = (e: any) => {
    e.target.onerror = null;
    e.target.src =
      'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/avatars/placeholder_img.png';
  };

  render() {
    const {
      type = '',
      className = '',
      alt,
      // textColor,
      src = this.props.src,
      name = 'User',
      // textColor,
    } = this.props;

    

    if (src) {
      return (
        <img
          onError={this.noImage.bind(this)}
          src={src}
          alt={alt}
          data-test={this.props['data-test']}
          className={cx(TYPES_LIST[type], className)}
        />
      );
    } else {      
      let background = '';

      if(generateInitial(name[0]) == 'A' || 
         generateInitial(name[0]) == 'F' || 
         generateInitial(name[0]) == 'K' || 
         generateInitial(name[0]) == 'P' || 
         generateInitial(name[0]) == 'U' || 
         generateInitial(name[0]) == 'Z')
      {
        background = COLORS.RED.NORMAL;
      }
      else if(generateInitial(name[0]) == 'B' || 
              generateInitial(name[0]) == 'G' || 
              generateInitial(name[0]) == 'L' || 
              generateInitial(name[0]) == 'Q' || 
              generateInitial(name[0]) == 'V')
      {
        background = COLORS.GREEN.NORMAL;
      }
      else if(generateInitial(name[0]) == 'C' || 
              generateInitial(name[0]) == 'H' || 
              generateInitial(name[0]) == 'M' || 
              generateInitial(name[0]) == 'R' || 
              generateInitial(name[0]) == 'W')
      {
        background = COLORS.PURPLE.NORMAL;
      }
      else if(generateInitial(name[0]) == 'D' || 
              generateInitial(name[0]) == 'I' || 
              generateInitial(name[0]) == 'N' || 
              generateInitial(name[0]) == 'S' || 
              generateInitial(name[0]) == 'X')
      {
        background = COLORS.BLUE.NORMAL;
      }
      else if(generateInitial(name[0]) == 'E' || 
              generateInitial(name[0]) == 'J' || 
              generateInitial(name[0]) == 'O' || 
              generateInitial(name[0]) == 'T' || 
              generateInitial(name[0]) == 'Y')
      {
        background = COLORS.YELLOW.NORMAL;
      };

      return (
        <div
          data-test={this.props['data-test']}
          className={cx(            
            TYPES_LIST[type],
            css`
              -moz-user-select: none;
              -webkit-user-select: none;
              -ms-user-select: none;
              user-select: none;
              -o-user-select: none;
              background: ${background};
            `,
            'flex flex-column items-center justify-center',
            className
          )}
          unselectable="on"
        >
          <TextAtom
            size="L"
            className={cx(
              'fw7',
              css`
                color: ${COLORS.WHITE.NORMAL};
              `
            )}
          >                 
            {generateInitial(name)}
          </TextAtom>
        </div>
      );
    }
  }
}

export { AvatarAtom };
