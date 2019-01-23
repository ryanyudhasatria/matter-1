import * as React from 'react';
import { cx } from 'emotion';

// import '../../assets/fa.all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faIcon from '@fortawesome/free-solid-svg-icons'

const TYPES = {
  DEFAULT: 'DEFAULT',
  REGULAR: 'REGULAR',
  LIGHT: 'LIGHT',
  BRAND: 'BRAND',
};

interface IProps {
  type?: string
  name: string
  className?: string
  size?: any  
}

function camelize(str: string){
  return str.replace(/\W+(.)/g, function(match, chr)
    {
        return chr.toUpperCase();
    });
}

const IconAtom = (props: IProps = {
  type: 'REGULAR',
  name: '',
  className: '',
  size: '',
}) => {
  let faIconType;

  switch (props.type) {
    case TYPES.REGULAR: faIconType = 'far'; break;
    case TYPES.LIGHT: faIconType = 'fal'; break;
    case TYPES.DEFAULT:
    default: faIconType = 'fa';
  }

  return (
      <FontAwesomeIcon 
          icon={faIcon["fa" + camelize(props.name[0].toUpperCase() + props.name.slice(1))]}                                   
          size={props.size}
          className={cx(`${faIconType} fa-${props.name}`, props.className)}  
      />
  )
};


IconAtom.displayName = 'IconAtom';

export { IconAtom };
