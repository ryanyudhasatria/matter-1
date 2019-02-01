import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { WidgetCardMolecule } from './WidgetCardMolecule';
import { IconAtom, ButtonAtom } from '../../atoms';

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
                HeadingComponent="Your Card"
                ContentComponent="6 hours of learning time"
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
                HeadingComponent="Your Card"
                ContentComponent={() => (
                    <article className="cf">
                        <div className={cx('fl w-50 tc pt2', css``)}>
                            <IconAtom name={text('Name', 'clock')} type={text('Type', 'LIGHT')} size="1x"/>
                            &nbsp;<span><b>6 hours</b> of learning time</span>
                        </div>
                        <div className="fl w-50 tc">
                            <ButtonAtom className={cx('self-end mt0 mr1', css``)}  type="SMALL_PRIMARY">
                                Lanjutkan
                            </ButtonAtom>
                            <ButtonAtom className={cx('self-end mt0 ml1', css``)} type="SMALL_PRIMARY">
                                Lanjutkan
                            </ButtonAtom>
                        </div>
                    </article>
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
                HeadingComponent={() => (
                    <div>
                        <span>Digital Marketing</span>
                        <span>Rp 6.000.000.000</span>
                    </div>
                )}
                ContentComponent="ini string"
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
                HeadingComponent={() => (
                    <div>
                        <span>Data Analyst</span>
                        <span>Rp 6.000.000.000</span>
                    </div>
                )}
                ContentComponent={() => (
                    <div>
                        <span>6 Hours of learning time</span>
                        <span>Button View Invoice</span>
                    </div>
                )}
            />               
    )));
