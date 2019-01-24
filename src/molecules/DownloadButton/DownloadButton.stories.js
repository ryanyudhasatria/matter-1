import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
// import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { DownloadButtonMolecule } from './DownloadButtonMolecule';
import * as iconDownload from './subtract.png'

storiesOf('Molecule.DownloadButton', module)
    .add(
        'Default Unduh Button',
        withInfo({
            styles,
            text: `
                default unduh button
            `,
        })
        (() => (
            <DownloadButtonMolecule
                name="Unduh"
                src={iconDownload}
                alt="unduhicon"
            />
    )))
    .add(
        'Default Download Button',
        withInfo({
            styles,
            text: `
                default download button
            `,
        })
        (() => (
            <DownloadButtonMolecule
                name="Download"
                src={iconDownload}
                alt="unduhicon"
            />
    )));
