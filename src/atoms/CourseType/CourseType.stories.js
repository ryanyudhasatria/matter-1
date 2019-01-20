import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { CourseTypeAtom } from './CourseTypeAtom';

storiesOf('Atom.CourseType', module)
    .add(
        'Course Type Code',
        withInfo({
            styles,
            text: `
                default course type
            `,
        })
        (() => (
            <CourseTypeAtom 
                type={text('Type', 'CODE')}            
                alt='icon-code'
            />
    )))
    .add(
        'Course Type Project',
        withInfo({
            styles,
            text: `
                default course type
            `,
        })
        (() => (
            <CourseTypeAtom 
                type={text('Type', 'PROJECT')}                
                alt='icon-project'
            />
    )))
    .add(
        'Course Type Quiz',
        withInfo({
            styles,
            text: `
                default course type
            `,
        })
        (() => (
            <CourseTypeAtom 
                type={text('Type', 'QUIZ')}
                alt='icon-quiz'
            />
    )))
    .add(
        'Course Type Reading',
        withInfo({
            styles,
            text: `
                default course type
            `,
        })
        (() => (
            <CourseTypeAtom 
                type={text('Type', 'READING')}
                alt='icon-reading'
            />
    )))
    .add(
        'Course Type Video',
        withInfo({
            styles,
            text: `
                default course type
            `,
        })
        (() => (
            <CourseTypeAtom 
                type={text('Type', 'VIDEO')}                
                alt='icon-video'
            />
    )));
