import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { SnackbarMolecule } from './SnackbarMolecule';

storiesOf('Molecule.Snackbar', module)
    .add(
        'Default Snackbar Molecule',
        withInfo({
            styles,
            text: `
                default Snackbar Molecule
            `
        })
        (() => (
            <SnackbarMolecule>
                {({ showNotification }) => (
                    <div className="pa6">
                    <button
                        onClick={() => showNotification({
                        message: 'This is a message...',
                        type: 'FAILURE',
                        duration: '5000'
                        })}
                    >
                        Show Snackbar
                    </button>
                    </div>
                )}
            </SnackbarMolecule>
    )));
