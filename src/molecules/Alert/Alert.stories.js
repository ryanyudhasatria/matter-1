import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { AlertMolecule } from './AlertMolecule';

storiesOf('Molecule.Alert', module)
    .add(
        'Default Alert Danger',
        withInfo({
            styles,
            text: `
                default alert danger
            `,
        })
        (() => (
            <AlertMolecule
                type={text('Type', 'ALERT_DANGER')}                
            >
                <div class="pa1 ph6">
                    <span class="white b f6 f4-ns dib mr3 fl">
                        <svg class={cx('w1', css`fill:currentcolor;width:20px;`)} data-icon="info" viewBox="0 0 32 32">                        
                            <path d="M16 0 A16 16 0 0 1 16 32 A16 16 0 0 1 16 0 M19 15 L13 15 L13 26 L19 26 z M16 6 A3 3 0 0 0 16 12 A3 3 0 0 0 16 6"></path>
                        </svg>
                    </span>
                    <span class="f6 f5-ns dib mr3 fw7">Your account status is not verified yet. Please verify your email address</span>
                    <a class={cx('fr link f6 f5-ns dib fw7 white underline', css``)} href="#">Resend email confirmation</a>
                </div>
            </AlertMolecule>
    )))
    .add(
        'Default Alert Info',
        withInfo({
            styles,
            text: `
                default alert info
            `,
        })
        (() => (
            <AlertMolecule
                type={text('Type', 'ALERT_INFO')}                
            >
                <div class="pa1 ph6 tc">    
                    <span class="f6 f5-ns dib mr3 tc white">Kami telah mengirimkan email ke user@hacktiv8.com untuk instruksi selanjutnya.</span>                    
                </div>
            </AlertMolecule>
    )));
