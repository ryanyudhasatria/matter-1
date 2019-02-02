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

const LearningPathCardMolecule = ({
  title = '',
  instructor = 'KODE Team',
  coverImage = null,
  fullImage = true,
  description = '',
  courses = [],
  level = { name: '', label: '' },
  ProgressBarComponent = () => null,
  FooterComponent = () => null,
  small,
  className = ''
}: any) => {
  return (
    <CardAtom
      className={cx(
        `pb3 relative flex flex-column align-center justify-start`,
        hoverableCard,
        css`
          ${small ? '' : 'height: auto'}
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
            ${generateGradientByDifficulty(level.name)}
            @media only screen and (max-width: 30em) {
              height: 5px;
            }
          `
        )}
      />
      <div className="flex flex-column justify-start">
        <div className={`flex flex-column w-100`}>
        {coverImage && (
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
        )}
        <div className="ph3 flex flex-column">
          <TextAtom
            size={small ? 'M' : 'L'}
            className={cx(
              'lh-title mv2 fw6',
              css`
                color: ${COLORS.BLACK.NORMAL};
              `
            )}
          >
            {title}
          </TextAtom>
          {courses && (
            <div>
            <TextAtom size="XS" className={`f6 lh-copy ${small ? '' : 'mt3'}`}>
                <span
                  className={cx(
                    'fw6',
                    css`
                      color: ${COLORS.BLACK.LIGHT};
                    `
                  )}
                >
                  {`${courses.length} kelas di learning path ini`.toUpperCase()}
                </span>
              </TextAtom>
            </div>
          )}
          <TextAtom
            size="S"
            className={cx(
              'mv2 lh-copy',
              css`
                color: ${COLORS.BLACK.LIGHTER};
              `
            )}
          >
            {description}
          </TextAtom>
          <ProgressBarComponent />
          <FooterComponent />
        </div>
        </div>
      </div>
    </CardAtom>
  );
};

LearningPathCardMolecule.displayName = 'LearningPathCardMolecule';

export { LearningPathCardMolecule };
