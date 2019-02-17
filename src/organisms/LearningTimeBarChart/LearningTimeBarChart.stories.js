import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'emotion';

import styles from '../../styles';
import { LearningTimeBarChartOrganism } from './LearningTimeBarChartOrganism';

storiesOf('Organism.LearningTimeBarChart', module)
  .add(
    'Small Dataset BarChart',
    withInfo({
      styles,
      text: `
        Small Dataset BarChart
      `,
    })
    (() => (
    <LearningTimeBarChartOrganism
      id="learning-time-1"
      width={500}
      height={400}
      type="SMALL"
      data={[
        { date: '2018-12-12', duration: 3000 },
        { date: '2018-12-13', duration: 8000 },
        { date: '2018-12-14', duration: 0 },
        { date: '2018-12-15', duration: 50000 },
        { date: '2018-12-16', duration: 2500 },
        { date: '2018-12-17', duration: 10000 },
        { date: '2018-12-18', duration: 100 },
      ]}
      className={css`padding: 20px`}
    />
  )))
  .add(
    'Medium Dataset BarChart',
    withInfo({
      styles,
      text: `
        Medium Dataset BarChart
      `,
    })
    (() => (
    <LearningTimeBarChartOrganism
      id="learning-time-2"
      width={500}
      height={400}
      type="MEDIUM"
      data={[
        { date: '2018-12-12', duration: 3000 },
        { date: '2018-12-13', duration: 1000 },
        { date: '2018-12-14', duration: 0 },
        { date: '2018-12-15', duration: 4000 },
        { date: '2018-12-16', duration: 500 },
        { date: '2018-12-17', duration: 1500 },
        { date: '2018-12-18', duration: 3000 },
        { date: '2018-12-19', duration: 1000 },
        { date: '2018-12-20', duration: 0 },
        { date: '2018-12-21', duration: 4000 },
        { date: '2018-12-22', duration: 10000 },
        { date: '2018-12-23', duration: 1500 },
        { date: '2018-12-24', duration: 1500 },
        { date: '2018-12-25', duration: 1500 },
      ]}
    />
  )))
  .add(
    'Large Dataset BarChart',
    withInfo({
      styles,
      text: `
        Large Dataset BarChart
      `,
    })
    (() => (
    <LearningTimeBarChartOrganism
      id="learning-time-3"
      width={500}
      height={400}
      type="LARGE"
      data={[
        { date: '2018-12-1', duration: 3000 },
        { date: '2018-12-2', duration: 1000 },
        { date: '2018-12-3', duration: 0 },
        { date: '2018-12-4', duration: 4000 },
        { date: '2018-12-5', duration: 500 },
        { date: '2018-12-6', duration: 1500 },
        { date: '2018-12-7', duration: 3000 },
        { date: '2018-12-8', duration: 1000 },
        { date: '2018-12-9', duration: 0 },
        { date: '2018-12-10', duration: 10000 },
        { date: '2018-12-11', duration: 500 },
        { date: '2018-12-12', duration: 1500 },
        { date: '2018-12-13', duration: 4000 },
        { date: '2018-12-14', duration: 500 },
        { date: '2018-12-15', duration: 1500 },
        // ne
        { date: '2018-12-16', duration: 3000 },
        { date: '2018-12-17', duration: 1000 },
        { date: '2018-12-18', duration: 0 },
        { date: '2018-12-19', duration: 4000 },
        { date: '2018-12-20', duration: 500 },
        { date: '2018-12-21', duration: 1500 },
        { date: '2018-12-22', duration: 3000 },
        { date: '2018-12-23', duration: 1000 },
        { date: '2018-12-24', duration: 0 },
        { date: '2018-12-25', duration: 4000 },
        { date: '2018-12-26', duration: 500 },
        { date: '2018-12-27', duration: 1500 },
        { date: '2018-12-28', duration: 4000 },
        { date: '2018-12-29', duration: 500 },
        { date: '2018-12-30', duration: 1500 },
      ]}
    />
  )))
  .add(
    'All zeroes Dataset BarChart',
    withInfo({
      styles,
      text: `
        Small Dataset BarChart
      `,
    })
    (() => (
    <LearningTimeBarChartOrganism
      id="learning-time-1"
      width={500}
      height={400}
      type="SMALL"
      data={[
        { date: '2018-12-12', duration: 0 },
        { date: '2018-12-13', duration: 0 },
        { date: '2018-12-14', duration: 0 },
        { date: '2018-12-15', duration: 0 },
        { date: '2018-12-16', duration: 0 },
        { date: '2018-12-17', duration: 0 },
        { date: '2018-12-18', duration: 0 },
      ]}
      className={css`padding: 20px`}
    />
  )));
