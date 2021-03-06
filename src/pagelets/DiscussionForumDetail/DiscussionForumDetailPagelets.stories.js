import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { DiscussionForumDetailPagelets } from './DiscussionForumDetailPagelets';

storiesOf('Pagelets.DiscussionForumDetail', module)
  .add(
    'Discussion Forum Detail',
    withInfo({
      styles,
      text: `
        Discussion Forum Detail
      `,
    })
    (() => (
      <div>
        <DiscussionForumDetailPagelets 
          srcQuestion="http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg"
          altQuestion="john dave"
          srcResponse="error"
          altResponse="victor"
          question="Cluster on Windows"
          description="Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling. Is it ok to change in two works. Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling"
          response="4"
          username="Victor"
          time="4"
        /> 
      </div>          
  )));
