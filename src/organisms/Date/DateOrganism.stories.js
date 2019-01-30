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
      <div>
        <DateOrganism
            type="text"
            label="Tanggal"
            placeholder="pilih tanggal"
            icon="calendar"
            className="ma3 w-30 dib" 
            options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
                { value: '5', label: '5' },
                { value: '6', label: '6' },
                { value: '7', label: '7' },
                { value: '8', label: '8' },
                { value: '9', label: '9' },
                { value: '10', label: '10' },
                { value: '11', label: '11' },
                { value: '12', label: '12' },
                { value: '13', label: '13' },
                { value: '14', label: '14' },
                { value: '15', label: '15' },
                { value: '16', label: '16' },
                { value: '17', label: '17' },
                { value: '18', label: '18' },
                { value: '19', label: '19' },
                { value: '20', label: '20' },
                { value: '21', label: '21' },
                { value: '22', label: '22' },
                { value: '23', label: '23' },
                { value: '24', label: '24' },
                { value: '25', label: '25' },
                { value: '26', label: '26' },
                { value: '27', label: '27' },
                { value: '28', label: '28' },
                { value: '29', label: '29' },
                { value: '30', label: '30' },
                { value: '31', label: '31' },
            ]}
            onChange={() => {}}
        />
        <DateOrganism
            type="text"
            label="Bulan"
            placeholder="pilih bulan"
            icon="calendar"
            className="ma3 w-30 dib"
            options={[
            { value: 'Januari', label: 'Januari' },
            { value: 'Februari', label: 'Februari' },
            { value: 'Maret', label: 'Maret' },
            { value: 'April', label: 'April' },
            { value: 'Mei', label: 'Mei' },
            { value: 'Juni', label: 'Juni' },
            { value: 'Juli', label: 'Juli' },
            { value: 'Agustus', label: 'Agustus' },
            { value: 'September', label: 'September' },
            { value: 'Oktober', label: 'Oktober' },
            { value: 'November', label: 'November' },
            { value: 'Desember', label: 'Desember' },
            ]}
            onChange={() => {}}
        />
        <DateOrganism
            type="text"
            label="Tahun"
            placeholder="pilih tahun"
            icon="calendar"
            className="ma3 w-30 dib"
            options={[
                { value: '2018', label: '2018' },
                { value: '2019', label: '2019' },
                { value: '2020', label: '2020' },
            ]}
            onChange={() => {}}
        />
      </div>
      
  )));
