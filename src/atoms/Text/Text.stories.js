import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { TextAtom } from './TextAtom';

storiesOf('Atom.Text', module)
  .add(
    'Basic Text without Size Identifier',
    withInfo({
      styles,
      text: `
        Text without size will render an "M" sized font
      `,
    })
    (() => (
    <TextAtom>The brown fox jump over the lazy dog</TextAtom>
  )))
  .add(
    'Basic Text with Size Identifier',
    withInfo({
      styles,
      text: `
        Text wit size will render font size accordingly
      `,
    })
    (() => (
    <TextAtom size={text('Size', 'L')}>The brown fox jump over the lazy dog</TextAtom>
  )));
