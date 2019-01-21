import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { CourseCardHorizontalMolecule } from './CourseCardHorizontalMolecule';

import IconLeft from './clock.png';
import IconCenter from './star.png';

storiesOf('Molecule.CourseCardHorizontal', module)
  .add(
    'Basic Course Card Horizontal Molecule',
    withInfo({
      styles,
      text: `
        course card atom will wrap an element with box shadow. No default padding or margins by default.
      `,
    })
    (() => (
    <div className="flex flex-row pa4 w-100 ba b--silver">
      <CourseCardHorizontalMolecule
        small
        className="ml3"
        title="Team Engagement: Dimulai dari Hal-Hal Kecil"
        level={{ name: 'Beginner', label: 'Beginner '}}
        instructor="Roma Tampubolon"
        category="Development"
        jabatan="Curriculum Director at Hacktiv8 In collaboration with"
        perusahaan="Kompas"
        jam_terbang="6"
        point="4.5"
        review="22"
        icon_left={IconLeft}
        icon_center={IconCenter}
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/teamengagement.png"
        description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      />
      <CourseCardHorizontalMolecule
        small
        className="ml3"
        title="High Impact Presentation"
        level={{ name: 'Intermediate', label: 'Intermediate '}}
        instructor="Roma Tampubolon"
        category="Development"
        jabatan="Curriculum Director at Hacktiv8 In collaboration with"
        perusahaan="Kompas"
        jam_terbang="10"
        point="4.6"
        review="32"
        icon_left={IconLeft}
        icon_center={IconCenter}
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/teamengagement.png"
        description="Pelajari dasar-dasar React dan mulai perjalananmu sebagai React Developer dan ikutilah perjalanan pembelajaran ini!"
      />
    </div>
  )));
