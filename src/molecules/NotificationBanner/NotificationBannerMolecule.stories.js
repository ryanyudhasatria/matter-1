import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { NotificationBannerMolecule } from './NotificationBannerMolecule';

storiesOf('Molecule.NotificationBanner', module)
  .add(
    'Notification Banner Molecule',
    withInfo({
      styles,
      text: `
        notification banner molecule
      `
    })
    (() => (
    <NotificationBannerMolecule type="SUCCESS">Sukses mengupdate data</NotificationBannerMolecule>
  )));
