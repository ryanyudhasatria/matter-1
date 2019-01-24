import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { LogoAtom } from './LogoAtom';

storiesOf('Atom.Logo', module)
    .add(
        'Logo Black',
        withInfo({
            styles,
            text: `
                default logo
            `
        })
        (() => (
            <LogoAtom 
                type={text('Type', 'BLACK')}
                alt="logo black"
                width="400"
                height="100"
            />
    )))
    .add(
        'Logo White',
        withInfo({
            styles,
            text: `
                default logo
            `
        })
        (() => (
            <LogoAtom 
                type={text('Type', 'WHITE')}
                alt="logo white"
                width="500"
                height="200"
            />
    )))
    .add(
        'Logo Beta Black',
        withInfo({
            styles,
            text: `
                default logo
            `
        })
        (() => (
            <LogoAtom 
                type={text('Type', 'BETABLACK')}
                alt="logo beta black"
                width="600"
                heigth="300"
            />
    )))
    .add(
        'Logo Beta White',
        withInfo({
            styles,
            text: `
                default logo
            `
        })
        (() => (
            <LogoAtom 
                type={text('Type', 'BETAWHITE')}
                alt="logo beta white"
                width="700"
                heigth="400"
            />
    )));
