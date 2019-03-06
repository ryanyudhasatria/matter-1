import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { SnackbarBannerMolecule } from './SnackbarBannerMolecule';

storiesOf('Molecule.SnackbarBanner', module)
  .add(
    'Notification SnackbarBanner Molecule',
    withInfo({
      styles,
      text: `
        notification SnackbarBanner molecule
      `
    })
    (() => (
    <SnackbarBannerMolecule type="SUCCESS">This a message from Snackbar </SnackbarBannerMolecule>
  )));
