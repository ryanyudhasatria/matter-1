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
        className="mr3"
        title="React Developer Pathway"
        level={{ name: 'Beginner', label: 'Beginner '}}
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lihat Learning Path
          </ButtonAtom>
        )}
      />
      <LearningPathCardMolecule
        small
        className="mr3"
        title="React Developer Pathway"
        level={{ name: 'Beginner', label: 'Beginner '}}
        courses={[{}, {}, {}]}
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lihat Learning Path
          </ButtonAtom>
        )}
      />
      <LearningPathCardMolecule
        small
        className="mr3"
        title="React Developer Pathway"
        level={{ name: 'Beginner', label: 'Beginner '}}
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lihat Learning Path
          </ButtonAtom>
        )}
      />
    </div>
  )));
