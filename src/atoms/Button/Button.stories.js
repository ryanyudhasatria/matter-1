import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { action, configureActions } from '@storybook/addon-actions';

import styles from '../../styles';
import { ButtonAtom } from './ButtonAtom';

storiesOf('Atom.Button', module)
  .add(
    'Small Button',
    withInfo({
      styles,
      text: `
        small button. Used in small actions, usually not for CTA
      `,
    })
    (() => (
    <ButtonAtom
      onClick={action('button-click')}
      type={text('Type', 'SMALL_PRIMARY')}
    >
      Click Me
    </ButtonAtom>
  )))
  .add(
    'Large Button',
    withInfo({
      styles,
      text: `
        large button. Only use this type of button for CTA
      `,
    })
    (() => (
    <ButtonAtom  
      onClick={action('button-click')}
      type={text('Type', 'DEFAULT_PRIMARY')}
    >
      Click Me
    </ButtonAtom>
  )));
