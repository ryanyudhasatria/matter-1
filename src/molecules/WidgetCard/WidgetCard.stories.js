import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
// import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { WidgetCardMolecule } from './WidgetCardMolecule';

storiesOf('Molecule.WidgetCard', module)
    .add(
        'String All Widget Card',
        withInfo({
            styles,
            text: `
                default widget card
            `,
        })
        (() => (
            <WidgetCardMolecule
                heading="Your Card"
                content="6 hours of learning time"
            />               
    )))
    .add(
        'String Only Heading Widget Card',
        withInfo({
            styles,
            text: `
                default widget card
            `,
        })
        (() => (
            <WidgetCardMolecule
                heading="Your Card"
                content={() => (
                    <div>
                        <span>6 hours of learning time</span>
                        <span>Button View Invoice</span>
                    </div>
                )}
            />               
    )))
    .add(
        'String Only Content Widget Card',
        withInfo({
            styles,
            text: `
                default widget card
            `,
        })
        (() => (
            <WidgetCardMolecule
                heading={() => (
                    <div>
                        <span>Digital Marketing</span>
                        <span>Rp 6.000.000.000</span>
                    </div>
                )}
                content="ini string"
            />               
    )))
    .add(
        'Component All Widget Card',
        withInfo({
            styles,
            text: `
                default widget card
            `,
        })
        (() => (
            <WidgetCardMolecule
                heading={() => (
                    <div>
                        <span>Data Analyst</span>
                        <span>Rp 6.000.000.000</span>
                    </div>
                )}
                content={() => (
                    <div>
                        <span>6 Hours of learning time</span>
                        <span>Button View Invoice</span>
                    </div>
                )}
            />               
    )));

    /*
        <WidgetCard
            heading={() => (
                <div>
                    lalala 123
                </div>
            )}
            content="halo"
        >
    */
