import * as React from 'react';
import { cx } from 'emotion';

import '../../assets/fonts.css';

const TYPES = {
  DEFAULT: 'DEFAULT',
  REGULAR: 'REGULAR',
  LIGHT: 'LIGHT',
  BRAND: 'BRAND',
};

interface IProps {
  type? : string
  name?: string
  className?: string
}

const IconAtom = (props: IProps = {
  type: 'REGULAR',
  name: '',
  className: '',
}) => {
  let faIconType;

  switch (props.type) {
    case TYPES.REGULAR: faIconType = 'foawer'; break;
    case TYPES.LIGHT: faIconType = 'foawel'; break;
    case TYPES.DEFAULT:
    default: faIconType = 'foawe';
  }

  return <i className={cx(`${faIconType} foawe-${props.name}`, props.className)} />;
};


IconAtom.displayName = 'IconAtom';

export { IconAtom };
