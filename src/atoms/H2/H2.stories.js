import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { H2Atom } from './H2Atom';

storiesOf('Atom.H2', module)
  .add(
    'H2',
    withInfo({
      styles,
      text: `
        H2
      `,
    })
    (() => (
    <H2Atom>{text('Heading', 'The brown fox jump over the lazy dog')}</H2Atom>
  )));
