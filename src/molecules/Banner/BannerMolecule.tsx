import * as React from 'react';
// import { cx, css } from 'emotion';

import Carousel from 'nuka-carousel';
import { cx, css } from 'emotion';

import {
    ButtonAtom, IconAtom, 
} from '../../atoms';

//@ts-ignore
import COLORS from '../../constants/colors';
import { isNull } from 'util';


interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    nameIcon?: string,
    icon?: any,
}

interface IState {
    currentSlideIndex: number,
}

class BannerMolecule extends React.PureComponent<IProps, IState>{
    state = {
        currentSlideIndex: 0,
    }

    timer: any = null;

    render(){
        const {            
       
        } = this.props;

        const { currentSlideIndex } = this.state;

        var images = [
            'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner1.png',
            'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner2.png',
            'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner3.png',
        ];        

        
        return(
            <Carousel
                    // autoplay={true}
                    // pastiin durasi berapa
                    dragging={true}
                    swiping={true}
                    easing="easeCircleInOut"
                    renderBottomCenterControls={isNull}
                    cellSpacing={0}
                    wrapAround={true}                    
                    cellAlign='center'
                    slidesToShow={1.25}
                    afterSlide={currentSlideIndex => this.setState({ currentSlideIndex })}
                    
                    className={cx('', css``)}
                  
                    renderCenterLeftControls={({ previousSlide }) => (
                        <ButtonAtom 
                            onClick={previousSlide}
                            className={cx('pa3', css`border-radius: 0px 40px 40px 0px; padding: 1rem; font-size: 1rem; color:${COLORS.WHITE.NORMAL}; background: ${COLORS.BLACK.DARKER}`)}
                        >
                            <IconAtom name="chevron-left"/>
                        </ButtonAtom>
                     
                    )}
                    renderCenterRightControls={({ nextSlide }) => (
                        <ButtonAtom 
                            onClick={nextSlide}
                            className={cx('pa3', css`border-radius: 40px 0px 0px 40px; padding: 1rem; font-size: 1rem; color:${COLORS.WHITE.NORMAL}; background: ${COLORS.BLACK.DARKER}`)}
                        >
                            <IconAtom name="chevron-right"/>
                        </ButtonAtom>
                    )}
            >
                {
                    images.map(function(img, index){
                        return <img key={ index } src={img} className={css`
                            opacity: ${currentSlideIndex === index ? '1' : '0.5'};
                            transition: 0.5s;
                            `} />
                    })
                }
          </Carousel>
        )
    }
}

export { BannerMolecule };
