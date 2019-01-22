import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { ReviewCardMolecule } from './ReviewCardMolecule';

storiesOf('Molecule.ReviewCard', module)
    .add(
        'Default Review Card',
        withInfo({
            styles,
            text: `
                default review card
            `,
        })
        (() => (
            <div>
            <ReviewCardMolecule 
                typeCard={text('Type', 'GREY')}
                type={text('Type', 'REGULAR_CIRCLE')}
                src='http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
                alt='john'
                name="Tom T"
                date="Finish the course 5 month ago"
                rating="5"
                stars="4"
                description="The course is quite valuable, as it is rigorous and provides me an opportunity to learn and practice applying cutting edge skills. The personalized feedback provided on the submitted projects is encouraging and provides me insight in areas where I find challenging."
            /> 
            
            <ReviewCardMolecule 
                typeCard={text('Type', 'GREY')}
                type={text('Type', 'REGULAR_CIRCLE')}
                src='ImageNotFound'
                alt='john'
                name="Tom T"
                date="Finish the course 5 month ago"
                rating="5"
                stars="4"
                description="The course is quite valuable, as it is rigorous and provides me an opportunity to learn and practice applying cutting edge skills. The personalized feedback provided on the submitted projects is encouraging and provides me insight in areas where I find challenging."
            /> 

            <ReviewCardMolecule 
                typeCard={text('Type', 'GREY')}
                type={text('Type', 'REGULAR_CIRCLE')}
                src=''
                alt='john'
                name="Tom T"
                date="Finish the course 5 month ago"
                rating="5"
                stars="4"
                description="The course is quite valuable, as it is rigorous and provides me an opportunity to learn and practice applying cutting edge skills. The personalized feedback provided on the submitted projects is encouraging and provides me insight in areas where I find challenging."
            /> 
            </div>
    )));
