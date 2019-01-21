import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'emotion';

import styles from '../../styles';
import { CardHorizontalAtom } from './CardHorizontalAtom';

storiesOf('Atom.CardHorizontal', module)
    .add(
        'Basic Card Horizontal Atom',
        withInfo({
            styles,
            text: `
                card atom will wrap an element with box shadow. No default padding or margins by default.
            `,
    })
    (() => (
        <CardHorizontalAtom>
            <div className={css`padding: 10px 20px; width: 700px;`}>
                Content of Card
            </div>
        </CardHorizontalAtom>
    )))
    .add(
        'Bordered Card Horizontal Atom',
        withInfo({
            styles,
            text: `
            card atom will wrap an element with box shadow. No default padding or margins by default.
            `,
    })
    (() => (
        <CardHorizontalAtom type="BORDER">
            <div className={css`padding: 10px 20px; width: 700px;`}>
                Content of Card
            </div>
        </CardHorizontalAtom>
    )))
    .add(
        'Grey Card Horizontal Atom',
        withInfo({
            styles,
            text: `
            card atom will wrap an element with box shadow. No default padding or margins by default.
            `,
    })
    (() => (
        <CardHorizontalAtom type="GREY">
            <div className={css`padding: 10px 20px; width: 700px;`}>
                Content of Card
            </div>
        </CardHorizontalAtom>
    )));
