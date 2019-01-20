import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { AppHeaderAtom } from './AppHeaderAtom';

storiesOf('Atom.AppHeader', module)
  .add(
    'App Header',
    withInfo({
      styles,
      text: `header`,
    })
    (() => (
    <AppHeaderAtom>
      should be header
    </AppHeaderAtom>
  )));
