import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { SelectOrganism } from './SelectOrganism';

storiesOf('Organism.Select', module)
  .add(
    'Basic Select',
    withInfo({
      styles,
      text: `
        Basic select
      `,
    })
    (() => (
    <SelectOrganism
      type="text"
      label="Nama Kota"
      placeholder="pilih kota anda"
      icon="home"
      className="ma3 w-30"
      options={[
        { value: 'JKT', label: 'Jakarta' },
        { value: 'BDG', label: 'Bandung' },
        { value: 'SBY', label: 'Surabaya' },
      ]}
      onChange={() => {}}
    />
  )));
