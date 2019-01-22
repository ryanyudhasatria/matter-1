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
                    src='http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
                    alt='john'
                    name="Tom T"
                    instructorRole="Curriculum Director at Hacktiv8"
                    description="I am a veteran mobile developer having built over 57 mobile apps for iOS, and I've also build multiple Unity 3D games, including Call of Duty Ghosts mobile.."
                />

                <TeacherCardMolecule 
                    src='ImageNotFound'
                    alt='john'
                    name="Tom T"
                    instructorRole="Curriculum Director at Hacktiv8"
                    description="I am a veteran mobile developer having built over 57 mobile apps for iOS, and I've also build multiple Unity 3D games, including Call of Duty Ghosts mobile.."
                /> 

                <TeacherCardMolecule 
                    src=''
                    alt='john'
                    name="Tom T"
                    instructorRole="Curriculum Director at Hacktiv8"
                    description="I am a veteran mobile developer having built over 57 mobile apps for iOS, and I've also build multiple Unity 3D games, including Call of Duty Ghosts mobile.."
                />                
            </div>                    
    )));
