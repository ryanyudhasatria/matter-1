import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { TeacherCardMolecule } from './TeacherCardMolecule';

storiesOf('Molecule.TeacherCard', module)
    .add(
        'Default Teacher Card',
        withInfo({
            styles,
            text: `
                default teacher card
            `,
        })
        (() => (
            <div>
                <TeacherCardMolecule 
                    typeCard={text('Type', 'GREY')}
                    type={text('Type', 'REGULAR_ROUNDED')}
                    src='http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
                    alt='john'
                    name="Tom T"
                    instructorRole="Curriculum Director at Hacktiv8"
                    description="The course is quite valuable, as it is rigorous and provides me an opportunity to learn and practice applying cutting edge skills. The personalized feedback provided on the submitted projects is encouraging and provides me insight in areas where I find challenging."
                />                
            </div>                    
    )));
