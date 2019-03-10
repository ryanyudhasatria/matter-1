import * as React from "react";
// import { cx, css } from 'emotion';

import { css, cx } from "emotion";
import Carousel from "nuka-carousel";

import { ButtonAtom, IconAtom } from "../../atoms";

import { isNull } from "util";
// @ts-ignore
import COLORS from "../../constants/colors";

interface IListData {
  // untuk array
  linkUrl?: string;
  imageUrl?: string;
}

interface IProps {
  className?: any;
  "data-test"?: any;
  type?: string;
  nameIcon?: string;
  icon?: any;
  items?: IListData[];
  slidesToShow?: number;
}

interface IState {
  currentSlideIndex: number;
}

class BannerMolecule extends React.PureComponent<IProps, IState> {
  // componentDidMount() {
  //   window.dispatchEvent(new Event('resize'));
  // }

  // componentDidUpdate() {
  //   setTimeout(() => {
  //       window.dispatchEvent(new Event('resize'));
  //   }, 0);
  // }

  public state = {
    currentSlideIndex: 0,
  };

  public render() {

    const { items = [], slidesToShow } = this.props;
    const { currentSlideIndex } = this.state;

    return (
      <Carousel
        autoplay={false}
        dragging={true}
        swiping={true}
        renderBottomCenterControls={isNull}
        cellSpacing={0}
        slideWidth={1}
        speed={600}
        wrapAround={true}
        cellAlign="center"
        slidesToShow={slidesToShow}
        afterSlide={(currentSlideIndex1) => this.setState({ currentSlideIndex: currentSlideIndex1 })}
        renderCenterLeftControls={({ previousSlide }) => (
          <ButtonAtom
            onClick={previousSlide}
            className={cx(
              "pa3",
              css`
                border-radius: 0px 40px 40px 0px;
                padding: 1rem;
                font-size: 1rem;
                color: ${COLORS.WHITE.NORMAL};
                background: ${COLORS.BLACK.DARKER};
              `,
            )}
          >
            <IconAtom name="chevron-left" />
          </ButtonAtom>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <ButtonAtom
            onClick={nextSlide}
            className={cx(
              "pa3",
              css`
                border-radius: 40px 0px 0px 40px;
                padding: 1rem;
                font-size: 1rem;
                color: ${COLORS.WHITE.NORMAL};
                background: ${COLORS.BLACK.DARKER};
              `,
            )}
          >
            <IconAtom name="chevron-right" />
          </ButtonAtom>
        )}
      >
        {items.map((item, index) => {
          return (
            <a
              key={index}
              href={item.linkUrl}
              target="_blank"
              className="outline-0"
            >
              <img
                src={item.imageUrl}
                className={cx("", css`
                  opacity: ${currentSlideIndex === index ? "1" : "0.5"};
                  transition: 0.3s;
                  width: 100%;
                `)}
              />
            </a>
          );
        })
        }
      </Carousel>
    );
  }
}

export { BannerMolecule };
