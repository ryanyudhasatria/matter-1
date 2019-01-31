import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styles from '../../styles';
import { DateOrganism } from './DateOrganism';

storiesOf('Organism.Date', module)
  .add(
    'Basic date',
    withInfo({
      styles,
      text: `
        Basic date
      `,
    })
    (() => (
      
        <DateOrganism            
            maxYear= "2020"
            minYear= "2018"            
            onChange={(value) => { console.log(value) }} // DD-MM-YYYY
        />  
  )));
