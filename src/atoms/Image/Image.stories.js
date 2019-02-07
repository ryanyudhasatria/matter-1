import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'emotion';

import styles from '../../styles';
import { ImageAtom } from './ImageAtom';

storiesOf('Atom.Image', module)
  .add(
    'Default Image',
    withInfo({
      styles,
      text: `
        default image
      `,
    })
    (() => (
    <div>
      <ImageAtom
        src="https://i.imgur.com/tsXAZrq.jpg"
        alt="john"
        width={1000}
        height={1000}
        delay={25}
        duration={0.9}
      />
    </div>
  )));
