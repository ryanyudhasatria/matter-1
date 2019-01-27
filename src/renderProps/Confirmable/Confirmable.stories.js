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
          confirmationMessage="Perubahan tidak dapat dikembalikan"
          confirmableAction={() => alert('all done!!!')}
        >
          {({ showConfirmation }) => (
            <div className="pa6">
              <button
                onClick={showConfirmation}
              >
                Show Confirmation
              </button>
            </div>
          )}
        </Confirmable>
      </div>
  )));
