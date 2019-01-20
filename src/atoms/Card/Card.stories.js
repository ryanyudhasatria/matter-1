import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'emotion';

import styles from '../../styles';
import { CardAtom } from './CardAtom';

storiesOf('Atom.Card', module)
  .add(
    'Basic Card Atom',
    withInfo({
      styles,
      text: `
        card atom will wrap an element with box shadow. No default padding or margins by default.
      `,
    })
    (() => (
    <CardAtom>
      <div className={css`padding: 10px 20px; width: 300px;`}>
        Content of Card
      </div>
    </CardAtom>
  )))
  .add(
    'Bordered Card Atom',
    withInfo({
      styles,
      text: `
        card atom will wrap an element with box shadow. No default padding or margins by default.
      `,
    })
    (() => (
    <CardAtom type="BORDER">
      <div className={css`padding: 10px 20px; width: 300px;`}>
        Content of Card
      </div>
    </CardAtom>
  )))
  .add(
    'Grey Card Atom',
    withInfo({
      styles,
      text: `
        card atom will wrap an element with box shadow. No default padding or margins by default.
      `,
    })
    (() => (
    <CardAtom type="GREY">
      <div className={css`padding: 10px 20px; width: 300px;`}>
        Content of Card
      </div>
    </CardAtom>
  )));
