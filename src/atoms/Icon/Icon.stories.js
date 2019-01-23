import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { IconAtom } from './IconAtom';

storiesOf('Atom.Icon', module)
  .add(
    'Default Icon',
    withInfo({
      styles,
      text: `
        default font-awesome icon
      `,
    })
    (() => (
    <div>
      <IconAtom 
        name={text('Name', 'address-book')} 
        type={text('Type', 'LIGHT')}
        size="6x"
      />
      <IconAtom 
        name={text('Name', 'archive')} 
        type={text('Type', 'LIGHT')}
        size="5x"
      />
      <IconAtom 
        name={text('Name', 'arrow-alt-circle-down')} 
        type={text('Type', 'LIGHT')}
        size="4x"
      />      
    </div>
  )))
  .add(
    'Default Icon with Type Identifier',
    withInfo({
      styles,
      text: `
        default font-awesome icon
      `,
    })
    (() => (
      <IconAtom 
        name={text('Name', 'AddressBook')} 
        type={text('Type', 'LIGHT')}
        size="1x"
      />
  )));
