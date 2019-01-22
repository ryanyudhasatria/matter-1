import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';


import styles from '../../styles';
import { CheckerMolecule } from './CheckerMolecule';

storiesOf('Molecule.CheckerMolecule', module)
    .add(
        'Checker',
        withInfo({
            styles,
            text: `
                checker 
            `,
        })
        (() => (
            <div>
                <CheckerMolecule 
                    type={text('Type', 'NORMAL')}
                    name="Front End"
                /> 
                <CheckerMolecule 
                    type={text('Type', 'SELECTED')}
                    name="Front End"
                />      
            </div>
                                   
    )));
