import * as React from 'react';
import { css, cx } from 'emotion';
// import Image from 'react-shimmer';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
  CardAtom,
  // IconAtom,
  TextAtom
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

const beginnerGradient =
  'background: linear-gradient(270deg, #645AFF 0%, #5AC4FF 100%); border-radius: 8px 8px 0px 0px;';
const intermediateGradient =
  'background: linear-gradient(90deg, #FB529F 0%, #FFA844 100%); border-radius: 8px 8px 0px 0px;';
const expertGradient =
  'background: linear-gradient(270deg, #7143BF 0%, #C86DD7 100%); border-radius: 8px 8px 0px 0px;';

const generateGradientByDifficulty = (difficulty: any) => {
  switch (difficulty.toUpperCase()) {
    case 'EXPERT':
      return expertGradient;
    case 'INTERMEDIATE':
      return intermediateGradient;
    case 'BEGINNER':
    default:
      return beginnerGradient;
  }
};

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
  level = { name: '', label: '' },
  linkTo = '',
  small,
  // category,
  className = '',
  coverImage = '',
  metadata = null
}: // ratings = [],
any) => {
  return (
    <div
      className={cx(
        'flex flex-column',
        css`
          width: ${small ? '20%' : '90%'};
          min-width: ${small ? '250px' : '90%'};
          @media only screen and (max-width: 968px) {
            width: ${small ? '55%' : '100%'};
            min-width: ${small ? '250px' : '100%'};
          }
          @media only screen and (max-width: 480px) {
            width: ${small ? '75%' : '100%'};
            min-width: ${small ? '250px' : '100%'};
          }
        `,
        className
      )}
    >
      <CardAtom
        className={cx(
          `pb3 relative flex ${
            small ? 'flex-column' : 'flex-row'
          } align-center justify-${small ? 'center' : 'start'}`,
          hoverableCard,
          css`
            ${small ? '' : 'height: auto'}
          `
        )}
      >
        <div
          className={cx(
            'w-100 br2 absolute',
            css`
              height: 8px;
              top: 0;
              ${generateGradientByDifficulty(level.name)}
              @media only screen and (max-width: 30em) {
                height: 5px;
              }
            `
          )}
        />
        <div className="ph3 pt2">
          <div className="mt3">
            <img
              src={coverImage}
              alt=""
              className={cx(
                'br3',
                css`
                  min-height: 180px;
                  object-fit: cover;
                `
              )}
            />
          </div>
        </div>
        <div className="flex flex-column justify-start">
          <div
            className={`flex flex-column mt2 ph3 ${
              small ? 'pv1' : 'pv3 pr3'
            } w-100`}
          >
            <TextAtom
              size={small ? 'M' : 'L'}
              className={cx(
                'lh-title mv2 fw6',
                css`
                  min-height: ${small ? 40 : 0}px;
                  color: ${COLORS.BLACK.NORMAL};
                `
              )}
            >
              {title}
            </TextAtom>
            <TextAtom size="XS" className={`f6 lh-copy ${small ? '' : 'mt3'}`}>
              <span
                className={cx(
                  'fw6',
                  css`
                    color: ${COLORS.BLACK.LIGHT};
                  `
                )}
              >
                {instructor.toUpperCase()}
              </span>
              <span
                className={cx(
                  'mh1 fw6',
                  css`
                    color: ${COLORS.BLACK.LIGHT};
                  `
                )}
              >
                ·
              </span>
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
            <TextAtom
              size="S"
              className={cx(
                'mt3 lh-copy',
                css`
                  color: ${COLORS.BLACK.LIGHTER};
                `
              )}
            >
              {description.slice(0, 80)}
              {description.length > 80 && '...'}
            </TextAtom>
            <TextAtom
              size="S"
              className={cx(
                'mt3 lh-copy',
                css`
                  color: ${COLORS.BLACK.LIGHTER};
                `
              )}
            >
              Berkolaborasi dengan <span className="fw6">Hacktiv8</span>
            </TextAtom>
          </div>
        </div>
      </CardAtom>
    </div>
  );
};

CourseCardMolecule.displayName = 'CourseCardMolecule';

export { CourseCardMolecule };
