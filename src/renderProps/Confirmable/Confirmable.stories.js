import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import styles from '../../styles';
import { Confirmable } from './Confirmable';

storiesOf('RenderProps.Confirmable', module)
  .add(
    'Success Notification',
    withInfo({
      styles,
      text: `
      \`\`\`js
        <div>
        <Confirmable>
          {({ showNotification }) => (
            <div className="pa6">
              <button
                onClick={() => showNotification({
                  message: 'Notifikasi Sukses!',
                  type: 'SUCCESS',
                })}
              >
                Show Notification
              </button>
            </div>
          )}
        </Confirmable>
        \`\`\`
      `
    })
    (() => (
      <div>
        <Confirmable
          confirmationMessage="Apakah kamu yakin?"
          confirmableAction={() => alert('all done!!!')}
        >
          {({ confirm }) => (
            <div className="pa6">
              <button
                onClick={confirm}
              >
                Show Confirmation
              </button>
            </div>
          )}
        </Confirmable>
      </div>
  )));
