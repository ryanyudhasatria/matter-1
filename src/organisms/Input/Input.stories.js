import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { InputOrganism } from './InputOrganism';

storiesOf('Organism.Input', module)
  .add(
    'Basic Input',
    withInfo({
      styles,
      text: `
        Basic input
      `,
    })
    (() => (
    <InputOrganism
      type="text"
      label="Nama Lengkap"
      placeholder="masukkan nama disini"
      icon="user"
      className="ma3 w-30"
    />
  )))
  .add(
    'Basic Input with Error',
    withInfo({
      styles,
      text: `
        Basic input with Error
      `,
    })
    (() => (
    <InputOrganism
      type="text"
      label="Nama Lengkap"
      placeholder="masukkan nama disini"
      icon="user"
      className="ma3 w-30"
      error="Nama harus diisi"
    />
  )));
