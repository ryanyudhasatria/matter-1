import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
// import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { NumberSliderMolecule } from './NumberSliderMolecule';


storiesOf('Molecule.NumberSlider', module)
    .add(
        'Default Unduh Button',
        withInfo({
            styles,
            text: `
                default unduh button
            `,
        })
        (() => (
            <NumberSliderMolecule
               min = "-2"
               max = "5"                  
               description = 'year'           
            />
    )));
