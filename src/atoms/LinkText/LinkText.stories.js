import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { LinkTextAtom } from './LinkTextAtom';

storiesOf('Atom.LinkText', module)
  .add(
    'LinkText',
    withInfo({
      styles,
      text: `
        LinkText
      `,
    })
    (() => (
    <LinkTextAtom to={text('Link To', 'https://kode.id')}>
      {text('Text', 'go to KODE page')}
    </LinkTextAtom>
  )));
