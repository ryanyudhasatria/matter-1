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
        <DatatablePagelets
        theme={text('Type', 'themeOne')}
        className={cx('', css`
            
         `)}
        title="Daftar Anggota"
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
            cell: row => <div style={{ fontWeight: 'normal', fontSize: '18px' }}>{row.email}</div>,        
            },
            {
            name: 'Tipe',
            selector: 'type',
            sortable: true,   
            cell: row => <div style={{ fontWeight: 'normal', fontSize: '18px' }}>{row.type}</div>,         
            },
        ]}
        data={[
            { id: 1, name: 'Ronald Ernaldo', email: 'ronald@kode.id', type: 'Admin' }, 
            { id: 2, name: 'Erik Yulius', email: 'erik@kode.id', type: 'Course Manager' },
            { id: 3, name: 'Juinal William', email: 'juinal@kode.id', type: 'Member' },
        ]}
      />
  )));
