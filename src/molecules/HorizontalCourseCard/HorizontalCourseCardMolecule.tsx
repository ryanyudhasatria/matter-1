import * as React from 'react';
import { css, cx } from 'emotion';
// import Image from 'react-shimmer';

//@ts-ignore
import COLORS from '../../constants/colors';

import {
  CardAtom,
  // IconAtom,
  TextAtom,
  IconAtom,
  ImageAtom,
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

const renderDuration = (seconds: number): string => {
  if (seconds < 60) return `${seconds} detik`;
  if (seconds < 3600) return `${(seconds / 60).toPrecision(2)} menit`;
  return `${(seconds / 3600).toPrecision(2)} jam`;
}

const renderStars = (rating: number): any => {
  return ([
    <IconAtom name="star" className={cx('mr1', css`color: ${rating >= 1 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHT};`)} />,
    <IconAtom name="star" className={cx('mr1', css`color: ${rating >= 2 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHT};`)} />,
    <IconAtom name="star" className={cx('mr1', css`color: ${rating >= 3 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHT};`)} />,
    <IconAtom name="star" className={cx('mr1', css`color: ${rating >= 4 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHT};`)} />,
    <IconAtom name="star" className={cx('mr1', css`color: ${rating >= 5 ? COLORS.YELLOW.NORMAL : COLORS.BLACK.LIGHT};`)} />,
  ]);
}

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
  // category = { name: '', label: '' },
  instructorRole = '',
  collaborator = '',
  description = '',
  duration = '',
  rating = '',
  reviewCounts = '',
  level = { name: '', label: '' },
  className = '',
  coverImage = '',
  metadata = null,
  ActionButtonComponent = () => null
}: // ratings = [],
any) => {
  return (
    <CardAtom
    className={cx(
        `relative flex flex-column align-center justify-start ph4-ns`,
        hoverableCard,
        css`
        height: auto;
        `,
        className,
    )}
    >
    <div
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
    />
    <div className="w-100 flex flex-row bb b--black-10 center pt0 pb5 pv4-l pv4-m ph0-ns">
        <div className={cx('w-25 pv2 db dtc-ns v-top-ns')}>
        <div
            className={cx(
            'w-100 br3'
            )}
        >
            <ImageAtom
            src={coverImage}
            alt=""
            width={100}
            height={100}
            delay={25}
            duration={0.9}
            className={cx(
                'w-100 br3',
                css`
                height: 180px !important;
                width: 180px !important;
                object-fit: cover;
                `
            )}
            />
        </div>
        </div>
        <div className="w-75 flex flex-column ph4-ns ph3 pv2-ns">
        <TextAtom
            size="L"
            className={cx(
            'lh-title fw6',
            css`
                min-height: 0px;
                color: ${COLORS.BLACK.NORMAL};
            `
            )}
        >
            {title}
        </TextAtom>
        <TextAtom size="XS" className={`f6 lh-copy mt0`}>
            <TextAtom
            size="XS"
            className={cx(
                'fw6 db pt2-ns',
                css`
                color: ${COLORS.BLACK.LIGHT};
                `
            )}
            >
            <span
                className={cx(
                'fw6',
                css`
                    color: ${generateColorByDifficulty(level.name)};
                `
                )}
            >
                {level && level.label && level.label.toUpperCase()}
            </span>
            </TextAtom>
        </TextAtom>
        <TextAtom
            size="S"
            className={cx(
            'db mt3 mt3 lh-copy',
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
            {description}
        </TextAtom>
        <TextAtom size="S" className={`db mt2 f6 lh-copy`}>
            {instructor ? (
            <div className={cx('lh-copy', css`color: ${COLORS.BLACK.NORMAL};`)}>
                <TextAtom
                size="XS"
                className={cx(
                    'fw6 f7 db pt2-ns',
                    css`
                    color: ${COLORS.BLACK.LIGHT};
                    `
                )}
                >
                PENGAJAR
                </TextAtom>
                <span className="fw6">{instructor} &nbsp;</span>
                <span>{instructorRole}</span>
            </div>
            ) : (
            <div className={cx('lh-copy')} />
            )}

            {collaborator ? (
            <div className={cx('lh-copy')}>
                <TextAtom>Berkolaborasi dengan </TextAtom>
                <span className="fw6">{collaborator}</span>
            </div>
            ) : (
            <div className={cx('lh-copy')} />
            )}
        </TextAtom>
        </div>
    </div>
    <div className="flex flex-row justify-between items-center pv3-ns">
        <div className="flex flex-row">
        {duration && (
            <div className="mr3">
            <TextAtom size="S">
                <IconAtom name="clock" /> <span className="fw6">{renderDuration(duration)}</span> waktu belajar
            </TextAtom>
            </div>
        )}

        {rating && (
            <div className="dtc tc">
            <TextAtom size="S">
                {renderStars(rating)}
                <span className="fw6">
                {rating.toPrecision(2)}
                </span>
                {/* <b
                className={cx(
                    'underline-ns'
                )}
                >
                {reviewCounts} Reviews
                </b> */}
            </TextAtom>
            </div>
        )}
    </div>
    <div>
        <div className="dtc tc">
            <ActionButtonComponent />
        </div>
        </div>
    </div>
    </CardAtom>
  );
};

HorizontalCourseCardMolecule.displayName = 'HorizontalCourseCardMolecule';

export { HorizontalCourseCardMolecule };
