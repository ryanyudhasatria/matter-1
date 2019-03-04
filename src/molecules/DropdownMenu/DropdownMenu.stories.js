import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { cx, css } from 'emotion';
import { text } from '@storybook/addon-knobs';

import styles from '../../styles';
import { DropdownMenuMolecule } from './DropdownMenuMolecule';

storiesOf('Molecule.DropdownMenu', module)
    .add(
        'Default DropdownMenu',
        withInfo({
            styles,
            text: `
                default DropdownMenu
            `,
        })
        (() => (
            <DropdownMenuMolecule
              label="Dropdown Menu"
              className="ml5-ns ml0"
              items = {[
                  {
                    label: 'Ubah nama',
                    handleClick: '',
                  },
              ]}
              data-test="organization-control-user-menu"
            />
    )));
