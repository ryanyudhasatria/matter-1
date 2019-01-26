import * as React from 'react';
import { css, cx } from 'emotion';
// import Image from 'react-shimmer';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
  CardAtom,
  // IconAtom,
  TextAtom,
  IconAtom
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

const HorizontalCourseCardMolecule = ({
  // slug = '',
  title = '',
  instructor = 'KODE Team',
  category = '',
  instructorRole = '',
  collaborator = '',
  description = '',
  duration = '',
  rating = '',
  reviewCounts = '',
  level = { name: '', label: '' },
  // category,
  className = '',
  coverImage = '',
  metadata = null,
  ActionButtonComponent = () => null
}: // ratings = [],
any) => {
  return (
    <div
      className={cx(
        'flex flex-column',
        css`
          width: 90%;
          min-width: 90%;
          @media only screen and (max-width: 968px) {
            width: 100%;
            min-width: 100%;
          }
          @media only screen and (max-width: 480px) {
            width: 100%;
            min-width: 100%;
          }
        `,
        className
      )}
    >
      <CardAtom
        className={cx(
          `relative flex flex-row align-center justify-start`,
          hoverableCard,
          css`
            height: auto;
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
        <div className="dt mw7 bb b--black-10 center pt0 pb5 pv5-m pr3-ns pl3-ns pv4-ns">
          <div className={cx('db dtc-ns v-top-ns')}>
            <div
              className={cx(
                'mw7 br3',
                css`
                  width: 13rem;
                `
              )}
            >
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
          <div className="db dtc-ns ph2 pl3-ns">
            <TextAtom
              size="L"
              className={cx(
                'lh-title mv2 fw6',
                css`
                  min-height: 0px;
                  color: ${COLORS.BLACK.NORMAL};
                `
              )}
            >
              {title}
            </TextAtom>
            <TextAtom size="XS" className={`f6 lh-copy mt3`}>
              <span
                className={cx(
                  'fw6 db pt2-ns ',
                  css`
                    color: ${COLORS.BLACK.LIGHT};
                  `
                )}
              >
                {category.toUpperCase()}
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
              </span>
            </TextAtom>
            <TextAtom
              size="S"
              className={cx(
                'db mt3 mt3 lh-copy',
                css`
                  color: ${COLORS.BLACK.LIGHTER};
                `
              )}
            >
              {description ? (
                <span>
                  {description.slice(0, 100)}
                  {description.length > 100 && '...'}
                </span>
              ) : null}
            </TextAtom>
            <TextAtom size="S" className={`db mt3 f6 lh-copy mt3`}>
              {instructor ? (
                <div className={cx('lh-copy')}>
                  <span
                    className={cx(
                      'fw6 f7 db pt2-ns',
                      css`
                        color: ${COLORS.BLACK.LIGHT};
                      `
                    )}
                  >
                    PENGAJAR
                  </span>
                  <b>{instructor} &nbsp;</b>
                  <span>{instructorRole}</span>
                </div>
              ) : (
                <div className={cx('lh-copy')} />
              )}

              {collaborator ? (
                <div className={cx('lh-copy')}>
                  <span>In collaboration with </span>
                  <b>{collaborator}</b>
                </div>
              ) : (
                <div className={cx('lh-copy')} />
              )}
            </TextAtom>
          </div>
        </div>
        <div className="dt pv3 flex">
          <div className="dt dt--fixed">
            {duration ? (
              <div className="dtc tc ">
                <IconAtom name="clock" /> <b>{duration}</b> of learning time
              </div>
            ) : (
              <div className="dtc tc " />
            )}

            {rating ? (
              <div className="dtc tc ">
                <IconAtom
                  name="star"
                  className={cx(
                    '',
                    css`
                      color: ${COLORS.YELLOW.NORMAL};
                    `
                  )}
                />{' '}
                <b>
                  {rating} <span className="mh1">·</span>
                </b>{' '}
                <b
                  className={cx(
                    'underline-ns',
                    css`
                      color: ${COLORS.PURPLE.NORMAL};
                    `
                  )}
                >
                  {reviewCounts} Reviews
                </b>
              </div>
            ) : (
              <div className="dtc tc " />
            )}
            <div className="dtc tc ">
              <ActionButtonComponent />
            </div>
          </div>
        </div>
      </CardAtom>
    </div>
  );
};

HorizontalCourseCardMolecule.displayName = 'HorizontalCourseCardMolecule';

export { HorizontalCourseCardMolecule };
