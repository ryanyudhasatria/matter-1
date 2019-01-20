import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { H1Atom } from './H1Atom';

storiesOf('Atom.H1', module)
  .add(
    'H1',
    withInfo({
      styles,
      text: `
        H1
      `,
    })
    (() => (
    <H1Atom>{text('Heading', 'The brown fox jump over the lazy dog')}</H1Atom>
  )));
