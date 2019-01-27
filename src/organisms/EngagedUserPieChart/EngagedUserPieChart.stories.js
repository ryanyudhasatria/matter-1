import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { css } from 'emotion';

import styles from '../../styles';
import { EngagedUserPieChartOrganism } from './EngagedUserPieChartOrganism';

storiesOf('Organism.EngagedUserPieChart', module)
  .add(
    'Small Dataset PieChart',
    withInfo({
      styles,
      text: `
        Small Dataset PieChart
      `,
    })
    (() => (
    <EngagedUserPieChartOrganism
      id="engaged-user-1"
      width={600}
      height={400}
      data={[
        {label: "Aktif", count: 10},
        {label: "Tidak Aktif", count: 12},
        {label: "Pending", count: 5},
      ]}
      className={css`padding: 20px`}
    />
  )));
