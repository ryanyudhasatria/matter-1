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
            slidesToShow="1.2"
            items={[
                {
                    linkUrl: 'http://www.google.com',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner1.png'
                },
                {
                    linkUrl: 'http://www.facebook.com',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner2.png'
                },
                {
                    linkUrl: 'http://www.kesini.com',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner3.png'
                },
                {
                    linkUrl: 'http://www.kesini.com',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner1.png'
                },
                {
                    linkUrl: 'http://www.kesini.com',
                    imageUrl: 'https://s3-ap-southeast-1.amazonaws.com/kode-images/public/banners/banner2.png'
                }
            ]}            
            />                            
    )));
