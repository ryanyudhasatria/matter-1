import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { WidgetCardMolecule } from './WidgetCardMolecule';
import { IconAtom, ButtonAtom } from '../../atoms';

import COLORS from '../../constants/colors';

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
                    <article className="cf pt2">
                        <div className={cx('fl w-50 pt1 flex', css``)}>
                            <IconAtom name={text('Name', 'credit-card')} type={text('Type', 'LIGHT')} className={cx('', css`color: ${COLORS.BLACK.LIGHT}`)} size="3x"/>
                            <div className={cx('fl ml4 pt2', css``)}>
                                <span className={cx('dib', css`color: ${COLORS.PURPLE.LIGHT}`)}><b>Tommy Chandra</b></span>
                                <span className={cx('dib', css`color: ${COLORS.BLACK.NORMAL}`)}>**** **** **** 8000</span>
                            </div>                            
                        </div>
                        <div className={cx('fl w-50 dib', css``)}>
                            <ButtonAtom className={cx(' mt2', css` float:right; color: ${COLORS.BLACK.NORMAL}`)}  type="SMALL_GREY">
                                Perbaharui Kartu
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
                    <article className="cf pt2">
                        <div className={cx('fl w-40 pt1', css``)}>
                            <IconAtom name={text('Name', 'clock')} type={text('Type', 'LIGHT')} size="1x"/>
                            &nbsp;<span><b>6 hours</b> of learning time</span>
                        </div>
                        <div className={cx('fl w-60 dib', css``)}>
                            <ButtonAtom className={cx(' mt0', css` float:right;`)}  type="SMALL_GREY">
                                Download Invoice
                            </ButtonAtom>
                            <ButtonAtom className={cx(' mt0', css` float:right;margin-right: 1rem;`)} type="SMALL_GREY">
                                View Invoice
                            </ButtonAtom>
                        </div>
                    </article>
                )}
            />               
    )));
