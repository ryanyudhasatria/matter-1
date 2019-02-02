import * as React from 'react';
// import { cx } from 'emotion';
import * as Image from 'react-shimmer';

interface IProps {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
  type?: string;
}

const ImageAtom = ({
  src,
  alt,
  className,
  width,
  height,
}:
IProps) => (
  <Image
    src={src}
    width={width} height={height}
    alt={alt}
    className={className}
    style={{objectFit: 'cover'}} // Style your <img> 
    delay={25}
    duration={0.9} // Customize the animation duration (s).
/>
);

ImageAtom.displayName = 'ImageAtom';

export { ImageAtom };
