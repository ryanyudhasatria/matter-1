import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { AnchorTextAtom } from './AnchorTextAtom';

storiesOf('Atom.AnchorText', module)
  .add(
    'Anchor',
    withInfo({
      styles,
      text: `
        Anchor
      `,
    })
    (() => (
    <AnchorTextAtom to={text('Link To', 'https://kode.id')}>
      {text('Text', 'go to KODE page')}
    </AnchorTextAtom>
  )))
  .add(
    'Animated Anchor',
    withInfo({
      styles,
      text: `
        Anchor
      `,
    })
    (() => (
    <AnchorTextAtom animated to={text('Link To', 'https://kode.id')}>
      {text('Text', 'go to KODE page')}
    </AnchorTextAtom>
  )));
