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
    <ImageAtom
      src="http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg"
      alt="john"
      className={css`width: 100px`}
    />
  )));
