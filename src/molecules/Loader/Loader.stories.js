import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'emotion';

import styles from '../../styles';
import { LoaderMolecule } from './LoaderMolecule';

storiesOf('Molecule.Loader', module)
  .add(
    'Basic Loader Molecule',
    withInfo({
      styles,
      text: `
        loader molecule
      `
    })
    (() => (
    <LoaderMolecule />
  )));
