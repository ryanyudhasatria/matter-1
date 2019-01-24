import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
// import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { BannerMolecule } from './BannerMolecule';

storiesOf('Molecule.Banner', module)
    .add(
        'Banner',
        withInfo({
            styles,
            text: `
                default banner
            `,
        })
        (() =>(
            <BannerMolecule
                icon={text('Icon', 'chevron-left')}
            />                            
    )));
