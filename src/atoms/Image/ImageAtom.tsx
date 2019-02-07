import * as React from 'react';
// import { cx } from 'emotion';
import * as Image from 'react-shimmer';

interface IProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  type?: string;
  delay?: number;
  duration?: number;
}

class ImageAtom extends React.PureComponent<IProps, any>{
  render(){
    const {
      src,
      alt,
      className,
      width,
      height,
      delay,
      duration
    } = this.props;
    return (
      <div>
        <Image
            src={src}
            width={width} 
            height={height}
            alt={alt}
            className={className}
            style={{objectFit: 'cover'}} // Style your <img> 
            delay={delay}
            duration={duration} // Customize the animation duration (s).
        />
      </div>
    )
  }
}

export { ImageAtom };
