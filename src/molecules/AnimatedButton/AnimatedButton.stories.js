import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import styles from '../../styles';
import { AnimatedButtonMolecule } from './AnimatedButtonMolecule';

storiesOf('Molecule.AnimatedButton', module)
  .add(
    'AnimatedButton',
    withInfo({
      styles,
      text: `
        animated button
      `,
    })
    (() => (
    <AnimatedButtonMolecule
      onClick={action('button-click')}
      type={text('Type', 'SMALL_PRIMARY')}
      icon={text('Icon', 'play')}
    >
      Click Me
    </AnimatedButtonMolecule>
  )))
  .add(
    'AnimatedButton disabled',
    withInfo({
      styles,
      text: `
        animated button
      `,
    })
    (() => (
    <AnimatedButtonMolecule
      disabled
      onClick={action('button-click')}
      type={text('Type', 'SMALL_PRIMARY')}
      icon={text('Icon', 'play')}
    >
      Click Me
    </AnimatedButtonMolecule>
  )));
