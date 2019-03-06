import * as React from 'react';
import { css, cx } from 'emotion';
// import Image from 'react-shimmer';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
  CardAtom,
  IconAtom,
  TextAtom,
  // ImageAtom,
} from '../../atoms';

const hoverableCard = css`
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.1);
  :hover {
    transform: translateY(0px);
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 24px rgba(57, 70, 84, 0.2);
  }
`;

const themeHeader = css `
  top: 0px;
  left: 0px;
  z-index: 1;
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
  height: 100px;
  opacity: 0.8;
  margin: 0;
  position: absolute;
`

const HEADER_THEMES = {
  DEFAULT: css`
    ${themeHeader}
    background: none;
  `,
  BLACK: css`
    ${themeHeader}
    background: linear-gradient(180deg, ${COLORS.BLACK.DARKER} -16.46%, rgba(255, 255, 255, 0) 87.8%);
  `,
  BLUE: css`
    ${themeHeader}
    background: linear-gradient(180deg, ${COLORS.BLUE.NORMAL} -16.46%, rgba(255, 255, 255, 0) 87.8%);
  `
}

const beginnerColor = '#2F80ED';
const intermediateColor = '#FB529F';
const expertColor = '#7143BF';

// const starColor = '#F8BA32';

const generateColorByDifficulty = (difficulty: any) => {
  switch (difficulty.toUpperCase()) {
    case 'EXPERT':
      return expertColor;
    case 'INTERMEDIATE':
      return intermediateColor;
    case 'BEGINNER':
    default:
      return beginnerColor;
  }
};

// const beginnerGradient =
//   'background: linear-gradient(270deg, #645AFF 0%, #5AC4FF 100%); border-radius: 8px 8px 0px 0px;';
// const intermediateGradient =
//   'background: linear-gradient(90deg, #FB529F 0%, #FFA844 100%); border-radius: 8px 8px 0px 0px;';
// const expertGradient =
//   'background: linear-gradient(270deg, #7143BF 0%, #C86DD7 100%); border-radius: 8px 8px 0px 0px;';

// const generateGradientByDifficulty = (difficulty: any) => {
//   switch (difficulty.toUpperCase()) {
//     case 'EXPERT':
//       return expertGradient;
//     case 'INTERMEDIATE':
//       return intermediateGradient;
//     case 'BEGINNER':
//     default:
//       return beginnerGradient;
//   }
// };

// const courseRating = (ratings: any): any => {
//   let rating;
//   if (ratings.length !== 0) {
//     const reducer = (accumulator: any, currentValue: any) => accumulator + currentValue;
//     rating = Math.floor(ratings.map((r: any) => parseInt(r.rating, 10)).reduce(reducer) / ratings.length);
//   }
//   return rating;
// };
 
const CourseCardMolecule = ({
  // slug = '',
  title = '',
  instructor = 'KODE Team',
  description = '',
  category = { name: '', label: '' },
  level = { name: '', label: '' },
  linkTo = '',
  fullImage = true,
  small,
  className = '',
  coverImage = '',
  badge = '',
  duration = '',
  rating = '',  
  // metadata = null,
  // ratings = [],
  type = '',
  onBookmark = () => {},
  IconComponent = () => null,
}:
any) => {
  return (
    
    <CardAtom
      className={cx(
        `pb3 relative flex flex-column align-center justify-start`,
        hoverableCard,
        className,
      )}
    >
    <div>
      {badge && (
        <div className={cx('absolute right-0 ph1', css`
          top: 20px;
          background: ${COLORS.GREEN.NORMAL};
          color: ${COLORS.WHITE.NORMAL};
        `)}
        >
          <TextAtom size="XS" className="fw6 ttu">
            kelas baru
          </TextAtom>
        </div>
      )}
      {/* <div
        className={cx(
          'w-100 br2 absolute',
          css`
            height: 8px;
            top: 0;
            left: 0;
            ${generateGradientByDifficulty(level.name)}
            @media only screen and (max-width: 30em) {
              height: 5px;
            }
          `
        )}
      /> */}      
      <div className={cx(`${fullImage ? '' : 'ph3 pt2'}`)}>
        <div className={cx(HEADER_THEMES[type], css``, className)} />
        <div
          role="button"
          className={cx('absolute white outline-0', css`
            right: 15px;
            top: 15px;
            z-index: 2;
            :hover {
              color: white;
            }
          `)}
          onKeyPress={() => {}}
          onClick={onBookmark ? onBookmark : () => {} }
          tabIndex={0}
        >
          <IconComponent />
        </div>
          <img
            src={coverImage}
            alt=""
            // height="200px"
            // width="auto"
            className={cx(
              fullImage ? 'br3 br--top' : 'br3',
              css`
                min-height: 200px;
                object-fit: cover;
              `
            )}
          />
        </div>
      </div>
      <div className="flex flex-column justify-start">
        <div
          className={`flex flex-column mt1 ph3 pv1 w-100`}
        >
          <div className={cx('flex flex-column', css`min-height: 100px`)}>
            <TextAtom
              size={small ? 'M' : 'L'}
              className={cx(
                'lh-title mv2 fw6',
                css`
                  display: block;
                  display: -webkit-box;
                  text-align: left;
                  margin: 0px;
                  line-height: 1.4;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;    
                  margin-top: .5rem;
                  margin-bottom: .5rem; 
                  color: ${COLORS.BLACK.NORMAL};
                `
              )}
            >
              {title}
            </TextAtom>
            <TextAtom size="XS" className={cx(`f6 lh-copy ${small ? '' : 'mt3'}`, css`
              display: block;
              display: -webkit-box;
              text-align: left;
              margin: 0px;
              line-height: 1.4;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
            `)}>
              <span
                className={cx(
                  'fw6',
                  css`
                    color: ${generateColorByDifficulty(level.name)};
                  `
                )}
              >
                {level.label.toUpperCase()}
              </span>
            </TextAtom>

            <div className={cx('flex flex-row justify-between items-center', css`padding: .5rem 0 0 0 `)}>
            <div className="flex flex-row">
              {duration && (
                  <div className="mr3">
                  <TextAtom size="S">
                      <IconAtom name="clock" /> <span className="fw6">{duration} </span>
                  </TextAtom>
                  </div>
              )}

              {rating && (
                  <div className="dtc tc">
                  <TextAtom size="S">
                      <IconAtom
                      name="star"
                      className={cx(
                          'mr1',
                          css`
                          color: ${COLORS.YELLOW.NORMAL};
                          `
                      )}
                      />
                      <b>
                      {rating}
                      </b>                    
                  </TextAtom>
                  </div>
              )}
            </div>
          </div>
          </div>
          {/* {description && (
            <div className={cx('mt3', css`min-height: 65px`)}>
              <TextAtom
                size="S"
                className={cx(
                  'lh-copy',
                  css`
                    display: block;
                    display: -webkit-box;                    
                    height: 60px;
                    margin: 0 auto;
                    line-height: 1.4;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: ${COLORS.BLACK.LIGHTER};
                  `
                )}
              >
                {description}
              </TextAtom>
            </div>
          )} */}          
          <div className="mt3">
            <TextAtom
              size="S"
              className={cx(
                'lh-copy',
                css`
                  color: ${COLORS.BLACK.LIGHTER};
                `
              )}
            >
              <span className="fw6">{instructor}</span>
            </TextAtom>
          </div>
        </div>
      </div>      
    </CardAtom>
  );
};

CourseCardMolecule.displayName = 'CourseCardMolecule';

export { CourseCardMolecule };
