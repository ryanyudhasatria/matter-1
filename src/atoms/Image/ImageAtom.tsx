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
  className
}: // width,
// height,
IProps) => (
  <div>
            <Image 
              // src="http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg"
              // alt={alt} 
              // className={className} 

              src={'https://wallpaperbrowse.com/media/images/hd-wallpapers-1.jpg'}
          width={520} height={520}
          style={{objectFit: 'cover'}} // Style your <img> 
          delay={25}
          duration={3} // Customize the animation duration (s).
              
            />
            </div>
           );

ImageAtom.displayName = 'ImageAtom';

export { ImageAtom };
