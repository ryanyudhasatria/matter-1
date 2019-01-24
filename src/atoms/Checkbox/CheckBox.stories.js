import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
// import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { CheckBoxAtom } from './CheckBoxAtom';

storiesOf('Atom.Checkbox', module)
    .add(
        'Checkbox',
        withInfo({
            styles,
            text: `
                default checkbox
            `
        })
        (() => (
            <CheckBoxAtom 
                id="spacejam"
                value="spacejam"
                htmlFor="spacejam"
                description="Space Jam"
            />
    )));
