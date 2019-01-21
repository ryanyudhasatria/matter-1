import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import COLORS from '../../constants/colors'
import {cx, css } from 'emotion'

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
        instructor=""
        category="Development"
        instructorRole="Curriculum Director at Hacktiv8"
        collaborator="Kompas"
        duration=""
        rating="4.2"
        reviewCounts="22"
        coverImage=""
        description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      />
      <CourseCardHorizontalMolecule
        small
        className="ml3"
        title="High Impact Presentation"
        level={{ name: 'Intermediate', label: 'Intermediate '}}
        instructor="Roma Tampubolon"
        category="Development"
        instructorRole="Curriculum Director at Hacktiv8"
        collaborator=""
        duration="10"
        rating=""
        reviewCounts="32"
        icon_left={IconLeft}
        icon_center={IconCenter}
        ActionButtonComponent={() => <a className={cx('f6 link dim br-pill ph3 pv2 dib white', css`background: ${COLORS.GREY.LIGHT}; color: ${COLORS.BLACK.NORMAL}`)} href="#0"><b>Lebih lanjut</b></a> }
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/es6.png"
        description=""
      />
      <CourseCardHorizontalMolecule
        small
        className="ml3"
        title="High Impact Presentation"
        level={{ name: 'Intermediate', label: 'Intermediate '}}
        instructor="Roma Tampubolon"
        category="Development"
        instructorRole="Curriculum Director at Hacktiv8"
        collaborator=""
        duration="10"
        rating=""
        reviewCounts="32"
        icon_left={IconLeft}
        icon_center={IconCenter}
        ActionButtonComponent={() => <a className={cx('f6 link dim br-pill ph3 pv2 dib white', css`background: ${COLORS.GREY.LIGHT}; color: ${COLORS.BLACK.NORMAL}`)} href="#0"><b>Lebih lanjut</b></a> }
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
        description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi. Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      />
    </div>
  )));
