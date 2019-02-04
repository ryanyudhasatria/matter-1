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
        'Default Widget Card',
        withInfo({
            styles,
            text: `
                default widget card
            `,
        })
        (() => (
            <WidgetCardMolecule
                HeadingComponent="Your Card"
                ContentComponent="This is a default widget card"
            />               
    )))
    .add(
        'Example Widget Card',
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
                                <span className={cx('db', css`color: ${COLORS.PURPLE.LIGHT}`)}><b>Tommy Chandra</b></span>
                                <span className={cx('db', css`color: ${COLORS.BLACK.NORMAL}`)}>**** **** **** 8000</span>
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
    )));
