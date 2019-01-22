import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { ButtonAtom } from '../../atoms/Button/ButtonAtom';
import { LearningPathCardMolecule } from './LearningPathCardMolecule';

storiesOf('Molecule.LearningPathCard', module)
  .add(
    'Basic Course Card Molecule',
    withInfo({
      styles,
      text: `
        course card atom will wrap an element with box shadow. No default padding or margins by default.
      `,
    })
    (() => (
    <div className="flex flex-row pa4 w-100 ba b--silver">
      <LearningPathCardMolecule
        small
        className="ml3"
        title="React Developer Mastery Assessment"
        level={{ name: 'Beginner', label: 'Beginner '}}
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Ambil Assessment
          </ButtonAtom>
        )}
      />
    </div>
  )));
