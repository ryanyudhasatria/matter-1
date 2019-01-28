import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { ButtonAtom } from '../../atoms/Button/ButtonAtom';
import { ProgressBarAtom } from '../../atoms/ProgressBar/ProgressBarAtom';
import { CourseProgressCardMolecule } from './CourseProgressCardMolecule';

storiesOf('Molecule.CourseProgressCard', module)
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
      <CourseProgressCardMolecule
        small
        className="ml3 w-100"
        title="Pengenalan React Native"
        category={{ name: 'Data Science', label: 'Data Science '}}
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Riza Fahmi"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
        ProgressBarComponent={() => (
          <ProgressBarAtom progress={0.5} className="mv3" />
        )}
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lanjutkan
          </ButtonAtom>
        )}
      />
      <CourseProgressCardMolecule
        small
        className="ml3 w-100"
        title="Pengenalan React Native dan Mengaplikasikannya"
        category={{ name: 'Data Science', label: 'Data Science '}}
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Riza Fahmi"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React "
        ProgressBarComponent={() => (
          <ProgressBarAtom progress={0.5} className="mv3" />
        )}
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lanjutkan
          </ButtonAtom>
        )}
      />
      <CourseProgressCardMolecule
        small
        className="ml3 w-100"
        title="Pengenalan React Native"
        category={{ name: 'Data Science', label: 'Data Science '}}
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Riza Fahmi"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React "
        ProgressBarComponent={() => (
          <ProgressBarAtom progress={0.5} className="mv3" />
        )}
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lanjutkan
          </ButtonAtom>
        )}
      />
      <CourseProgressCardMolecule
        small
        className="ml3 w-100"
        title="Pengenalan React Native"
        category={{ name: 'Data Science', label: 'Data Science '}}
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Riza Fahmi"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
        ProgressBarComponent={() => (
          <ProgressBarAtom progress={0.5} className="mv3" />
        )}
        FooterComponent={() => (
          <ButtonAtom className="self-end mt2" type="SMALL_PRIMARY">
            Lanjutkan
          </ButtonAtom>
        )}
      />
    </div>
  )));
