import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { MarkdownRendererMolecule } from './MarkdownRendererMolecule';

storiesOf('Molecule.MarkdownRenderer', module)
    .add(
        'Default MarkdownRenderer',
        withInfo({
            styles,
            text: `
                default MarkdownRenderer
            `,
        })
        (() => (
            <MarkdownRendererMolecule content={} />
    )));
