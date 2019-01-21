import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { AvatarAtom } from './AvatarAtom';
import COLORS from '../../constants/colors';

storiesOf('Atom.Avatar', module)  
  .add(
    'Small Circle',
    withInfo({
      styles,
      text: `
        default size small avatar
      `,
    })
    (() => (
        <AvatarAtom 
            type={text('Type', 'SMALL_CIRCLE')}
            src='ahttp://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
            alt='john'
        />
  )))
  .add(
      'Regular Circle',
      withInfo({
          styles,
          text: `
            default size reguler avatar
          `,
      })
      (() => (
        <AvatarAtom 
            type={text('Type', 'REGULAR_CIRCLE')}
            src='http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
            alt='john'
        />
  )))
  .add(
      'Large Circle',
      withInfo({
          styles,
          text: `
            default size large avatar
          `,          
      })
      (() => (
        <AvatarAtom 
            type={text('Type', 'LARGE_CIRCLE')}
            src='ahttp://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
            alt='john'
        />
  )))
  .add(
      'Small Rounded',
      withInfo({
          styles,
          text: `
            default size small avatar
          `
      })
      (() => (
        <AvatarAtom
            type={text('Type', 'SMALL_ROUNDED')}
            src='http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
            alt='john'
        />
  )))
  .add(
    'Regular Rounded',
    withInfo({
        styles,
        text: `
          default size regular avatar
        `
    })
    (() => (
      <AvatarAtom
          type={text('Type', 'REGULAR_ROUNDED')}
          src='ahttp://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
          alt='john'
      />
  )))
  .add(
    'Large Rounded',
    withInfo({
        styles,
        text: `
          default size large avatar
        `
    })
    (() => (
      <AvatarAtom
          type={text('Type', 'LARGE_ROUNDED')}
          src='http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg'
          alt='john'
      />
  )))
  .add(
    'Small Rounded No Image',
    withInfo({
        styles,
        text: `
          default size small avatar
        `
    })
    (() => (
      <AvatarAtom
        type={text('Type', 'SMALL_CIRCLE')}
        name={text('Name', 'John Doe')}
      />
  )))
  .add(
    'Regular Rounded No Image',
    withInfo({
        styles,
        text: `
          default size regular avatar
        `
    })
    (() => (
        <AvatarAtom
            type={text('Type', 'REGULAR_CIRCLE')} 
            name={text('Name', 'John Doe')}
        />
  )))
  .add(
    'Large Rounded No Image',
    withInfo({
        styles,
        text: `
          default size large avatar
        `
    })
    (() => (
        <AvatarAtom
            type={text('Type', 'LARGE_CIRCLE')} 
            className="pa2 tc"
            name={text('Name', 'John Doe')}
        />
  )));  
