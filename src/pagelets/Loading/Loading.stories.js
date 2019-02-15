import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { LoadingPagelets } from './LoadingPagelets';

storiesOf('Pagelets.Loading', module)
  .add(
    'Default loading pagelets',
    withInfo({
      styles,
      text: `
        Default loading pagelets
      `,
    })
    (() => (
    <LoadingPagelets message="Primary message" sub="Sub message for description" />
  )));
