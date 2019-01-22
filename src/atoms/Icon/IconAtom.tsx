import * as React from 'react';
import { cx } from 'emotion';

import '../../assets/fa.all.min.css';

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
    case TYPES.REGULAR: faIconType = 'far'; break;
    case TYPES.LIGHT: faIconType = 'fal'; break;
    case TYPES.DEFAULT:
    default: faIconType = 'fa';
  }

  return <i className={cx(`${faIconType} fa-${props.name}`, props.className)} />;
};


IconAtom.displayName = 'IconAtom';

export { IconAtom };
