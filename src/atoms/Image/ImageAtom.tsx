import * as React from 'react';
// import { cx } from 'emotion';

interface IProps {
  src: string
  alt: string
  className?: string
  width?: string
  height?: string
  type?: string,
}

const ImageAtom = ({
  src,
  alt,
  className,
  // width,
  // height,
}: IProps) =>
  <img
    src={src}
    alt={alt}
    className={className}
  />


ImageAtom.displayName = 'ImageAtom';

export { ImageAtom };
