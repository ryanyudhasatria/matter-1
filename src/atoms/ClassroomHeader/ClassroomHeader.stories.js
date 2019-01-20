import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { ClassroomHeaderAtom } from './ClassroomHeaderAtom';

storiesOf('Atom.ClassroomHeader', module)
  .add(
    'App Header',
    withInfo({
      styles,
      text: `header`,
    })
    (() => (
    <ClassroomHeaderAtom>
      should be header
    </ClassroomHeaderAtom>
  )));
