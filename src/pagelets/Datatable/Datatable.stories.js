import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { css, cx } from 'emotion';

import styles from '../../styles';
import { DatatablePagelets } from './DatatablePagelets';

storiesOf('Pagelets.Datatable', module)
  .add(
    'Datatable',
    withInfo({
      styles,
      text: `
        Datatable
      `,
    })
    (() => (
      <div>
        {/* <DatatablePagelets
        title="stories"
        columns={[
            {
            name: 'Title',
            selector: 'title',
            sortable: false,
            },
            {
            name: 'Year',
            selector: 'year',
            sortable: true,
            right: true,
            },
        ]}
        data={[
            { id: 1, title: 'Conansss the Barbarian', year: '1982' }, 
            { id: 2, title: 'Avenger', year: '2018' },
        ]}
      /> */}

        <DatatablePagelets
         className={cx('', css`
            border: 2px solid #d9d4ff;
            border-radius: 8px;
            background: #EFEDFF;
            margin: 10px;
            max-width: 1049px;
         `)}
        title="my data"
        columns={[
            {
            name: 'Nama',
            selector: 'name',
            sortable: false,
            cell: row => <div style={{ fontWeight: 700, fontSize: '19px' }}>{row.name}</div>,
            },
            {
            name: 'Email',
            selector: 'email',
            sortable: true,    
            cell: row => <div style={{ fontWeight: 'normal', fontSize: '19px' }}>{row.email}</div>,        
            },
            {
            name: 'Tipe',
            selector: 'type',
            sortable: true,   
            cell: row => <div style={{ fontWeight: 'normal', fontSize: '19px' }}>{row.type}</div>,         
            },
        ]}
        data={[
            { id: 1, name: 'Ronald Ernaldo', email: 'ronald@kode.id', type: 'Admin' }, 
            { id: 2, name: 'Erik Yulius', email: 'erik@kode.id', type: 'Course Manager' },
            { id: 3, name: 'Juinal William', email: 'juinal@kode.id', type: 'Member' },
        ]}
      />
      </div>
  )));
