import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { H3Atom } from './H3Atom';

storiesOf('Atom.H3', module)
  .add(
    'H3',
    withInfo({
      styles,
      text: `
        H3
      `,
    })
    (() => (
    <H3Atom>{text('Heading', 'The brown fox jump over the lazy dog')}</H3Atom>
  )));
