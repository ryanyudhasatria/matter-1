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

interface listdata { //untuk array
    linkUrl?:string,
    imageUrl?:string,
}
interface IProps {
    className?: any,
    'data-test'?: any,
    type?: string,
    nameIcon?: string,
    icon?: any,
    items?:listdata[]
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
            
            items = [],            
            
        } = this.props;
        const { currentSlideIndex } = this.state;
        
        return(
            <Carousel
                    autoplay={true}  
                    dragging={true}
                    swiping={true}
                   
                    renderBottomCenterControls={isNull}
                    cellSpacing={0}
                    wrapAround={true}                    
                    cellAlign='center'
                    slidesToShow={1.75}
                    afterSlide={currentSlideIndex => this.setState({ currentSlideIndex })}                                                        
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
                    items.map(function(item, index){
                        return <a key={ index } href={item.linkUrl} target="_blank"><img  src={item.imageUrl} className={css`
                            opacity: ${currentSlideIndex === index ? '1' : '0.5'};
                            transition:0.3s;
                            `} /></a>
                    })                    
                }
          </Carousel>
        )
    }
}

export { BannerMolecule };
