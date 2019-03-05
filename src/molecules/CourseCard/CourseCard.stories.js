import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { CourseCardMolecule } from './CourseCardMolecule';

storiesOf('Molecule.CourseCard', module)
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
      <CourseCardMolecule
        small
        type={text('Type', 'NONE')}
        className="ml3 w-25"
        title="Pengenalan React Native"
        category={{ name: 'DATA SCIENCE', label: 'Data Science'}}
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Riza Fahmi"
        rating="5"
        duration="10"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
      />
      <CourseCardMolecule
        small
        type={text('Type', 'BLACK')}
        className="ml3 w-25"
        title="Team Engagement: Dimulai dari Hal-Hal Kecil"
        category={{ name: 'DATA SCIENCE', label: 'Data Science'}}
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Roma Tampubolon"
        rating="4.5"
        duration="3"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/teamengagement.png"
        description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      />
      <CourseCardMolecule
        small
        className="ml3 w-25"
        type={text('Type', 'BLUE')}
        title="High Impact Presentation"
        category={{ name: 'DATA SCIENCE', label: 'Data Science'}}
        level={{ name: 'Intermediate', label: 'Intermediate '}}
        rating=""
        duration="3"
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/presentation.png"
        description="Pelajari dasar"
      />
      <CourseCardMolecule
        small
        className="ml3 w-25"
        title="Learn How to Learn Programming"
        category={{ name: 'DATA SCIENCE', label: 'Data Science'}}
        level={{ name: 'Expert', label: 'Expert '}}
        rating="4"
        duration=""
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/es6.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
      />
    </div>
  )));
