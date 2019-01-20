import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { number } from '@storybook/addon-knobs';

import styles from '../../styles';
import { ProgressBarAtom } from './ProgressBarAtom';

storiesOf('Atom.ProgressBar', module)
  .add(
    'ProgressBar',
    withInfo({
      styles,
      text: `
        ProgressBar
      `,
    })
    (() => (
    <ProgressBarAtom
      progress={number('Progress', 0.5)}
      height={number('Height', 10)}
    />
  )));
