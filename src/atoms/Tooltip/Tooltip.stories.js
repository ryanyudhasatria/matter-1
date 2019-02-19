import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { TooltipAtom } from './TooltipAtom';

storiesOf('Atom.Tooltip', module)
  .add(
    'Default',
    withInfo({
      styles,
      text: `
        Default Tooltip Atom
      `,
    })
    (() => (
      <div>
        <TooltipAtom
          message="this is a message"
          content="content for you"
          effect="solid" 
          place="bottom"
        />
      </div>   
      
  )))
  .add(
    'Success',
    withInfo({
      styles,
      text: `
        Default Tooltip Atom Success
      `,
    })
    (() => (
      <div>
        <TooltipAtom
          message="this is a message"
          content="content for you"
          effect="solid" 
          place="right"
          type="success"
        />
      </div>  
  )))
  .add(
    'Error',
    withInfo({
      styles,
      text: `
        Default Tooltip Atom Error
      `,
    })
    (() => (
      <div>
        <TooltipAtom
          message="this is a message"
          content="content for you"
          effect="solid" 
          place="bottom"
          type="error"
        />
      </div>  
  )))
  .add(
    'Warning',
    withInfo({
      styles,
      text: `
        Default Tooltip Atom Warning
      `,
    })
    (() => (
      <div>
        <TooltipAtom
          message="this is a message"
          content="content for you"
          effect="solid" 
          place="bottom"
          type="warning"
        />
      </div>  
  )))
  .add(
    'Light',
    withInfo({
      styles,
      text: `
        Default Tooltip Atom Light
      `,
    })
    (() => (
      <div>
        <TooltipAtom
          message="this is a message"
          content="content for you"
          effect="solid" 
          place="bottom"
          type="light"
        />
      </div>  
  )));
