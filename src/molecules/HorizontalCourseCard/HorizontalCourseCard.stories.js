import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import {cx, css } from 'emotion';
import { ButtonAtom } from '../../atoms/Button/ButtonAtom';
import styles from '../../styles';
import { HorizontalCourseCardMolecule } from './HorizontalCourseCardMolecule';

storiesOf('Molecule.HorizontalCourseCardMolecule', module)
  .add(
    'Basic Horizontal Course Card Molecule',
    withInfo({
      styles,
      text: `
        course card atom will wrap an element with box shadow. No default padding or margins by default.
      `,
    })
    (() => (
    <div className="flex flex-column pa4 w-70 ba b--silver">
      <HorizontalCourseCardMolecule
        small
        className="mv3"
        title="High Impact Presentation"
        level={{ name: 'Intermediate', label: 'Intermediate'}}
        instructor="Roma Tampubolon"
        duration={4000}
        rating={5.0}
        reviewCounts="32"
        instructorRole="Curriculum Director at Hacktiv8"
        ActionButtonComponent={() => <ButtonAtom type="SMALL_PRIMARY">Lihat Course Ini</ButtonAtom>  }
        coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/es6.png"
        description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      />       
    </div>
  )));


      // <HorizontalCourseCardMolecule
      //   small
      //   className="mv3"
      //   title="Team Engagement: Dimulai dari Hal-Hal Kecil"
      //   level={{ name: 'Beginner', label: 'Beginner '}}
      //   instructor=""
      //   category="Development"
      //   instructorRole="Curriculum Director at Hacktiv8"
      //   collaborator="Kompas"
      //   duration=""
      //   rating="4.2"
      //   reviewCounts="22"
      //   coverImage=""        
      //   description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      // />
      // <HorizontalCourseCardMolecule
      //   small
      //   className="mv3"
      //   title="High Impact Presentation"
      //   level={{ name: 'Intermediate', label: 'Intermediate '}}
      //   instructor="Roma Tampubolon"
      //   category="Development"
      //   instructorRole="Curriculum Director at Hacktiv8"
      //   collaborator=""
      //   duration="10"
      //   rating=""
      //   reviewCounts="32"
      //   ActionButtonComponent={() => <a className={cx('f6 link dim br-pill ph3 pv2 dib white', css`background: ${COLORS.GREY.LIGHT}; color: ${COLORS.BLACK.NORMAL}`)} href="#0"><b>Lebih lanjut</b></a> }
      //   coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/es6.png"
      //   description=""
      // />
      // <HorizontalCourseCardMolecule
      //   small
      //   className="mv3"
      //   title="High Impact Presentation"
      //   level={{ name: 'Intermediate', label: 'Intermediate '}}
      //   instructor="Roma Tampubolon"
      //   category="Development"
      //   instructorRole="Curriculum Director at Hacktiv8"
      //   collaborator=""
      //   duration="10"
      //   rating=""
      //   reviewCounts="32"
      //   ActionButtonComponent={() => <a className={cx('f6 link dim br-pill ph3 pv2 dib white', css`background: ${COLORS.GREY.LIGHT}; color: ${COLORS.BLACK.NORMAL}`)} href="#0"><b>Lebih lanjut</b></a> }
      //   coverImage="https://s3-ap-southeast-1.amazonaws.com/kode-images/public/course-covers/redis.png"
      //   description="Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi. Keterlibatan adalah alasan kenapa sebuah tim bisa berhasil. Saat ini, banyak organisasi mengalami tantangan dalam mengelola dan meningkatkan produktivitas di tempat kerja. Di course ini, team leader bisa belajar bagaimana menciptakan lingkungan kerja yang baik dengan cara mengintegrasikan prinsip-prinsip keterlibatan karyawan dan secara positif meningkatkan keterlibatan dan kinerja organisasi."
      // />
