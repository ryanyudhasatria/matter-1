import * as React from 'react';
import { css, cx } from 'emotion';

//@ts-ignore
import COLORS from '../../constants/colors';

import { CardAtom, TextAtom } from '../../atoms';

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

const CourseProgressCardMolecule = ({
  title = '',
  instructor = 'KODE Team',
  coverImage = null,
  fullImage = true,
  category = { name: '', label: '' },
  description = '',
  level = { name: '', label: '' },
  ProgressBarComponent = () => null,
  FooterComponent = () => null,
  className = ''
}: any) => {
  return (
    <CardAtom
      className={cx(
        `pb3 relative flex flex-column align-center justify-start`,
        hoverableCard,
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
      <div className="flex flex-column justify-start">
        <div className={cx(`${fullImage ? '' : 'ph3 pt2'}`)}>
          <div>
            <img
              src={coverImage}
              alt=""
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
        <div
          className={`flex flex-column ph3 pv1 w-100`}
        >
          <TextAtom
            size="M"
            className={cx(
              'lh-title mv2 fw6',
              css`
                color: ${COLORS.BLACK.NORMAL};
              `
            )}
          >
            {title}
          </TextAtom>
          <TextAtom size="XS" className={`f6 lh-copy`}>
            <span
              className={cx(
                'fw6',
                css`
                  color: ${COLORS.BLACK.LIGHT};
                `
              )}
            >
              {category.label.toUpperCase()}
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
          {description && (
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
          )}
          <ProgressBarComponent />
          <FooterComponent />
        </div>
      </div>
    </CardAtom>
  );
};

CourseProgressCardMolecule.displayName = 'CourseProgressCardMolecule';

export { CourseProgressCardMolecule };
