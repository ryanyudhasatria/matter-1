import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { IconAtom } from './IconAtom';

storiesOf('Atom.Icon', module)
  .add(
    'Default Icon',
    withInfo({
      styles,
      text: `
        default font-awesome icon
      `,
    })
    (() => (
    <IconAtom name={text('Name', 'user')} />
  )))
  .add(
    'Default Icon with Type Identifier',
    withInfo({
      styles,
      text: `
        default font-awesome icon
      `,
    })
    (() => (
    <IconAtom name={text('Name', 'user')} type={text('Type', 'REGULAR')} />
  )));
