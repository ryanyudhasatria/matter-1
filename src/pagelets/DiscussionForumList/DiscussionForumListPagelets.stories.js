import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { DiscussionForumListPagelets } from './DiscussionForumListPagelets';

storiesOf('Pagelets.DiscussionForumList', module)
  .add(
    'Discussion Forum List',
    withInfo({
      styles,
      text: `
        Discussion Forum List
      `,
    })
    (() => (
      <div>
        <DiscussionForumListPagelets 
          src="ahttp://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg"
          alt="john dave"
          question="Cluster on Windows"
          description="Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling. Is it ok to change in two works. Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling"
          response="4"
        /> 
        <DiscussionForumListPagelets 
          src=""
          alt="john dave"
          question="Cluster on Windows"
          description="Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling. Is it ok to change in two works. Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling"
          response="4"
        /> 
        <DiscussionForumListPagelets 
          src="http://infinitydream.net/adriatic/wp-content/uploads/2017/01/avatar03.jpg"
          alt="john dave"
          question="Cluster on Windows"
          description="Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Hello, on Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling. Is it ok to change in two works. Windows cluster doesn't work in Round Robin (SCHED_RR) by default, but with OS scaling"
          response="4"
        />     
      </div>          
  )));
